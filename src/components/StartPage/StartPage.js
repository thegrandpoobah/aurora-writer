import React, { Component } from 'react'
import { generateSite } from '../../ipc'

class StartPage extends Component {
  constructor (props) {
    super(props)

    this.generateClicked = this.generateClicked.bind(this)
  }

  generateClicked () {
    console.log('requesting')
    generateSite({
      from: './node_modules/wintersmith/examples/basic',
      to: '/tmp/winter'
    }).then((response) => {
      console.log('complete', response)

      this.props.history.push('/editor')
    })
  }

  render () {
    return (
      <div>
        <h1>Hello World!</h1>
        <button onClick={this.generateClicked}>Generate!</button>
      </div>
    )
  }
}

export default StartPage
