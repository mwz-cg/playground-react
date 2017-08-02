// { autofold
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const ACTIONS = ['INCREMENT', 'DECREMENT'];

// }
class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {count: this.props.initialCount};
  }

  handleClick(action) {
    this.setState((state, props) => {
        switch (action) {
          case 'INCREMENT': return {count: state.count + 1}
          case 'DECREMENT': return {/* TODO: implement the DECREMENT action */}
          default:
        }
    })
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

Counter.defaultProps = {
  initialCount: 0
}
// }

ReactDOM.render(<Counter labels={{INCREMENT: '+', DECREMENT: '-'}} />, document.getElementById('root'))
