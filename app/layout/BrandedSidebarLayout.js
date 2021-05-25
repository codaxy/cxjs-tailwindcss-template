import { Icon, Link, Repeater } from 'cx/widgets';
import Controller from './Controller';
import { UserMenu } from './UserMenu';

const NavItem = ({ text, href, tooltip, onClick, className, icon, badge }) => (
   <cx>
      <Link
         href={href}
         url-bind="url"
         class="mx-1 flex items-center px-3 py-2 hover:bg-black hover:bg-opacity-5 relative font-semibold text-white whitespace-nowrap cursor-pointer rounded text-opacity-70"
         className={className}
         activeClass="!bg-black !bg-opacity-20 !text-opacity-95"
         tooltip={tooltip}
         onClick={onClick}
         match="subroute"
      >
         <Icon name={icon} class="w-7 h-7 mr-2" />
         <div text={text} class="flex-grow" />
         <div text={badge} visible={badge} class="text-xs bg-black bg-opacity-20 rounded-full px-3 py-1" />
      </Link>
   </cx>
);

export const BrandedSidebarLayout = ({ children, nav }) => (
   <cx>
      <div class="grid grid-cols-2 h-full" style="grid-template-columns: 18rem 1fr" controller={Controller}>
         <div class="flex flex-col bg-blue-900 text-white">
            <header>
               <Link href="~/" class="flex items-center px-2 py-4 ml-2 mr-8">
                  <div class="p-2 rounded-full bg-white text-blue-900">
                     <Icon name="chart-bar" class="w-8 h-8" />
                  </div>
                  <div class="ml-4 text-lg font-bold italic">Demo App</div>
               </Link>
            </header>
            <div class="px-2 mt-4">
               <Repeater records={nav}>
                  <NavItem
                     text-bind="$record.text"
                     href-bind="$record.href"
                     icon-bind="$record.icon"
                     badge-bind="$record.badge"
                  />
               </Repeater>
            </div>
            <div class="flex-1" />
            <div visible-expr="{user}" class="border-t border-white border-opacity-10 p-4 flex items-center">
               <UserMenu />
               <div class="ml-2 leading-tight">
                  <div text-tpl="{user.firstName} {user.lastName}">Test</div>
                  <div class="opacity-50 text-sm">Software Developer</div>
               </div>
            </div>
         </div>
         {children}
      </div>
   </cx>
);
