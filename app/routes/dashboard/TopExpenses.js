import { computable } from 'cx/ui';
import { Grid } from 'cx/widgets';

export const TopExpenses = () => (
   <cx>
      <Grid
         records-bind="$page.topExpenses"
         columns={[
            {
               field: 'name',
               header: { text: 'Expense', class: 'pl-0' },
               class: '!pl-0',
            },
            {
               field: 'expense',
               header: 'Amount',
               format: 'currency;EUR;0',
               align: 'right',
            },
            {
               field: 'percent',
               header: 'Percentage',
               format: 'p;1',
               align: 'right',
            },
            {
               field: 'percent',
               header: '',
               children: (
                  <cx>
                     <div
                        class="bg-orange-400 h-2"
                        style={{
                           width: computable('$record.percent', (percent) => percent * 100),
                        }}
                     />
                  </cx>
               ),
            },
         ]}
      />
   </cx>
);
