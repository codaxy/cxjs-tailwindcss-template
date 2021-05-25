import { RedirectRoute } from 'cx/widgets';
import { PlaceholderBox } from '../../components/PlaceholderBox';
import { SandboxedRoute } from '../../components/SandboxedRoute';
import { TopTabsLayout } from '../../layout/TopTabsLayout';
import { TopPillsLayout } from '../../layout/TopPillsLayout';
import { TopPillsLayout2 } from '../../layout/TopPillsLayout2';
import { BrandedSidebarLayout } from '../../layout/BrandedSidebarLayout';

export default (
   <cx>
      <SandboxedRoute route="+/top/tabs" prefix>
         <RedirectRoute url-bind="url" route="+" redirect="+/page1" />
         <TopTabsLayout
            tabs={[
               {
                  text: 'Dashboard',
                  href: '+/page1',
               },
               {
                  text: 'Timeline',
                  href: '+/page2',
               },
               {
                  text: 'Settings',
                  href: '+/page3',
               },
            ]}
         >
            <PlaceholderBox className="flex-grow bg-gray-100" />
            {/* Actual routes go here */}
         </TopTabsLayout>
      </SandboxedRoute>
      <SandboxedRoute route="+/top/pills" prefix>
         <RedirectRoute url-bind="url" route="+" redirect="+/page1" />
         <TopPillsLayout
            tabs={[
               {
                  text: 'Dashboard',
                  href: '+/page1',
               },
               {
                  text: 'Timeline',
                  href: '+/page2',
               },
               {
                  text: 'Settings',
                  href: '+/page3',
               },
            ]}
         >
            <PlaceholderBox className="flex-grow bg-gray-100" />
            {/* Actual routes go here */}
         </TopPillsLayout>
      </SandboxedRoute>
      <SandboxedRoute route="+/top/branded" prefix>
         <RedirectRoute url-bind="url" route="+" redirect="+/page1" />
         <TopPillsLayout2
            tabs={[
               {
                  text: 'Dashboard',
                  href: '+/page1',
               },
               {
                  text: 'Timeline',
                  href: '+/page2',
               },
               {
                  text: 'Settings',
                  href: '+/page3',
               },
            ]}
         >
            <PlaceholderBox className="flex-grow bg-gray-100" />
            {/* Actual routes go here */}
         </TopPillsLayout2>
      </SandboxedRoute>
      <SandboxedRoute route="+/sidebar/branded" prefix>
         <RedirectRoute url-bind="url" route="+" redirect="+/page1" />
         <BrandedSidebarLayout
            nav={[
               {
                  text: 'Dashboard',
                  href: '+/page1',
                  icon: 'presentation-chart-bar',
               },
               {
                  text: 'Log',
                  href: '+/page2',
                  icon: 'view-list',
                  badge: 3,
               },
               {
                  text: 'Reports',
                  href: '+/page3',
                  icon: 'document-report',
               },
               {
                  text: 'Settings',
                  href: '+/page4',
                  icon: 'adjustments',
               },
            ]}
         >
            <PlaceholderBox className="flex-grow bg-gray-100" />
            {/* Actual routes go here */}
         </BrandedSidebarLayout>
      </SandboxedRoute>
   </cx>
);
