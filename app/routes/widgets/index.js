import { SandboxedRoute } from '../../components/SandboxedRoute';
import Buttons from './buttons';
import FormFields from './form-fields';
import RichText from './rich-text';

export default (
   <cx>
      <SandboxedRoute route="+/buttons">
         <Buttons />
      </SandboxedRoute>
      <SandboxedRoute route="+/form-fields">
         <FormFields />
      </SandboxedRoute>
      <SandboxedRoute route="+/rich-text">
         <RichText />
      </SandboxedRoute>
   </cx>
);
