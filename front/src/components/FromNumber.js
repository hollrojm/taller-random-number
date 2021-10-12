import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandomNumber } from '../actions';

const From = (props) => {// component stateless
  const [state, setState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchRandomNumber(state));
  };
  return <div>
    <form onSubmit={onSubmit}>
      <label htmlFor="list">Ingrese Primer numero:</label>
      <br />
      <input id="NumberOne" type="number" min="0" max="100"
        onChange={(e) => setState({...state,number1: e.target.value})}
      ></input>
      <br />
      <label htmlFor="list">Ingrese Segundo numero:</label>
      <br />
      <input id="NumberTwo" type="number" min="0" max="100"
        onChange={(e) => setState({...state,number2: e.target.value})}
      ></input>
      <br/>
      <button type="submit" disabled={props.loading}>
        Enviar
      </button>
    </form>
  </div>
}


const stateMapToPros = state => {
  return {
    loading: state.view.loading
  }
}


export default connect(stateMapToPros)(From)
