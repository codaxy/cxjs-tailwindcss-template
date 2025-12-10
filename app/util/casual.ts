// @ts-ignore - casual library does not have TypeScript types
import helpers from 'casual/src/helpers';
// @ts-ignore
import number from 'casual/src/providers/number';
// @ts-ignore
import person from 'casual/src/providers/person';
// @ts-ignore
import address from 'casual/src/providers/address';
// @ts-ignore
import text from 'casual/src/providers/text';

interface CasualProvider {
   random_element<T>(arr: T[]): T;
   register_provider(provider: object): void;
   extend(target: object, source: object): CasualInstance;
}

interface CasualInstance extends CasualProvider {
   functions(): Record<string, unknown>;
   browser(): string;
   operating_system(): string;
   continent(): string;
   first_name: string;
   last_name: string;
   full_name: string;
   email: string;
   city: string;
   country: string;
   phone: string;
   integer(min?: number, max?: number): number;
   double(min?: number, max?: number): number;
   [key: string]: unknown;
}

const browsers = {
   browsers: ['Chrome', 'Firefox', 'Internet Explorer', 'Opera', 'Safari', 'Edge'],

   browser: function (this: CasualProvider) {
      return this.random_element(this.browsers);
   },
};

const operatingSystems = {
   operating_systems: ['Windows', 'Mac OS', 'Ubuntu', 'Android', 'iOS', 'Edge'],

   operating_system: function (this: CasualProvider) {
      return this.random_element(this.operating_systems);
   },
};

const continents = {
   continents: ['Europe', 'Asia', 'North America', 'Africa', 'South America', 'Australia', 'Antarctica'],

   continent: function (this: CasualProvider) {
      return this.random_element(this.continents);
   },
};

export function build(providers: object[]): CasualInstance {
   const casual = (helpers as CasualProvider).extend({}, helpers) as CasualInstance;

   casual.functions = function (this: CasualInstance) {
      const adapter: Record<string, unknown> = {};

      Object.keys(this).forEach((name) => {
         if (name[0] === '_') {
            adapter[name.slice(1)] = casual[name];
         }
      });

      return adapter;
   };

   providers.forEach(function (provider) {
      casual.register_provider(provider);
   });

   return casual;
}

export default build([number, text, person, address, browsers, operatingSystems, continents]);
