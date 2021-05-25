import { SandboxedRoute } from '../../components/SandboxedRoute';
import { BrandedSidebarLayout } from '../../layout/BrandedSidebarLayout';
import Buttons from './buttons';
import Inputs from './inputs';

export default (
   <cx>
      <BrandedSidebarLayout
         nav={[
            {
               text: 'Buttons',
               href: '+/buttons',
            },
            {
               text: 'Inputs',
               href: '+/inputs',
            },
         ]}
      >
         <SandboxedRoute route="+/buttons">
            <Buttons />
         </SandboxedRoute>
         <SandboxedRoute route="+/inputs">
            <Inputs />
         </SandboxedRoute>
      </BrandedSidebarLayout>
   </cx>
);
