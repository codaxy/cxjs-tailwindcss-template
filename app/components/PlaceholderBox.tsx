import { createFunctionalComponent, ClassProp } from 'cx/ui';

export const PlaceholderBox = createFunctionalComponent(({ className }: { className: ClassProp }) => (
   <cx>
      <div class="p-12 grid" className={className}>
         <div class="border-4 border-gray-300 border-dashed rounded-lg" />
      </div>
   </cx>
));
