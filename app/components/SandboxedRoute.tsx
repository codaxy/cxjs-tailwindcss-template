import { bind } from 'cx/ui';
import { Route, Sandbox } from 'cx/widgets';

/**
 * SandboxedRoute adds a Sandbox within the route for pages to have private data - $page.
 * See https://docs.cxjs.io/concepts/data-views#sandbox
 */

interface SandboxedRouteProps {
   route: string;
   children?: any;
   prefix?: boolean;
}

export const SandboxedRoute = ({ route, children, prefix }: SandboxedRouteProps) => (
   <cx>
      <Route route={route} url={bind('url')} prefix={prefix}>
         <Sandbox key={bind('url')} storage={bind('pages')}>
            {children}
         </Sandbox>
      </Route>
   </cx>
);
