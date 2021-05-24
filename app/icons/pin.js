import { Icon } from 'cx/widgets';
import { VDOM } from 'cx/ui';

Icon.register('pin', (props) => (
   <svg {...props} viewBox="0 0 24 24">
      <ellipse cx="15.409" cy="8.77" rx="5.411" ry="5.225" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10.631 11.366L2.138 22.02l10.488-8.087z" fill="currentColor" stroke="none" />
   </svg>
));
