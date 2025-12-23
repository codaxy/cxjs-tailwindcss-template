import { updateArray, append } from 'cx/data';

export interface ResourceRecord {
   id: string | number;
   [key: string]: unknown;
}

function delayedResponse<T>(response?: T): Promise<T | undefined> {
   return new Promise((resolve) => {
      setTimeout(() => resolve(response), Math.random() * 300);
   });
}

export class Resource<T extends ResourceRecord = ResourceRecord, F = unknown> {
   data: T[];
   nextId: number;

   constructor(data?: T[]) {
      this.data = data || [];
      this.nextId = 1000000;
   }

   filter(data: T[], _f: F): T[] {
      return data;
   }

   query(filter: F): Promise<T[] | undefined> {
      return delayedResponse(this.filter(this.data, filter));
   }

   get(id: string | number): Promise<T | undefined> {
      const record = this.data.find((x) => x.id == id);
      return delayedResponse(record);
   }

   put(id: string | number, record: Partial<T>): Promise<T | undefined> {
      this.data = updateArray(
         this.data,
         () => ({
            ...record,
         }) as T,
         (x) => x.id == id
      );

      return delayedResponse({ ...record } as T);
   }

   newRecord(): Partial<T> {
      return {};
   }

   post(record: Partial<T>): Promise<T | undefined> {
      const newRecord = {
         ...record,
         id: ++this.nextId,
         ...this.newRecord(),
      } as T;
      this.data = append(this.data, newRecord);
      return delayedResponse({ ...newRecord });
   }

   delete(id: string | number): Promise<undefined> {
      this.data = this.data.filter((a) => a.id != id);
      return delayedResponse(undefined);
   }
}
