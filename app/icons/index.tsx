/** @jsxImportSource react */
import { Icon } from 'cx/widgets';
import type { SVGProps } from 'react';
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

Icon.register('chart-bar', ({ key, ...rest }) => <ChartBarIcon key={key} {...rest} />);

Icon.register('adjustments', ({ key, ...rest }) => <AdjustmentsHorizontalIcon key={key} {...rest} />);

Icon.register('document-report', ({ key, ...rest }) => <DocumentChartBarIcon key={key} {...rest} />);

Icon.register('view-list', ({ key, ...rest }) => <Bars4Icon key={key} {...rest} />);

Icon.register('presentation-chart-bar', ({ key, ...rest }) => <PresentationChartBarIcon key={key} {...rest} />);

Icon.register('search', ({ key, ...rest }) => <MagnifyingGlassIcon key={key} {...rest} />);

Icon.register('calendar', ({ key, ...rest }) => <CalendarIcon key={key} {...rest} />);

Icon.register('template', ({ key, ...rest }) => <RectangleGroupIcon key={key} {...rest} />);

Icon.register('puzzle', ({ key, ...rest }) => <PuzzlePieceIcon key={key} {...rest} />);

Icon.register('cash', ({ key, ...rest }) => <BanknotesIcon key={key} {...rest} />);

Icon.register('arrow-up', ({ key, ...rest }) => <ArrowUpIcon key={key} {...rest} />);
Icon.register('arrow-down', ({ key, ...rest }) => <ArrowDownIcon key={key} {...rest} />);

Icon.register('exclamation', ({ key, ...rest }) => <ShieldExclamationIcon key={key} {...rest} />);

Icon.register('credit-card', ({ key, ...rest }) => <CreditCardIcon key={key} {...rest} />);

Icon.register('document-text', ({ key, ...rest }) => <DocumentTextIcon key={key} {...rest} />);

Icon.register('cog', ({ key, ...rest }) => <CogIcon key={key} {...rest} />);

Icon.register('users', ({ key, ...rest }) => <UsersIcon key={key} {...rest} />);

Icon.register('user', ({ key, ...rest }) => <UserIcon key={key} {...rest} />);

Icon.register('user-group', ({ key, ...rest }) => <UserGroupIcon key={key} {...rest} />);

Icon.register('currency-dollar', ({ key, ...rest }) => <CurrencyDollarIcon key={key} {...rest} />);

Icon.register('currency-euro', ({ key, ...rest }) => <CurrencyEuroIcon key={key} {...rest} />);

Icon.register('chevron-down', ({ key, ...rest }) => <ChevronDownIcon key={key} {...rest} />);
Icon.register('drop-down', ({ key, ...rest }) => <ChevronDownIcon key={key} {...rest} />);

Icon.register('information-circle', ({ key, ...rest }) => <InformationCircleIcon key={key} {...rest} />);

Icon.register('refresh', ({ key, ...rest }) => <ArrowPathIcon key={key} {...rest} />);

Icon.register('x', ({ key, ...rest }) => <XMarkIcon key={key} {...rest} />);
Icon.register('close', ({ key, ...rest }) => <XMarkIcon key={key} {...rest} />);

Icon.register('plus', ({ key, ...rest }) => <PlusIcon key={key} {...rest} />);

Icon.register('arrow-left', ({ key, ...rest }) => <ArrowLeftIcon key={key} {...rest} />);

Icon.register('printer', ({ key, ...rest }) => <PrinterIcon key={key} {...rest} />);

Icon.register('pencil', ({ key, ...rest }) => <PencilIcon key={key} {...rest} />);
