export interface ToastImplementation {
   showErrorToast(err: unknown, title?: string): void;
   showInfoToast(content: string): void;
}

let impl: ToastImplementation | null = null;

//This crazines is added to minimize initial JavaScript bundle size.
//Toasts, message boxes, are loaded after the content is shown.
//check overlays/index.js for implementation.

export function showErrorToast(err: unknown, title?: string): void {
   if (impl) impl.showErrorToast(err, title);
   else console.error(title, err);
}

export function showInfoToast(content: string): void {
   if (impl) impl.showInfoToast(content);
   else console.log(content);
}

export function registerToastImplementation(im: ToastImplementation): void {
   impl = im;
}
