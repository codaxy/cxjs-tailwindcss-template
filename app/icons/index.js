import { Icon } from 'cx/widgets';
import { VDOM } from 'cx/ui';
import {
   AdjustmentsHorizontalIcon,
   ArrowDownIcon,
   ArrowLeftIcon,
   ArrowUpIcon,
   CalendarIcon,
   BanknotesIcon,
   ChartBarIcon,
   ChevronDownIcon,
   CogIcon,
   CreditCardIcon,
   CurrencyDollarIcon,
   CurrencyEuroIcon,
   DocumentChartBarIcon,
   DocumentTextIcon,
   ShieldExclamationIcon,
   InformationCircleIcon,
   PencilIcon,
   PlusIcon,
   PresentationChartBarIcon,
   PrinterIcon,
   PuzzlePieceIcon,
   ArrowPathIcon,
   MagnifyingGlassIcon,
   RectangleGroupIcon,
   UserGroupIcon,
   UserIcon,
   UsersIcon,
   Bars4Icon,
   XMarkIcon,
} from '@heroicons/react/24/outline';

//register all icons that are used within the application

Icon.register('chart-bar', (props) => <ChartBarIcon {...props} />);

Icon.register('adjustments', (props) => <AdjustmentsHorizontalIcon {...props} />);

Icon.register('document-report', (props) => <DocumentChartBarIcon {...props} />);

Icon.register('view-list', (props) => <Bars4Icon {...props} />);

Icon.register('presentation-chart-bar', (props) => <PresentationChartBarIcon {...props} />);

Icon.register('search', (props) => <MagnifyingGlassIcon {...props} />);

Icon.register('calendar', (props) => <CalendarIcon {...props} />);

Icon.register('template', (props) => <RectangleGroupIcon {...props} />);

Icon.register('puzzle', (props) => <PuzzlePieceIcon {...props} />);

Icon.register('cash', (props) => <BanknotesIcon {...props} />);

Icon.register('arrow-up', (props) => <ArrowUpIcon {...props} />);
Icon.register('arrow-down', (props) => <ArrowDownIcon {...props} />);

Icon.register('exclamation', (props) => <ShieldExclamationIcon {...props} />);

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

Icon.register('refresh', (props) => <ArrowPathIcon {...props} />);

Icon.register('x', (props) => <XMarkIcon {...props} />);
Icon.register('close', (props) => <XMarkIcon {...props} />);

Icon.register('plus', (props) => <PlusIcon {...props} />);

Icon.register('arrow-left', (props) => <ArrowLeftIcon {...props} />);

Icon.register('printer', (props) => <PrinterIcon {...props} />);

Icon.register('pencil', (props) => <PencilIcon {...props} />);
