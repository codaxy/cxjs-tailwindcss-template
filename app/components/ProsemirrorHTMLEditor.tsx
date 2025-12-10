import { ProsemirrorEditor } from './ProsemirrorEditor';

import { Schema, DOMParser, DOMSerializer, Node as ProsemirrorNode } from 'prosemirror-model';
import { exampleSetup } from 'prosemirror-example-setup';
import { schema } from 'prosemirror-schema-basic';
import { addListNodes } from 'prosemirror-schema-list';
import type { Plugin as ProsemirrorPlugin } from 'prosemirror-state';

import 'prosemirror-view/style/prosemirror.css';
import 'prosemirror-example-setup/style/style.css';
import 'prosemirror-menu/style/menu.css';

export class ProsemirrorHtmlEditor extends ProsemirrorEditor {
   declare schema: Schema;
   declare parser: DOMParser;
   declare serializer: DOMSerializer;

   init() {
      this.schema = new Schema({
         nodes: addListNodes(schema.spec.nodes, 'paragraph block*', 'block'),
         marks: schema.spec.marks,
      });
      this.parser = DOMParser.fromSchema(this.schema);
      this.serializer = DOMSerializer.fromSchema(this.schema);
      super.init();
   }
   parseDocument(value: unknown): ProsemirrorNode {
      const element = document.createElement('div');
      element.innerHTML = (value as string) || '';
      return this.parser.parse(element);
   }

   serializeDocument(doc: ProsemirrorNode): string {
      const div = document.createElement('div');
      const fragment = this.serializer.serializeFragment(doc.content);
      div.appendChild(fragment);
      return div.innerHTML;
   }

   createPlugins(): ProsemirrorPlugin[] {
      return exampleSetup({ schema: this.schema });
   }
}
