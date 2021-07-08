import { HtmlElement, Route } from 'cx/widgets';

import Single from './single';
import List from './list';

export default (
   <cx>
      <Route route="~/invoices" url-bind="url" items={List} />
      <Route route="~/invoices/:id" url-bind="url" items={Single} />
   </cx>
);
