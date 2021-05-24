import { Icon } from 'cx/widgets';
import { VDOM } from 'cx/ui';

Icon.register('clock', (props) => (
   <svg {...props} viewBox="0 0 24 24">
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         stroke="currentColor"
         fill="none"
         d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
   </svg>
));
