import { Icon } from 'cx/widgets';
import { VDOM } from 'cx/ui';

Icon.register('edit', (props) => (
   <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
   </svg>
));
