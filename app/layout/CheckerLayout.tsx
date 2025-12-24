import { Bind, bind, ClassProp, computable, createFunctionalComponent, expr, History, Prop, tpl } from 'cx/ui';
import {
   Button,
   Dropdown,
   HighlightedSearchText,
   Icon,
   Link,
   List,
   Menu,
   MenuItem,
   PureContainer,
   TextField,
} from 'cx/widgets';
import { Logo2 } from '../components/Logo2';
import Controller from './Controller';

interface NavItemProps {
   text?: Prop<string>;
   href?: string;
   tooltip?: string;
   onClick?: (e: any, instance: any) => void;
   className?: ClassProp;
   icon?: string;
   badge?: Prop<string>;
   expanded?: Bind;
}

const NavItem = createFunctionalComponent(
   ({ text, href, tooltip, onClick, className, icon, badge, expanded }: NavItemProps) => (
      <cx>
         <Link
            href={href}
            url={bind('url')}
            class="hover:bg-gray-100 flex items-center px-3 py-3 text-gray-800 relative font-semibold whitespace-nowrap text-opacity-70 text-[15px] border-l-[3px] border-transparent cursor-pointer"
            className={className}
            activeClass="bg-blue-100! border-blue-500! text-blue-500! opacity-100!"
            tooltip={tooltip}
            onClick={(e, instance) => {
               instance.store.set('nav.mobileOpen', false);
               if (onClick) onClick(e, instance);
            }}
            match="subroute"
         >
            <Icon name={icon} class="w-7 h-7 ml-3 mr-3 opacity-70" />
            <div text={text} class="grow" />
            <div text={badge} visible={!!badge} class="text-xs bg-black bg-opacity-20 rounded-full px-3 py-1" />
            <Icon
               name="drop-down"
               class="w-5 h-5 mr-2 transform transition-all opacity-80"
               visible={!!expanded}
               className={{
                  'rotate-180': expanded,
               }}
            />
         </Link>
      </cx>
   ),
);

interface GroupItemProps extends NavItemProps {
   children?: any | any[];
}

const GroupItem = createFunctionalComponent(
   ({ text, href, tooltip, className, icon, badge, children, expanded }: GroupItemProps) => (
      <cx>
         <NavItem
            href={href}
            text={text}
            tooltip={tooltip}
            className={className}
            icon={icon}
            badge={badge}
            onClick={(e, { store }) => {
               e.preventDefault();
               store.toggle(expanded.bind);
            }}
            expanded={expanded}
         />
         <PureContainer visible={expanded}>{children}</PureContainer>
      </cx>
   ),
);

interface ChildItemProps {
   text?: string;
   href?: string;
   badge?: Prop<string>;
}

const ChildItem = createFunctionalComponent(({ text, href, badge }: ChildItemProps) => (
   <cx>
      <NavItem href={href} text={text} className="pl-16! opacity-80" badge={badge} />
   </cx>
));

const NavigationContent = createFunctionalComponent(() => (
   <cx>
      <div class="px-6 py-3 text-gray-400 text-sm">Main Menu</div>
      <NavItem text="Dashboard" icon="chart-bar" href="~/dashboard" />
      <NavItem text="Invoices" icon="document-text" href="~/invoices" />
      <NavItem text="Customers" icon="users" href="~/customers" />

      <div class="mt-4 px-6 py-3 text-gray-400 text-sm">Administration</div>
      <NavItem text="Settings" icon="cog" href="~/settings" />
      <NavItem text="User Accounts" icon="user-group" href="~/users" />

      <div class="mt-4 px-6 py-3 text-gray-400 text-sm">Misc</div>

      <GroupItem text="Pages" icon="document-report" expanded={bind('nav.expand.pages')}>
         <ChildItem text="Sign In" href="~/pages/sign-in" />
         <ChildItem text="Password Recovery" href="~/pages/password-recovery" />
      </GroupItem>
      <GroupItem text="Widgets" icon="puzzle" expanded={bind('nav.expand.widgets')}>
         <ChildItem text="Buttons" href="~/widgets/buttons" />
         <ChildItem text="Form Fields" href="~/widgets/form-fields" />
         <ChildItem text="Rich Text Editor" href="~/widgets/rich-text" />
      </GroupItem>
      <NavItem text="About" icon="information-circle" href="~/about" />
   </cx>
));

export const CheckerLayout = createFunctionalComponent(({ children }: { children: any }) => (
   <cx>
      <div
         class="h-full flex flex-col lg:grid"
         style="grid-template-columns: 250px 1fr; grid-template-rows: auto 1fr"
         controller={Controller}
      >
         <div class="border-r border-b py-2 px-4 lg:px-6 flex items-center">
            <Button class="lg:hidden mr-3 p-2" mod="hollow" onClick={(e, { store }) => store.toggle('nav.mobileOpen')}>
               <Icon name="menu" class="w-6 h-6 text-gray-600" />
            </Button>
            <Logo2 />
         </div>
         <div class="hidden lg:flex border-b">
            <div class="grow">
               <TextField
                  icon="search"
                  placeholder="Search customers, invoices, ..."
                  class="h-full w-full"
                  inputClass="border-transparent rounded-none"
                  focused={{ bind: 'search.visible', debounce: 300 }}
                  trackFocus
                  inputAttrs={{ autoComplete: 'off' }}
                  value={{ bind: 'search.query', debounce: 300 }}
               />
               <Dropdown
                  visible={expr('{search.visible} && {search.query} && {search.results}')}
                  offset={5}
                  placementOrder={'down-right'}
                  arrow
                  class="p-4 w-[600px]"
                  matchWidth={false}
               >
                  <div class="text-gray-500 p-4 italic" visible={expr('!{search.results.length}')}>
                     Could not find any results matching the search query{' '}
                     <span text={bind('search.query')} class="font-bold" />.
                  </div>
                  <List
                     records={bind('search.results')}
                     itemPad={false}
                     onItemClick={(e, { store }) => {
                        History.pushState({}, null, store.get('$record.url'));
                        store.delete('search');
                     }}
                     grouping={{
                        key: {
                           type: { bind: '$record.type' },
                        },
                        header: (
                           <cx>
                              <div text={bind('$group.type')} class="uppercase text-gray-400 text-xs py-1" />
                           </cx>
                        ),
                     }}
                  >
                     <div class="flex p-2 items-center">
                        <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                           <Icon
                              name={computable('$record.type', (type) => {
                                 switch (type) {
                                    case 'customer':
                                       return 'users';
                                    default:
                                    case 'invoice':
                                       return 'document-text';
                                 }
                              })}
                              class="w-6 h-6"
                           />
                        </div>
                        <div class="ml-4">
                           <div class="text-base">
                              <HighlightedSearchText text={bind('$record.title')} query={bind('search.query')} />
                           </div>
                           <div class="text-gray-400">
                              <HighlightedSearchText text={bind('$record.text')} query={bind('search.query')} />
                           </div>
                        </div>
                     </div>
                  </List>
               </Dropdown>
            </div>
            <div
               class="border-l"
               onClick={(e, { store }) => {
                  store.toggle('nav.expand.user');
               }}
               tabIndex={0}
            >
               <div class="flex items-center px-4 py-2 cursor-pointer">
                  <div class="w-10 h-10 bg-gray-300 rounded-full align-middle flex items-center justify-center relative shrink-0 cursor-pointer">
                     <span text={bind('user.initials')} visible={expr('!{user.pictureUrl}')} />
                     <img
                        src={tpl('{user.pictureUrl}')}
                        visible={expr('!!{user.pictureUrl}')}
                        class="w-full h-full object-cover rounded-full absolute left-0 top-0"
                     />
                  </div>
                  <div class="ml-4 mr-4 leading-tight">
                     <div text={tpl('{user.firstName} {user.lastName}')} />
                     <div class="opacity-50 text-sm" text={bind('user.email')} />
                  </div>
                  <Icon
                     name="drop-down"
                     class="w-4 h-4 transform transition-all opacity-50"
                     className={{
                        'rotate-180': { bind: 'nav.expand.user' },
                     }}
                  />
               </div>
               <Dropdown
                  visible={bind('nav.expand.user')}
                  dismissOnFocusOut
                  arrow
                  offset={5}
                  focusable
                  autoFocus
                  placementOrder={'down-left'}
               >
                  <Menu class="m-2">
                     <MenuItem onClick="onSignOut">Sign Out</MenuItem>
                  </Menu>
               </Dropdown>
            </div>
         </div>

         <div class="hidden lg:block border-r pt-3 overflow-y-auto">
            <NavigationContent />
         </div>

         <div
            class="fixed inset-0 z-40 lg:hidden"
            visible={bind('nav.mobileOpen')}
            onClick={(e, { store }) => {
               if (e.target === e.currentTarget) {
                  store.set('nav.mobileOpen', false);
               }
            }}
         >
            <div class="absolute inset-0 bg-black opacity-70" />

            <div class="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl flex flex-col">
               <div class="border-b py-3 px-4 flex items-center justify-between">
                  <Logo2 />
                  <Button mod="hollow" class="p-2" onClick={(e, { store }) => store.set('nav.mobileOpen', false)}>
                     <Icon name="x" class="w-6 h-6 text-gray-600" />
                  </Button>
               </div>

               <div class="flex-1 overflow-y-auto pt-3">
                  <NavigationContent />
               </div>

               <div class="border-t p-4 bg-white">
                  <div class="flex items-center">
                     <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center relative shrink-0">
                        <span text={bind('user.initials')} visible={expr('!{user.pictureUrl}')} />
                        <img
                           src={tpl('{user.pictureUrl}')}
                           visible={expr('!!{user.pictureUrl}')}
                           class="w-full h-full object-cover rounded-full absolute left-0 top-0"
                        />
                     </div>
                     <div class="ml-3 flex-1 min-w-0">
                        <div text={tpl('{user.firstName} {user.lastName}')} class="truncate" />
                        <div class="text-sm text-gray-400 truncate" text={bind('user.email')} />
                     </div>
                  </div>
                  <Button class="w-full mt-3" onClick="onSignOut" text="Sign Out" mod="hollow" />
               </div>
            </div>
         </div>

         <div class="flex-1 min-h-0 overflow-hidden flex flex-col *:flex-1 *:min-h-0">{children}</div>
      </div>
   </cx>
));
