import { Icon } from 'cx/widgets';
import { VDOM } from 'cx/ui';
import { ChartBarIcon } from '@heroicons/react/outline';

Icon.register('chart-bar', (props) => <ChartBarIcon {...props} />);
