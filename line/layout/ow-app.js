import { define, WeElement } from 'omi'
import './header/header'

define('ow-app', class extends WeElement {
  render() {
    return <ow-header />
  }
})
