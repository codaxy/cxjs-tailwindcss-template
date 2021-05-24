import { Icon } from 'cx/widgets';
import { VDOM } from 'cx/ui';
import { StatusOnlineIcon } from '@heroicons/react/outline';

Icon.register('status', (props) => <StatusOnlineIcon {...props} />);
