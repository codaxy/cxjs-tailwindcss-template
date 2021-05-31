import { Svg } from 'cx/svg';
import { CategoryAxis, Chart, Gridlines, Legend, LineGraph, Marker, NumericAxis } from 'cx/charts';
import { Repeater } from 'cx/widgets';
import '../../util/kformat';

export const Charts = ({}) => (
   <cx>
      <div class="bg-white border col-span-4 px-6 py-4 rounded">
         <div class="flex items-center">
            <div class="mr-auto text-gray-600">Performance Chart</div>
            <Legend />
         </div>
         <Svg class="w-full h-[350px] text-gray-500">
            <Chart
               margin="30 10 30 45"
               axes={{
                  x: { type: CategoryAxis, hideLine: true, hideTicks: true },
                  y: {
                     type: NumericAxis,
                     vertical: true,
                     tickSize: 0,
                     minTickDistance: 30,
                     hideLine: true,
                     format: 'kformat',
                  },
               }}
            >
               <Gridlines xAxis={false} />
               <LineGraph
                  data-bind="$page.chart"
                  xField="month"
                  yField="sales"
                  class="text-green-500 stroke-current"
                  colorIndex={4}
               />
               <LineGraph data-bind="$page.chart" colorIndex={1} xField="month" yField="expenses" />
               <LineGraph data-bind="$page.chart" colorIndex={8} xField="month" yField="balance" />
               <Repeater records-bind="$page.chart">
                  <Marker
                     name="Sales"
                     x-bind="$record.month"
                     y-bind="$record.sales"
                     shape="circle"
                     size={12}
                     colorIndex={4}
                     style="stroke-width: 2; fill: white"
                  />
                  <Marker
                     name="Expenses"
                     x-bind="$record.month"
                     y-bind="$record.expenses"
                     shape="circle"
                     size={12}
                     colorIndex={1}
                     style="stroke-width: 2; fill: white"
                  />

                  <Marker
                     name="Cash"
                     x-bind="$record.month"
                     y-bind="$record.balance"
                     shape="circle"
                     size={12}
                     colorIndex={8}
                     style="stroke-width: 2; fill: white"
                  />
               </Repeater>
            </Chart>
         </Svg>
      </div>
   </cx>
);
