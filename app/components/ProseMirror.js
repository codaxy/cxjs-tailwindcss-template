import { Field } from 'cx/widgets';

import { EditorView } from 'prosemirror-view';
import { EditorState } from 'prosemirror-state';
import { schema, defaultMarkdownParser, defaultMarkdownSerializer } from 'prosemirror-markdown';
import { exampleSetup } from 'prosemirror-example-setup';

import 'prosemirror-view/style/prosemirror.css';
import 'prosemirror-example-setup/style/style.css';
import 'prosemirror-menu/style/menu.css';

export class ProseMirror extends Field {
   declareData(...args) {
      super.declareData(...args, {
         value: undefined,
      });
   }

   renderInput(context, instance, key) {
      let { data } = instance;

      //this must be stable
      if (!instance.onRef) instance.onRef = (el) => this.initializeEditor(el, instance);

      return (
         <div key={key} style={data.style} className={data.classNames}>
            <div className={this.CSS.element(this.baseClass, 'input')} ref={instance.onRef} />
         </div>
      );
   }

   prepareData(context, instance) {
      super.prepareData(context, instance);
      let { data, view } = instance;
      console.log('PREPARE', instance, data.value);
      if (instance.editorValue != data.value && view) {
         view.updateState(
            EditorState.create({
               doc: defaultMarkdownParser.parse(data.value || ''),
               plugins: exampleSetup({ schema }),
            })
         );
         instance.editorValue = data.value;
         //Replace content here
         //var content = defaultMarkdownParser.parse(data.value || '');
         //view.dispatch(view.state.tr.replaceSelection(content));
      }
   }

   destroyEditor(instance) {
      if (!instance.el) return;
      instance.view.destroy();
      instance.view = null;
      instance.el = null;
   }

   initializeEditor(el, instance) {
      if (instance.el == el) return;
      this.destroyEditor(instance);
      instance.el = el;
      instance.view = new EditorView(el, {
         state: EditorState.create({
            doc: defaultMarkdownParser.parse(instance.data.value || ''),
            plugins: exampleSetup({ schema }),
         }),
         dispatchTransaction(tr) {
            this.updateState(this.state.apply(tr));
            var md = defaultMarkdownSerializer.serialize(this.state.doc);
            var json = JSON.stringify(this.state.doc.toJSON(), null, 4);
            console.log('CHANGE', instance, md, tr);
            instance.editorValue = md;
            instance.set('value', md, true);
         },
      });
   }

   onDestroy(instance) {
      this.destroyEditor(instance);
   }
}

ProseMirror.prototype.styled = true;
ProseMirror.prototype.baseClass = 'prosemirror';
