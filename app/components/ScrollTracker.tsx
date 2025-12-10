/** @jsxImportSource react */
import { Widget, VDOM, WidgetConfig, Instance, RenderingContext } from 'cx/ui';
import { addEventListenerWithOptions, isNumber } from 'cx/util';

export interface ScrollTrackerConfig extends WidgetConfig {
   scroll?: number;
   horizontal?: boolean;
}

export class ScrollTracker extends Widget {
   declare horizontal?: boolean;

   declareData(...args: Record<string, unknown>[]) {
      super.declareData(...args, {
         scroll: undefined,
      });
   }

   render(context: RenderingContext, instance: Instance, key: string) {
      return (
         <ScrollTrackerCmp
            key={key}
            scroll={(instance.data as { scroll?: number }).scroll}
            instance={instance}
            horizontal={this.horizontal}
         />
      );
   }
}

interface ScrollTrackerCmpProps {
   scroll?: number;
   instance: Instance;
   horizontal?: boolean;
}

class ScrollTrackerCmp extends VDOM.Component<ScrollTrackerCmpProps> {
   el: HTMLElement | null = null;
   unsubscribe?: () => void;

   render() {
      if (this.props.horizontal)
         return (
            <div
               style={{ position: 'absolute' }}
               ref={(el) => {
                  this.el = el?.parentElement;
               }}
            />
         );
      return null;
   }

   componentDidUpdate() {
      let { scroll, horizontal } = this.props;
      if (scroll == null) {
         if (horizontal) this.el.scrollLeft = 0;
         else document.scrollingElement.scrollTop = 0;
      }
   }

   componentDidMount() {
      let { scroll, horizontal, instance } = this.props;
      this.unsubscribe = addEventListenerWithOptions(
         // @ts-expect-error
         horizontal ? this.el : document,
         'scroll',
         () => {
            let pos = horizontal ? this.el.scrollLeft : document.scrollingElement.scrollTop;
            instance.store.silently(() => {
               instance.set('scroll', pos, { internal: true });
            });
         },
         { passive: true },
      );

      if (isNumber(scroll)) {
         if (horizontal) this.el.scrollLeft = scroll;
         else document.scrollingElement.scrollTop = scroll;
      }
   }

   componentWillUnmount() {
      this.unsubscribe();
   }
}
