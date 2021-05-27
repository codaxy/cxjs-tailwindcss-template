import { Icon, Link, Repeater } from 'cx/widgets';

import TailwindLogo from '../../../assets/img/tailwindcss-logotype.svg';
import CxJSLogo from '../../../assets/img/cxjs.svg';
import HeroiconsLogo from '../../../assets/img/heroicons.svg';

const Section = ({ icon, title, items }) => (
   <cx>
      <div>
         <div class="text-red-600 rounded-full inline-block p-2 mr-2 border-2 border-red-600">
            <Icon name={icon} class="w-6 h-6 block " />
         </div>
         <h3 class="text-lg mt-2">{title}</h3>
      </div>
      <ul className="mt-2 ml-8 list-disc">
         <Repeater records={items}>
            <li>
               <Link
                  href-bind="$record.href"
                  class="text-red-600 hover:underline py-1 block"
                  text-bind="$record.text"
               />
            </li>
         </Repeater>
      </ul>
   </cx>
);

export default (
   <cx>
      <a href="https://github.com/codaxy/cxjs-tailwindcss-template">
         <img
            loading="lazy"
            width="149"
            height="149"
            src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
            class="absolute right-0 top-0"
            alt="Fork me on GitHub"
            data-recalc-dims="1"
         />
      </a>
      <div class="w-[1000px] mx-auto my-16 text-gray-800">
         <h1 class="text-5xl font-bold">CxJS + Tailwind CSS </h1>
         <p class="mt-2 text-gray-400 text-lg">Use CxJS, Tailwind CSS, and Heroicons for success!</p>

         <p class="mt-16 text-lg text-gray-700">
            CxJS and Tailwind CSS mix really well together. CxJS brings JavaScript based application elements such as
            widgets, charts, state management, and routing, while Tailwind CSS offers a way to rapidly combine these
            elements into higher-order visual structures - toolbars, sections, layouts, pages, etc.
         </p>

         <div class="grid grid-cols-3 gap-8 mt-16">
            <div>
               <Section
                  title="Appplication Layouts"
                  icon="template"
                  items={[
                     {
                        text: 'Top Navigation Tabs',
                        href: '~/layouts/top/tabs',
                     },
                     {
                        text: 'Top Navigation Pills',
                        href: '~/layouts/top/pills',
                     },
                     {
                        text: 'Branded Top Navigation',
                        href: '~/layouts/top/branded',
                     },
                     {
                        text: 'Branded Sidebar Navigation',
                        href: '~/layouts/sidebar/branded',
                     },
                  ]}
               />
            </div>
            <div>
               <Section
                  title="Sample Pages"
                  icon="document-report"
                  items={[
                     {
                        text: 'Sign In',
                        href: '~/pages/sign-in',
                     },
                     {
                        text: 'User Administration [TODO]',
                        href: '#',
                     },
                     {
                        text: 'Orders Dashboard [TODO]',
                        href: '#',
                     },
                     {
                        text: 'Calendar[TODO]',
                        href: '#',
                     },
                  ]}
               />
            </div>
            <div>
               <Section
                  title="Widgets"
                  icon="puzzle"
                  items={[
                     {
                        text: 'Buttons',
                        href: '~/widgets/buttons',
                     },
                     {
                        text: 'Form Fields',
                        href: '~/widgets/form-fields',
                     },
                     {
                        text: 'Data Tables [TODO]',
                        href: '#',
                     },
                     {
                        text: 'General Purpose Widgets [TODO]',
                        href: '#',
                     },
                     {
                        text: 'Toasts, Alerts [TODO]',
                        href: '#',
                     },
                  ]}
               />
            </div>
         </div>

         <div class="flex flex-wrap items-center gap-4 justify-center mt-32">
            <a href="https://cxjs.io">
               <img src={CxJSLogo} class="h-24" />
            </a>
            <a href="https://tailwindcss.com">
               <img src={TailwindLogo} class="h-12" />
            </a>
            <a href="https://heroicons.com">
               <img src={HeroiconsLogo} class="h-[220px]" />
            </a>
         </div>
      </div>
   </cx>
);
