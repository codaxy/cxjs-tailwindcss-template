import { ContentResolver } from 'cx/ui';
import { DocumentTitle, Route } from 'cx/widgets';
import Home from './home';
import Layouts from './layouts';
import Widgets from './widgets';
import Pages from './pages';
import Dashboard from './dashboard';

export default () => (
   <cx>
      <Route route="~/" url-bind="url">
         <Home />
      </Route>
      <Route route="~/layouts" url-bind="url" prefix>
         <Layouts />
      </Route>
      <Route route="~/widgets" url-bind="url" prefix>
         <Widgets />
      </Route>
      <Route route="~/pages" url-bind="url" prefix>
         <Pages />
      </Route>
      <Route route="~/dashboard" url-bind="url" prefix>
         <Dashboard />
      </Route>

      <ContentResolver
         visible-expr="!!{user}"
         params={1}
         onResolve={() => import(/* webpackChunkName: "user-routes" */ './user').then((x) => x.default)}
      />
      <ContentResolver
         params={1}
         onResolve={() => import(/* webpackChunkName: "overlays" */ '../overlays').then((x) => x.default)}
      />
      <DocumentTitle append text="Demo App" separator=" | " />
   </cx>
);
