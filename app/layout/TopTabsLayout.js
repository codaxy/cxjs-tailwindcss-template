import { PureContainer } from 'cx/ui';
import { Link, Repeater } from 'cx/widgets';
import { Logo } from '../components/Logo';
import Controller from './Controller';
import { UserMenu } from './UserMenu';

const TopTab = ({ text, href, tooltip, onClick, className }) => (
   <cx>
      <Link
         href={href}
         url-bind="url"
         class="px-3 pt-1 hover:border-gray-300 hover:text-gray-600 relative self-stretch font-semibold text-gray-500 whitespace-nowrap cursor-pointer border-transparent"
         className={className}
         activeClass="!text-red-600 !border-red-600"
         tooltip={tooltip}
         onClick={onClick}
         match="subroute"
      >
         <div class="border-b-2 h-full flex items-center" style="border-color: inherit">
            <div text={text} />
         </div>
      </Link>
   </cx>
);

export const TopTabsLayout = ({ children, tabs }) => (
   <cx>
      <div class="flex flex-col h-full" controller={Controller}>
         <header class="fixed w-full bg-white z-50 top-0 shadow-sm">
            <div class="flex flex-row items-center h-16">
               <Logo className="ml-2 mr-8" />
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
