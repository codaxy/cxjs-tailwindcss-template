import { Icon } from 'cx/widgets';
import { VDOM } from 'cx/ui';
import {
   AdjustmentsIcon,
   ArrowUpIcon,
   CalendarIcon,
   CashIcon,
   ChartBarIcon,
   CreditCardIcon,
   DocumentReportIcon,
   ExclamationIcon,
   PresentationChartBarIcon,
   PuzzleIcon,
   SearchIcon,
   TemplateIcon,
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

Icon.register('exclamation', (props) => <ExclamationIcon {...props} />);

Icon.register('credit-card', (props) => <CreditCardIcon {...props} />);
