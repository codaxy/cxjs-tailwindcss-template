import { Icon, Link, Repeater } from 'cx/widgets';
import { Logo2 } from '../components/Logo2';

const NavItem = ({ text, href, tooltip, onClick, className, icon, badge }) => (
   <cx>
      <Link
         href={href}
         url-bind="url"
         class="flex items-center px-3 py-2 text-gray-600 relative font-semibold whitespace-nowrap text-opacity-70 text-[15px]"
         className={className}
         activeClass="bg-blue-100 border-l-4 border-blue-500 !text-blue-500"
         tooltip={tooltip}
         onClick={onClick}
         match="subroute"
      >
         <Icon name={icon} class="w-7 h-7 ml-3 mr-3" />
         <div text={text} class="flex-grow" />
         <div text={badge} visible={badge} class="text-xs bg-black bg-opacity-20 rounded-full px-3 py-1" />
      </Link>
   </cx>
);

export const CheckerLayout = ({ children, nav }) => (
   <cx>
      <div
         class="h-full grid grid-cols-2 grid-rows-2"
         style="grid-template-columns: 250px 1fr; grid-template-rows: auto 1fr"
      >
         <div class="border-r border-b p-2 flex justify-center">
            <Logo2 />
         </div>
         <div class="border-b">Header</div>
         <div class="border-r pt-3">
            <div class="px-6 py-3 text-gray-400 text-sm">Main Menu</div>
            <NavItem text="Dashboard" icon="chart-bar" href="~/dashboard" />
            <NavItem text="Invoices" icon="invoices" href="~/invoices" />
            <NavItem text="Customers" icon="user" href="~/customers" />
            <NavItem text="Settings" icon="settings" />
            <NavItem text="User Accounts" icon="user" />
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
         </div>
         {children}
      </div>
   </cx>
);
