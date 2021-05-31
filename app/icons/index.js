import { Icon } from 'cx/widgets';
import { VDOM } from 'cx/ui';
import {
   AdjustmentsIcon,
   ArrowDownIcon,
   ArrowUpIcon,
   CalendarIcon,
   CashIcon,
   ChartBarIcon,
   ChevronDownIcon,
   CogIcon,
   CreditCardIcon,
   CurrencyDollarIcon,
   CurrencyEuroIcon,
   DocumentReportIcon,
   DocumentTextIcon,
   ExclamationIcon,
   InformationCircleIcon,
   PresentationChartBarIcon,
   PuzzleIcon,
   SearchIcon,
   TemplateIcon,
   UserGroupIcon,
   UserIcon,
   UsersIcon,
   ViewListIcon,
} from '@heroicons/react/outline';

//register all icons that are used within the application

Icon.register('chart-bar', (props) => <ChartBarIcon {...props} />);

Icon.register('adjustments', (props) => <AdjustmentsIcon {...props} />);

Icon.register('document-report', (props) => <DocumentReportIcon {...props} />);

Icon.register('view-list', (props) => <ViewListIcon {...props} />);

Icon.register('presentation-chart-bar', (props) => <PresentationChartBarIcon {...props} />);

Icon.register('document-report', (props) => <DocumentReportIcon {...props} />);

Icon.register('search', (props) => <SearchIcon {...props} />);

Icon.register('calendar', (props) => <CalendarIcon {...props} />);

Icon.register('template', (props) => <TemplateIcon {...props} />);

Icon.register('puzzle', (props) => <PuzzleIcon {...props} />);

Icon.register('cash', (props) => <CashIcon {...props} />);

Icon.register('arrow-up', (props) => <ArrowUpIcon {...props} />);
Icon.register('arrow-down', (props) => <ArrowDownIcon {...props} />);

Icon.register('exclamation', (props) => <ExclamationIcon {...props} />);

Icon.register('credit-card', (props) => <CreditCardIcon {...props} />);

Icon.register('document-text', (props) => <DocumentTextIcon {...props} />);

Icon.register('cog', (props) => <CogIcon {...props} />);

Icon.register('adjustments', (props) => <AdjustmentsIcon {...props} />);

Icon.register('users', (props) => <UsersIcon {...props} />);

Icon.register('user', (props) => <UserIcon {...props} />);

Icon.register('user-group', (props) => <UserGroupIcon {...props} />);

Icon.register('currency-dollar', (props) => <CurrencyDollarIcon {...props} />);

Icon.register('currency-euro', (props) => <CurrencyEuroIcon {...props} />);

Icon.register('chevron-down', (props) => <ChevronDownIcon {...props} />);
Icon.register('drop-down', (props) => <ChevronDownIcon {...props} />);

Icon.register('information-circle', (props) => <InformationCircleIcon {...props} />);
