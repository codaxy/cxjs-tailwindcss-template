import { Link } from 'cx/widgets';

import TailwindLogo from '../../../assets/img/tailwindcss-logotype.svg';
import CxJSLogo from '../../../assets/img/cxjs.svg';
import HeroiconsLogo from '../../../assets/img/heroicons.svg';

const linkClass = 'text-red-600 hover:underline';

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
         <p class="mt-2 text-gray-400 text-sm">
            Use Tailwind CSS and Heroicons within CxJS applications for amazing results
         </p>

         <div class="grid grid-cols-3 gap-8 mt-8">
            <div>
               <p>Appplication Layouts</p>
               <ul className="mt-2 ml-8 list-disc">
                  <li>
                     <Link href="~/layouts/top/tabs" class={linkClass}>
                        Top Navigation Tabs
                     </Link>
                  </li>
                  <li>
                     <Link href="~/layouts/top/pills" class={linkClass}>
                        Top Navigation Pills
                     </Link>
                  </li>
                  <li>
                     <Link href="~/layouts/top/branded" class={linkClass}>
                        Branded Top Navigation
                     </Link>
                  </li>
                  <li>
                     <Link href="~/layouts/sidebar/branded" class={linkClass}>
                        Branded Sidebar Navigation
                     </Link>
                  </li>
               </ul>
            </div>
            <div>
               <p>Sample Pages</p>
               <ul className="mt-2 ml-8 list-disc">
                  <li>
                     <Link href="~/layouts/pages/user-admin" class={linkClass}>
                        Login [TODO]
                     </Link>
                  </li>
                  <li>
                     <Link href="~/layouts/pages/user-admin" class={linkClass}>
                        User Administration [TODO]
                     </Link>
                  </li>
                  <li>
                     <Link href="~/layouts/page/orders" class={linkClass}>
                        Orders Dashboard [TODO]
                     </Link>
                  </li>
               </ul>
            </div>
            <div>
               <p>Widgets</p>
               <ul className="mt-2 ml-8 list-disc">
                  <li>
                     <Link href="~/widgets/buttons" class={linkClass}>
                        Buttons
                     </Link>
                  </li>
                  <li>
                     <Link href="~/widgets/form-fields" class={linkClass}>
                        Form Fields
                     </Link>
                  </li>
               </ul>
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
