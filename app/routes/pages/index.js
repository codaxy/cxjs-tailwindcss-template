import { SandboxedRoute } from '../../components/SandboxedRoute';
import SignIn from './sign-in';

export default (
   <cx>
      <SandboxedRoute route="+/sign-in" prefix>
         <SignIn />
      </SandboxedRoute>
   </cx>
);
