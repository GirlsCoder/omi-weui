import { define, WeElement } from 'omi'
import style from './_index.scss'
import '../mask'

define('ow-dialog', class extends WeElement {
  css() {
    return style
  }

  render(props) {
    console.log(props)
    return props.show ? (
      <div className="wrap">
        <div className="ow-dialog">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          {props.buttons.map(i => {
            return <a>{i}</a>
          })}
        </div>
        <ow-mask show={props.show} />
      </div>
    ) : null
  }
})
