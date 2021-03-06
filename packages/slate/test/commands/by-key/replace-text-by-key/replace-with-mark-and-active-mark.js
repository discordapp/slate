/** @jsx h */

import h from '../../../helpers/h'

export default function(editor) {
  const { anchor } = editor.value.selection

  editor.replaceTextByKey(anchor.key, anchor.offset, 3, 'cat is cute', [
    { type: 'italic' },
  ])
}

export const input = (
  <value>
    <document>
      <paragraph>
        Meow,{' '}
        <b>
          <cursor />word.
        </b>
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        Meow, <i>cat is cute</i>
        <b>
          <cursor />d.
        </b>
      </paragraph>
    </document>
  </value>
)
