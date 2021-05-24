import { RedirectRoute } from 'cx/widgets';
import { PlaceholderBox } from '../../components/PlaceholderBox';
import { SandboxedRoute } from '../../components/SandboxedRoute';
import { TopTabsLayout } from '../../layout/TopTabsLayout';
import { TopPillsLayout } from '../../layout/TopPillsLayout';
import { TopPillsLayout2 } from '../../layout/TopPillsLayout2';

const nav = [
   {
      text: 'Home',
      href: '~/',
   },
   {
      text: 'Tabs',
      href: '~/layouts/top/tabs',
   },
   {
      text: 'Pills',
      href: '~/layouts/top/pills',
   },
   {
      text: 'Branded',
      href: '~/layouts/top/branded',
   },
];

export default (
   <cx>
      <RedirectRoute url-bind="url" route="+" redirect="+/top/tabs/tab1" />
      <SandboxedRoute route="+/top/tabs" prefix>
         <TopTabsLayout
            tabs={[
               {
                  text: 'Dashboard',
                  href: '~/layouts/top/tabs/tab1',
               },
               {
                  text: 'Timeline',
                  href: '~/layouts/top/tabs/tab2',
               },
               {
                  text: 'Settings',
                  href: '~/layouts/top/tabs/tab3',
               },
            ]}
         >
            <PlaceholderBox className="flex-grow bg-gray-100" />
         </TopTabsLayout>
      </SandboxedRoute>
      <SandboxedRoute route="+/top/pills" prefix>
         <TopPillsLayout
            tabs={[
               {
                  text: 'Dashboard',
                  href: '~/layouts/top/pills/tab1',
               },
               {
                  text: 'Timeline',
                  href: '~/layouts/top/pills/tab2',
               },
               {
                  text: 'Settings',
                  href: '~/layouts/top/pills/tab3',
               },
            ]}
         >
            <PlaceholderBox className="flex-grow bg-gray-100" />
         </TopPillsLayout>
      </SandboxedRoute>
      <SandboxedRoute route="+/top/branded" prefix>
         <TopPillsLayout2
            tabs={[
               {
                  text: 'Dashboard',
                  href: '~/layouts/top/branded/tab1',
               },
               {
                  text: 'Timeline',
                  href: '~/layouts/top/branded/tab2',
               },
               {
                  text: 'Settings',
                  href: '~/layouts/top/branded/tab3',
               },
            ]}
         >
            <PlaceholderBox className="flex-grow bg-gray-100" />
         </TopPillsLayout2>
      </SandboxedRoute>
   </cx>
);
