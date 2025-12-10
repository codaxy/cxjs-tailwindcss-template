import { enableTooltips, enableMsgBoxAlerts, Toast, Tooltip } from 'cx/widgets';
import { registerToastImplementation } from '../util/toasts';

enableTooltips();
enableMsgBoxAlerts();

Tooltip.prototype.placementOrder =
   'up down right left up-right up-left right-up right-down down-right down-left left-up left-down';

registerToastImplementation({
   showErrorToast: (err: unknown) => {
      let message = err;
      if (err && typeof err === 'object' && 'message' in err) {
         message = (err as Error).message;
      }
      Toast.create({
         items: (
            <cx>
               <div>{String(message)}</div>
            </cx>
         ),
         timeout: 5000,
         mod: 'error',
      }).open(null!);
   },
   showInfoToast: (content: string) => {
      Toast.create({
         items: (
            <cx>
               <div class="text-sm">{content}</div>
            </cx>
         ),
         timeout: 5000,
         mod: 'dark',
      }).open(null!);
   },
});

export default <cx></cx>;
