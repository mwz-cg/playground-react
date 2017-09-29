import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const ACTIONS = ['INCREMENT', 'DECREMENT'];

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {}; // TODO: add a count property to state, equal to the initialCount value of this component's props
  }

  handleClick(action) {
    console.log(`Received action ${action}`)
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

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
  labels: PropTypes.objectOf(PropTypes.string).isRequired
}

Counter.defaultProps = {
  initialCount: 0
}

ReactDOM.render(<Counter initialCount={42} labels={{INCREMENT: '+', DECREMENT: '-'}} />, document.getElementById('root'))
