import React from 'react';
import { addOneDog } from './redux/actions';
import { connect } from "react-redux";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { addDog } = this.props;
    let newDog;

    function handleInput(e) {
      return newDog = e.currentTarget.value;
    }

    return (
      <div className="main">
        <h1>Agrega un Lomito:</h1>
        <div className="input-container">
          <input type="text" placeholder="Fido" onChange={handleInput} />
          <button onClick={() => addDog(newDog)}>+</button>
        </div>
        <div className="display-container">{this.props.perritos}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    perritos: state.dogReducer.dogs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addDog: name => dispatch(addOneDog(name))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);