import { SandboxedRoute } from '../../components/SandboxedRoute';
import Buttons from './buttons';
import FormFields from './form-fields';

export default (
   <cx>
      <SandboxedRoute route="+/buttons">
         <Buttons />
      </SandboxedRoute>
      <SandboxedRoute route="+/form-fields">
         <FormFields />
      </SandboxedRoute>
   </cx>
);
