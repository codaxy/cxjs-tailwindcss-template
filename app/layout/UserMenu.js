import { Link } from 'cx/widgets';

export const UserMenu = ({}) => (
   <cx>
      <div
         tooltip={{
            placement: 'down',
            mouseTrap: true,
            items: (
               <cx>
                  <Link href="~/user/profile" class="block p-2 hover:bg-gray-800">
                     Profile
                  </Link>
                  <Link
                     href="~/signout"
                     class="block p-2"
                     onClick={(e) => {
                        window.location = Url.resolve('~/signout');
                        return false;
                     }}
                  >
                     Sign Out
                  </Link>
               </cx>
            ),
         }}
      >
         <div class="w-12 h-12 bg-gray-300 rounded-full align-middle flex items-center justify-center relative mr-2 flex-shrink-0 cursor-pointer">
            <span text-bind="user.initials" visible-expr="!{user.pictureUrl}" />
            <img
               src-tpl="{user.pictureUrl}"
               visible-expr="!!{user.pictureUrl}"
               class="w-full h-full object-cover rounded-full absolute left-0 top-0"
            />
         </div>
      </div>
   </cx>
);
