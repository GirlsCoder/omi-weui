import { define, WeElement } from 'omi'
import './header/header'
import style from '../common/scss/_index.scss'

define('ow-app', class extends WeElement {
  css() {
    return style
  }
  render() {
    return (
      <div className="page">
        <ow-header />
      </div>
    )
  }
})
