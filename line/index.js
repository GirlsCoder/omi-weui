import {render,define,WeElement} from 'omi'

define('ow-docs',class extends WeElement{
  render(){
    return(
      <div>hello ow!</div>
    )
  }
})

render(<ow-docs />,'#root')