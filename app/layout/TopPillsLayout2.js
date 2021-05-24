import { PureContainer } from 'cx/ui';
import { DocumentTitle, Icon, Link, Repeater } from 'cx/widgets';
import { Logo } from '../components/Logo';
import Controller from './Controller';
import { UserMenu } from './UserMenu';

const TopTab = ({ text, href, tooltip, onClick, className }) => (
   <cx>
      <Link
         href={href}
         url-bind="url"
         class="mx-1 block text-center px-3 py-1 hover:bg-black hover:bg-opacity-5 relative font-semibold text-white whitespace-nowrap cursor-pointer rounded text-opacity-80"
         className={className}
         activeClass="!bg-black !bg-opacity-20 text-opacity-95"
         tooltip={tooltip}
         onClick={onClick}
         match="subroute"
      >
         <div text={text} />
      </Link>
   </cx>
);

export const TopPillsLayout2 = ({ children, tabs }) => (
   <cx>
      <div class="flex flex-col h-full" controller={Controller}>
         <header class="fixed w-full bg-orange-600 text-white z-50 top-0 shadow-sm">
            <div class="flex flex-row items-center h-16">
               <Link href="~/" class="flex items-center p-2 ml-2 mr-8">
                  <div class="p-2 rounded-full bg-white text-orange-600">
                     <Icon name="chart-bar" class="w-8 h-8" />
                  </div>
                  <div class="ml-4 text-lg font-bold italic">Demo App</div>
               </Link>
               <Repeater records={tabs}>
                  <TopTab text-bind="$record.text" href-bind="$record.href" />
               </Repeater>
               <div class="flex-1" />
               <PureContainer visible-expr="{user}">
                  <UserMenu />
               </PureContainer>
               <div class="w-1" />
            </div>
         </header>
         <div class="h-16" />
         {children}
      </div>
   </cx>
);
