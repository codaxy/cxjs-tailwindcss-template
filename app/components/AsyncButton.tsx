import { Instance, RenderingContext } from 'cx/ui';
import { Button, ButtonConfig, HtmlElementInstance, MsgBox, Toast } from 'cx/widgets';

export interface AsyncButtonConfig extends ButtonConfig {
   busyText?: string;
   errorHandling?: 'none' | 'console' | 'alert' | 'toast';
}

export class AsyncButton extends Button {
   declare busyText?: string;
   declare errorHandling: 'none' | 'console' | 'alert' | 'toast';

   constructor(config?: AsyncButtonConfig) {
      super(config);
   }

   declareData(...args: Record<string, unknown>[]) {
      return super.declareData(...args, {
         busyText: undefined,
      });
   }

   prepareData(context: RenderingContext, instance: HtmlElementInstance) {
      let { data, state } = instance as { data: Record<string, unknown>; state: { running?: boolean } };

      if (state && state.running) {
         data.icon = 'loading';

         if (data.busyText) data.text = data.busyText;

         data.disabled = true;
      }

      super.prepareData(context, instance);
   }

   attachProps(context: RenderingContext, instance: HtmlElementInstance, props: Record<string, unknown>) {
      delete props.busyText;
      super.attachProps(context, instance, props);
   }

   init() {
      let onClick = this.onClick as unknown as ((e: Event, instance: Instance) => unknown) | string | undefined;

      let invoke = function (
         this: AsyncButton,
         handler: ((e: Event, instance: Instance) => unknown) | string,
         e: Event,
         instance: Instance
      ) {
         if (typeof handler === 'string') return instance.invokeControllerMethod(handler, e, instance);
         else return handler.call(this, e, instance);
      };

      this.onClick = ((e: Event, instance: Instance) => {
         let promise = onClick && invoke.call(this, onClick, e, instance);
         if (promise) {
            instance.setState({ running: true });
            Promise.resolve(promise)
               .then((x) => {
                  instance.setState({ running: false });
                  return x;
               })
               .catch((err) => {
                  instance.setState({ running: false });
                  switch (this.errorHandling) {
                     case 'none':
                        throw err;

                     case 'console':
                        console.log(err); // eslint-disable-line no-console
                        break;

                     case 'alert':
                        MsgBox.alert(String(err));
                        break;

                     case 'toast': {
                        let toast = Toast.create({
                           message: String(err),
                           timeout: 5000,
                        });
                        toast.open(this.store);
                        break;
                     }
                  }
               });
         }
      }) as typeof this.onClick;

      super.init();
   }
}
