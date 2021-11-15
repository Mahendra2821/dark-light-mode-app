import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: false}

  isClicked = () => {
    const {mode} = this.state
    return mode ? 'white-class' : 'dark-class'
  }

  updateState = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  bText = () => {
    const {mode} = this.state
    return mode ? 'Dark Mode' : 'Light Mode'
  }

  hText = () => {
    const {mode} = this.state
    return mode ? 'd-text' : 'l-text'
  }

  render() {
    const classTextName = this.isClicked()
    const buttonText = this.bText()
    const h1Class = this.hText()
    return (
      <div className="b-container">
        <div className={`border-class ${classTextName}`}>
          <h1 className={h1Class}>Click To Change mode</h1>
          <button type="button" className="button" onClick={this.updateState}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
