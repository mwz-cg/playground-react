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

    // TODO: bind handleChange to this
    this.handleChange = this.handleChange;
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

  handleChange(event) {
    let count = Number.parseInt(event.target.value)
    if (Number.isInteger(count)) {
      this.setState({count})
    }
  }

  render() {
    return (
      <form>
        <label>
          Number of items:
          {/* TODO: set the onChange prop to this.handleChange */}
          <input type="text" value={this.state.count} />
        </label>
        {ACTIONS.map(action =>
          <button type="button" key={action} onClick={() => this.handleClick(action)}>
            {this.props.labels[action]}
          </button>)}
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
