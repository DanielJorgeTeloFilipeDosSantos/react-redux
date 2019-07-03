import React from 'react';
import '../styles/App.css';
import {connect} from 'react-redux'


function App(props) {
  return (
    <div className="App">
        <br/><br/><br/>
        {props.name}
        <br/><br/>
        <button onClick={props.onChangeNameClick}>CHANGE_NAME</button>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state.name) 
  return{
    name: state.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    onChangeNameClick: () => dispatch({ type: 'CHANGE_NAME' })
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(App);
