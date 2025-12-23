import { urlEncode } from './urlEncode';

interface ApiError extends Error {
   statusText?: string;
}

async function processResponse<T>(response: Response): Promise<T | null> {
   if (response.status == 201) return null;
   try {
      return response.json();
   } catch (e) {
      console.warn('Could not parse response.', e);
      return null;
   }
}

async function checkOk(r: Response): Promise<Response> {
   if (r.ok) return r;
   let data: { error?: string } | undefined;
   try {
      data = await r.json();
   } catch {}
   if (data?.error) {
      const err: ApiError = new Error(data.error);
      err.statusText = r.statusText;
      throw err;
   }
   throw Error(r.statusText);
}

const apiBaseUrl = '/api/';

export interface FetchOptions {
   authorize?: boolean;
   method?: string;
   headers?: Record<string, string>;
   body?: string;
   query?: Record<string, string | number | boolean | null | undefined>;
}

export function resolveAPIUrl(
   path: string,
   query?: Record<string, string | number | boolean | null | undefined>
): string {
   let qs = '';
   if (typeof query == 'object' && query) qs = '?' + urlEncode(query);
   return apiBaseUrl + path + qs;
}

const defaultOptions: FetchOptions = {
   authorize: true,
   method: 'GET',
};

export function resolveFetchOptions(options: FetchOptions): RequestInit {
   const fetchOptions: RequestInit = {
      headers: options.headers || {},
      method: options.method || 'GET',
      body: options.body,
   };

   // if (options.authorize)
   //     fetchOptions.headers["authorization"] = `Bearer ${access_token}`;
   return fetchOptions;
}

export async function doFetch(path: string, options: FetchOptions = defaultOptions): Promise<Response> {
   const url = resolveAPIUrl(path, options.query);
   const fetchOptions = resolveFetchOptions(options);
   let response = await fetch(url, fetchOptions);
   response = await checkOk(response);
   return response;
}

export function GET<T = unknown>(url: string, options: FetchOptions = defaultOptions): Promise<T> {
   return doFetch(url, {
      ...options,
      headers: {
         Accept: 'application/json',
      },
   }).then((x) => x.json());
}

export async function PATCH<T = unknown>(
   url: string,
   data: unknown,
   options: FetchOptions = defaultOptions
): Promise<T | null> {
   const response = await doFetch(url, {
      ...options,
      method: 'PATCH',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(data, null, 2),
   });
   return await processResponse<T>(response);
}

export async function POST<T = unknown>(
   url: string,
   data: unknown,
   options: FetchOptions = defaultOptions
): Promise<T | null> {
   const response = await doFetch(url, {
      ...options,
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json',
      },
      body: JSON.stringify(data, null, 2),
   });
   return await processResponse<T>(response);
}

export async function PUT<T = unknown>(url: string, data: unknown): Promise<T | null> {
   const response = await doFetch(url, {
      ...defaultOptions,
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json',
      },
      body: JSON.stringify(data, null, 2),
   });
   return await processResponse<T>(response);
}

export async function DELETE(url: string, options: FetchOptions = defaultOptions): Promise<void> {
   await doFetch(url, {
      ...options,
      method: 'DELETE',
   });
}
