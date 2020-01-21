import React, {PureComponent} from 'react'

class App extends PureComponent {
  state = {
    foo: 'bar',
    value: 0,
  }

  componentDidMount() {
    console.log('I mounted')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('I updated', this.state)
  }

  render() {
    return (
      <div>
        <h1>Hi, I'm App component</h1>
        <h2>{this.state.value}</h2>
        <button onClick={this.handlePlusButtonClick}>+</button>
      </div>
    )
  }

  handlePlusButtonClick = e => {
    console.log('Clicked')
    this.setState({
      value: this.state.value + 1,
    })
  }
}

export default App
