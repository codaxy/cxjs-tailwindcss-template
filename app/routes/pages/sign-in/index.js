import { LabelsTopLayout } from 'cx/ui';
import { Button, Checkbox, Link, MsgBox, Rescope, TextField, ValidationGroup } from 'cx/widgets';
import { Logo } from '../../../components/Logo';
import Controller from './Controller';

export default (
   <cx>
      <Rescope bind="$page" controller={Controller}>
         <div class="h-full flex flex-col items-center justify-center bg-red-100 text-gray-800">
            <form
               class="px-8 pt-8 pb-8 bg-white shadow rounded-lg w-[370px]"
               onSubmit="onSubmit"
            >
               <Logo />
               <p class="text-gray-500 my-4">Please sign in to access your account</p>
               <ValidationGroup invalid-bind="login.invalid">
                  <LabelsTopLayout vertical class="w-full">
                     <TextField
                        value-bind="login.username"
                        label="Username"
                        required-bind="visited"
                        class="w-full"
                        validationMode="help-block"
                        visited-bind="visited"
                     />
                     <TextField
                        value-bind="login.password"
                        label="Password"
                        inputType="password"
                        required-bind="visited"
                        class="w-full"
                        validationMode="help-block"
                        visited-bind="visited"
                     />
                     <div class="flex items-center">
                        <Checkbox value-bind="login.rememberMe">Remember me</Checkbox>
                        <Link href="+/recover-password" class="ml-auto text-sm text-red-600">
                           Forgot your password
                        </Link>
                     </div>
                     <Button class="login-btn" mod="danger" disabled-bind="login.invalid" submit class="w-full mt-2">
                        Login
                     </Button>
                  </LabelsTopLayout>
               </ValidationGroup>
            </form>
         </div>
      </Rescope>
   </cx>
);
