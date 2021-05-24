import { Icon } from 'cx/widgets';
import { VDOM } from 'cx/ui';

Icon.register('search', (props) => (
   <svg {...props} viewBox="0 0 24 24">
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         stroke="currentColor"
         fill="none"
         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
   </svg>
));
