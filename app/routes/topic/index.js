import { computable, History, Repeater } from 'cx/ui';
import { Button, Link } from 'cx/widgets';
import { StatusesController } from '../../components/StatusesController';
import Controller from './Controller';

export default (
   <cx>
      <main class="min-h-[80vh] bg-gray-200 mt-16 pb-6" controller={Controller}>
         <div class="bg-gray-100 border-b px-6 py-4 shadow-sm">
            <div class="container grid grid-cols-2">
               <article class="relative flex flex-col pl-5">
                  <div class="flex text-sm text-gray-600">
                     <Link
                        class="font-bold uppercase text-red-600 tracking-wider text-[11px] hover:underline"
                        href={computable('url', '$record.categoryId', (url, catId) => {
                           let index = url.indexOf('?');
                           if (index >= 0) url = url.substring(0, index);
                           return `${url}?categoryId=${catId}`;
                        })}
                        text-bind="$page.topic.categoryName"
                        onClick={(e, { store }) => {
                           e.preventDefault();
                           store.set('search', {
                              visible: true,
                              categoryId: store.get('$record.categoryId'),
                           });
                           History.pushState({}, null, '~/');
                           return false;
                        }}
                     />
                  </div>
                  <div text-bind="$page.topic.title" class="font-semibold text-lg" />
                  <p text-bind="$page.topic.descriptionMd" class="text-gray-600 mt-2" />
               </article>
               <div class="flex text-gray-700">
                  <Button mod="hollow" icon="edit" onClick="onEditTopic" tooltip="Edit" />
                  <Button
                     mod="hollow"
                     icon="star"
                     onClick="onToggleStar"
                     tooltip="Star"
                     className={{ '!text-red-600': { bind: '$record.starred' } }}
                  />
                  <Button mod="hollow" icon="plus-circle" onClick="onFollow" tooltip="Follow" />
               </div>
            </div>
         </div>

         <div class="container flex items-start">
            <div class="grid grid-cols-1 gap-2 mt-2 w-1/2 ml-12" controller={StatusesController}>
               <Repeater records-bind="$page.data">
                  <article class="pl-6 pr-4 pt-5 pb-6 bg-white border border-gray-300 rounded-lg shadow-sm relative flex flex-col text-gray-700 guideline">
                     <div html-bind="$record.descriptionHtml" class="prose" />
                     <div class="text-sm flex items-center top-3 relative text-gray-600 font-semibold">
                        <div text-bind="$record.authorName" class="mr-4" />
                        <div class="font-semibold mr-4" text-tpl="{$record.publishDate:relativetime}" />

                        <Button
                           visible-expr="{$record.owned}"
                           mod="hollow"
                           icon="edit"
                           onClick="onEditStatus"
                           tooltip="Edit"
                        />
                        <Button
                           visible-expr="{$record.owned}"
                           mod="hollow"
                           icon="trash"
                           onClick="onDeleteStatus"
                           tooltip="Delete"
                           confirm="Are you sure that you want to delete this status?"
                        />
                        <Button
                           mod="hollow"
                           icon="like"
                           text-bind="$record.likes"
                           class="font-semibold ml-auto !pr-2"
                           tooltip="Like"
                           onClick="onToggleLike"
                           className={{ '!text-red-600': { bind: '$record.liked' } }}
                        />
                        <Button
                           mod="hollow"
                           icon="chat"
                           text-bind="$record.comments"
                           class="font-semibold !pr-2"
                           tooltip="Comment"
                        />
                     </div>
                  </article>
               </Repeater>
            </div>
            <div class="ml-4 mt-2 px-6 py-4 text-gray-800 bg-gray-100 shadow rounded-lg flex-grow">
               <div class="text-xs text-gray-600">Assignees</div>
               <div text="User X, User Y" />

               <div class="text-xs text-gray-600 mt-4">Owner</div>
               <div text="User X" />

               <div class="text-xs text-gray-600 mt-4">Status</div>
               <div text="Active" />

               <div class="text-xs text-gray-600 mt-4">Reminders</div>
               <div text="Every two week" />

               <div class="text-xs text-gray-600 mt-4">Shared with</div>
               <div text="Accounting, Administrators" />
            </div>
         </div>
      </main>
   </cx>
);
