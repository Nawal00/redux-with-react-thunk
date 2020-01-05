import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/actions";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          Age: {this.props.age}
          <div className="btns">
            <button onClick={id => this.props.onAgeUp(id)}>Age up</button>
            <button onClick={id => this.props.onAgeDown(id)}>Age down</button>
          </div>
        </div>
        <div className="logo"> {this.props.loading && <img src={logo} alt="logo" />} </div>
        <hr />
        <div>History</div>
        <div className="history"> 
          <ul >
            {this.props.history.map(el => (
              <li key={el.id} onClick={() => this.props.OnDelete(el.id)}>
                {el.age}
              </li>
            ))}
          </ul>
        </div>
        </div>
    
    );
  }
}

// subscribe
const mapStateToProps = state => {
  return {
    age: state.age,
    history: state.history,
    loading: state.loading
  };
};

// dispatch actions to reducers
const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
    OnDelete: id => dispatch({ type: "ON_DELETE", id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
