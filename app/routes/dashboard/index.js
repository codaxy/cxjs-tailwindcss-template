import Controller from './Controller';
import { KPI } from './KPI';
import { Charts } from './Charts';

export default () => (
   <cx>
      <div class="bg-gray-50" controller={Controller}>
         <div class="grid grid-cols-4 p-8 gap-8" style="grid-template-rows: auto; width: 1150px">
            <KPI
               title="Sales"
               value="65,235"
               unit="EUR"
               icon="cash"
               iconClass="bg-green-100 text-green-600"
               change={0.102}
            />
            <KPI
               title="Expenses"
               value="55,135"
               unit="EUR"
               icon="exclamation"
               iconClass="bg-orange-100 text-orange-500"
               change={-0.15}
            />
            <KPI
               title="Cash Balance"
               value="35,321"
               unit="EUR"
               icon="credit-card"
               iconClass="bg-blue-100 text-blue-500"
               change={0.055}
            />
            <KPI
               title="Exchange Rate (1 EUR)"
               value="1.222332"
               unit="USD"
               icon="currency-dollar"
               iconClass="bg-yellow-100 text-yellow-500"
               change={0.0011}
            />

            <Charts />

            <div class="bg-white border col-span-2 p-6 rounded">Top Products</div>
            <div class="bg-white border col-span-2 p-6 rounded">Expense Breakout</div>
         </div>
      </div>
   </cx>
);
