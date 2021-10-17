import { LabelsLeftLayout } from 'cx/src/ui';
import { ProseMirror } from '../../../components/ProseMirror';
import Controller from './Controller';

export default (
   <cx>
      <div controller={Controller} class="p-8">
         <LabelsLeftLayout>
            <ProseMirror class=" h-64" value-bind="$page.data" label="HTML" />
            <ProseMirror class=" h-64" value-bind="$page.data" label="HTML" />
         </LabelsLeftLayout>
      </div>
   </cx>
);
