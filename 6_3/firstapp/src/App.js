import './App.css';
import { Component } from 'react';
import {MyComponent} from './MyComponent';

class App extends Component{
  render() {
    const name = 'react';
    return <div classNaame='react'>{name}</div>;
  }
}
export default App;

function App() {
  return <MyComponent name='react'/>;
}