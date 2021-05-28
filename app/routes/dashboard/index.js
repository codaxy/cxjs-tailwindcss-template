import { Icon } from 'cx/widgets';
import { CheckerLayout } from '../../layout/CheckerLayout';

const KPI = ({ title, value, unit, icon, iconClass }) => (
   <cx>
      <div class="bg-white border p-6 rounded">
         <Icon name={icon} class="block p-2 rounded-full w-10 h-10" className={iconClass} />
         <div class="my-2 text-gray-600">{title}</div>
         <div class="text-3xl font-bold leading-none" ws>
            <span text={value} /> <span class="text-sm" text={unit} />
         </div>
         <div class="mt-2 text-green-600 flex items-center">
            <Icon name="arrow-up" class="mr-2" />
            2.4%
         </div>
      </div>
   </cx>
);

export default () => (
   <cx>
      <div class="bg-gray-50">
         <div class="grid grid-cols-4 p-8 gap-8" style="grid-template-rows: auto; width: 1200px">
            <KPI
               title="Sales"
               value="65,235"
               unit="EUR"
               icon="cash"
               iconClass="bg-green-100 text-green-600"
               change={2.4}
            />
            <KPI
               title="Expenses"
               value="55,135"
               unit="EUR"
               icon="exclamation"
               iconClass="bg-orange-100 text-orange-500"
               change={2.4}
            />
            <KPI
               title="Cash Balance"
               value="35,321"
               unit="EUR"
               icon="credit-card"
               iconClass="bg-blue-100 text-blue-500"
               change={2.4}
            />
            <KPI
               title="Exchange Rate (1 EUR)"
               value="1.222332"
               unit="USD"
               icon="currency-dollar"
               iconClass="bg-yellow-100 text-yellow-500"
               change={2.4}
            />
            <div class="bg-white border col-span-4 p-6">KPI1</div>
            <div class="bg-white border col-span-2 p-6">KPI1</div>
            <div class="bg-white border col-span-2 p-6">KPI1</div>
         </div>
      </div>
   </cx>
);
