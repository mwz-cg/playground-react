// { autofold
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const ACTIONS = ['INCREMENT', 'DECREMENT'];

// }
class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};

    this.setCount = this.setCount.bind(this);
  }

  // { autofold
  handleClick(action) {
    this.setState((state, props) => {
        switch (action) {
          case 'INCREMENT': return {count: state.count + 1}
          case 'DECREMENT': return {count: state.count - 1}
          default:
        }
    })
  }
  // }

  setCount(event) {
    let count = Number.parseInt(/* TODO: use the value of this.input here */)
    if (Number.isInteger(count)) {
      this.setState({count})
    }
  }

  render() {
    return (
      <form>
        Number of items: {this.state.count}

        {ACTIONS.map(action =>
          <button type="button" key={action} onClick={() => this.handleClick(action)}>
            {this.props.labels[action]}
          </button>)}

        <div>
          <label>
            Set number of items:
            <input type="text" ref={(input) => void 0 /* TODO: save input to this.input */} />
          </label>
          <button type="button" onClick={this.setCount}>Click me</button>
        </div>
      </form>
    )
  }
}

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
  labels: PropTypes.objectOf(PropTypes.string).isRequired
}

Counter.defaultProps = {
  initialCount: 0
}

ReactDOM.render(<Counter labels={{INCREMENT: '+', DECREMENT: '-'}} />, document.getElementById('root'))
