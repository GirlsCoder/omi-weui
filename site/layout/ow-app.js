import { define, WeElement } from 'omi'
import './header/header'

define('ow-app', class extends WeElement {
  render() {
    return (
      <div className="page">
        <ow-header />
      </div>
    )
  }
})
