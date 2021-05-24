import { ContentResolver } from 'cx/ui';
import { DocumentTitle, Route } from 'cx/widgets';
import { PlaceholderBox } from '../components/PlaceholderBox';
import { SandboxedRoute } from '../components/SandboxedRoute';
import { TopTabsLayout } from '../layout/TopTabsLayout';
import Home from './home';
import Layouts from './layouts';

export default () => (
   <cx>
      <Route route="~/" url-bind="url">
         <Home />
      </Route>
      <Route route="~/layouts" url-bind="url" prefix>
         <Layouts />
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
