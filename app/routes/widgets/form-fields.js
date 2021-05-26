import { LabelsTopLayout } from 'cx/ui';
import { DateField, MonthField, NumberField, TextField } from 'cx/widgets';

export default (
   <cx>
      <div class="px-12 py-5 text-gray-800">
         <h1 class="text-2xl">Form Fields</h1>
         <div>
            <h6 class="mt-6 mb-1">Inputs</h6>
            <p class="text-sm text-gray-400">Fields that usually require keyboard input</p>
            <LabelsTopLayout>
               <TextField label="Text" value-bind="$page.text.text" />
               <TextField label="Icon" icon="search" placeholder="Search..." value-bind="$page.text.search" />
               <TextField label="Error" visited required value-bind="$page.text.error" />
            </LabelsTopLayout>

            <LabelsTopLayout>
               <NumberField label="Number" value-bind="$page.number.number" format="n;2" placeholder="2 decimals" />
               <NumberField
                  label="Percentage"
                  value-bind="$page.number.percentage"
                  format="p"
                  scale={0.01}
                  placeholder="Percentage"
               />
               <NumberField
                  label="Currency"
                  value-bind="$page.number.units"
                  format="currency;EUR;2"
                  placeholder="EUR"
               />
            </LabelsTopLayout>
            <LabelsTopLayout>
               <DateField label="Date" value-bind="$page.date.date" />
               {/*TimeField causing strange problems, fixed in the new version of CxJS */}
               <MonthField label="Month Range" from-bind="$page.date.from" to-bind="$page.date.to" range />
            </LabelsTopLayout>

            <LabelsTopLayout>
               <DateField label="Date" value-bind="$page.date.date" />
               {/*TimeField causing strange problems, fixed in the new version of CxJS */}
               <MonthField label="Month Range" from-bind="$page.date.from" to-bind="$page.date.to" range />
            </LabelsTopLayout>
         </div>
      </div>
   </cx>
);
