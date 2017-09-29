// { autofold
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const ACTIONS = ['INCREMENT', 'DECREMENT'];

// }
class Counter extends Component {

  // { autofold
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }
  // }

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

  // TODO: use lifecycle method
  async loadCount() {
    let response = await fetch('/count')
    let result = await response.json()
    // TODO set count from result
  }

  render() {
    return (
      <div>
        <p>Number of items: {this.state.count}</p>
        {ACTIONS.map(action =>
          <button key={action} onClick={() => this.handleClick(action)}>
            {this.props.labels[action]}
          </button>)}
      </div>
    )
  }
}
// { autofold
Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
  labels: PropTypes.objectOf(PropTypes.string).isRequired
}
// }

// { autofold
Counter.defaultProps = {
  initialCount: 0
}
// }

ReactDOM.render(<Counter labels={{INCREMENT: '+', DECREMENT: '-'}} />, document.getElementById('root'))
