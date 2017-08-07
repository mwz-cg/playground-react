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
    this.state = {count: this.props.initialCount};
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

  async componentDidMount() {
    let response = await fetch('http://localhost:3000/items');
    let result = await response.json();
    this.setState((state) => { count: result });
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
