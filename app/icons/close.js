import { Icon } from 'cx/widgets';
import { VDOM } from 'cx/ui';

Icon.register('close', (props) => (
   <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
   </svg>
));
