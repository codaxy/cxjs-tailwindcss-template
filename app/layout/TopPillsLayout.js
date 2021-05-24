import { PureContainer } from 'cx/ui';
import { DocumentTitle, Link, Repeater } from 'cx/widgets';
import { Logo } from '../components/Logo';
import Controller from './Controller';
import { UserMenu } from './UserMenu';

const TopTab = ({ text, href, tooltip, onClick, className }) => (
   <cx>
      <Link
         href={href}
         url-bind="url"
         class="mx-1 block text-center px-3 py-1 hover:bg-gray-100 relative font-semibold text-gray-500 whitespace-nowrap cursor-pointer rounded"
         className={className}
         activeClass="!bg-red-600 !text-white"
         tooltip={tooltip}
         onClick={onClick}
         match="subroute"
      >
         <div text={text} />
      </Link>
   </cx>
);

export const TopPillsLayout = ({ children, tabs }) => (
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
