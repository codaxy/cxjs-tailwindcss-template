import { SandboxedRoute } from '../../components/SandboxedRoute';
import { BrandedSidebarLayout } from '../../layout/BrandedSidebarLayout';
import Buttons from './buttons';
import FormFields from './form-fields';

export default (
   <cx>
      <BrandedSidebarLayout
         nav={[
            {
               text: 'Buttons',
               href: '+/buttons',
            },
            {
               text: 'Form Fields',
               href: '+/form-fields',
            },
         ]}
      >
         <SandboxedRoute route="+/buttons">
            <Buttons />
         </SandboxedRoute>
         <SandboxedRoute route="+/form-fields">
            <FormFields />
         </SandboxedRoute>
      </BrandedSidebarLayout>
   </cx>
);
