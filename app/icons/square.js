import { VDOM } from 'cx/ui';
import { Icon } from 'cx/widgets';

Icon.register(
   'square',
   (props) => {
      return (
         <svg {...props} viewBox="0 0 64 64">
            <rect x="14" y="14" width="36" height="36" fill="currentColor" />
         </svg>
      );
   },
   true
);
