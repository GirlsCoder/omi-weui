import { define, WeElement } from 'omi'
import style from './_mainer.scss'

import '../../../src/components/button'
import '../../../src/components/mask'

define('ow-mainer', class extends WeElement {
  css() {
    return style
  }
  render() {
    return (
      <div className="mainer">
        <section>
          <h1>webApp 终极解决方案</h1>
          <p>统一于微信客户端，基于 omi 的移动端组件库</p>
        </section>
        <ow-button type='primary'>primary</ow-button>
        <ow-button type='primary' disabled>primary disabled</ow-button>
        <ow-button type='warn'>warn</ow-button>
        <ow-button type='warn' disabled>wran disabled</ow-button>
        <ow-button type='secondary'>secondary</ow-button>
        <ow-button type='secondary' disabled>secondary disabled</ow-button>
        <ow-button size='small'>mini</ow-button>
        <ow-mask disabled></ow-mask>
      </div>
    )
  }
})