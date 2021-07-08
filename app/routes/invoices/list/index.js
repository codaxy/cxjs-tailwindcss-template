import { bind } from 'cx/ui';
import { Button, Grid, Link, LookupField, Pagination } from 'cx/widgets';
import Controller from './Controller';

export default (
   <cx>
      <main class="overflow-hidden flex flex-col text-gray-600" controller={Controller}>
         <div class="p-2">
            <Button icon-expr="{$page.loading} ? 'loading' : 'refresh'" onClick="onLoad" mod="hollow">
               Refresh
            </Button>
         </div>
         <Grid
            records-bind="$page.records"
            class="flex-grow "
            scrollable
            border={false}
            remoteSort
            lockColumnWidths
            sorters-bind="$page.filter.sorters"
            mod="fixed-layout"
            columns={[
               {
                  field: 'invoiceNo',
                  sortable: true,
                  align: 'center',
                  items: (
                     <cx>
                        <Link href-tpl="~/invoices/{$record.id}" text-tpl="{$record.invoiceNo}" />
                     </cx>
                  ),
                  header: { text: 'Order No.', style: 'border-left: none' },
                  resizable: true,
                  defaultWidth: 120,
               },
               {
                  field: 'date',
                  format: 'd',
                  sortable: true,
                  align: 'center',
                  header: 'Date',
                  resizable: true,
                  defaultWidth: 120,
               },
               {
                  field: 'customer.name',
                  value: bind('$record.customer.name'),
                  sortable: true,
                  header: 'Customer',
                  resizable: true,
                  defaultWidth: 300,
               },
               {
                  header: 'Status',
                  field: 'status',
                  align: 'status',
                  sortable: true,
                  resizable: true,
                  defaultWidth: 120,
               },
               {
                  header: 'Amount',
                  field: 'totalAmount',
                  format: 'currency;;2',
                  align: 'right',
                  sortable: true,
                  resizable: true,
                  defaultWidth: 120,
               },
            ]}
         />
         <div class="border-t p-2 flex  ">
            <Pagination page-bind="$page.page" pageCount-bind="$page.pageCount" />
            <LookupField
               value-bind="$page.pageSize"
               class="ml-2 w-[180px]"
               required
               options={[
                  {
                     id: 5,
                     text: '5 rows per page',
                  },
                  {
                     id: 10,
                     text: '10 rows per page',
                  },
                  {
                     id: 20,
                     text: '20 rows per page',
                  },
                  {
                     id: 50,
                     text: '50 rows per page',
                  },
               ]}
            />
         </div>
      </main>
   </cx>
);
