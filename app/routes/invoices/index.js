import { HtmlElement, Route } from 'cx/widgets';

import Single from './single';
import List from './list';
import { SandboxedRoute } from '../../components/SandboxedRoute';

export default (
   <cx>
      <SandboxedRoute route="~/invoices">
         <List />
      </SandboxedRoute>
      <SandboxedRoute route="~/invoices/:id">
         <Single />
      </SandboxedRoute>
   </cx>
);
