/** @jsx h */

import { h } from '../../../helpers'

export const input = (
  <value>
    <block>
      <text>
        w<annotation atomic key="a">
          or
        </annotation>d
      </text>
    </block>
  </value>
)

export const run = editor => {
  editor.insertTextAtPoint({ path: [0, 0], offset: 1 }, 'x')
}

export const output = (
  <value>
    <block>
      wx<annotation atomic key="a">
        or
      </annotation>d
    </block>
  </value>
)