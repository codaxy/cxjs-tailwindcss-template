import { Sandbox, Route } from 'cx/widgets';

export const SandboxedRoute = ({ route, children, prefix }) => (
   <cx>
      <Sandbox key-bind="url" storage-bind="pages" useParentLayout>
         <Route route={route} url-bind="url" prefix={prefix}>
            {children}
         </Route>
      </Sandbox>
   </cx>
);
