import { GET } from '../../../common/api/util/methods';

export default ({ get, set }) => {
   let { id } = get('$route');
   return {
      onInit() {
         this.onLoad();
         this.onLoadStatuses();
      },

      async onLoad() {
         let data = await GET(`topics/${id}`);
         set('$page.topic', data);
      },

      async onLoadStatuses() {
         let data = await GET(`statuses`, {
            query: {
               topicId: id,
            },
         });
         set('$page.data', data);
      },
   };
};
