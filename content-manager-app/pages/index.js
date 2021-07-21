import React, { useState } from 'react';

function CompA() {
 return (
  <>
   <h1>CompA</h1>
   <p>Hello Comp A</p>
  </>
 );
}

class CompC extends React.Component {
 constructor() {
  super();
  this.state = {
   myValue: 10,
  };
 }

 changeState(incremenator) {
  this.setState({
   myValue: incremenator,
  });
 }

 render() {
  const myValue = this.state.myValue;

  return (
   <>
    <h1>Hello CompC</h1>
    Current Value: <h1>{this.state.myValue}</h1>
    <button onClick={() => this.changeState(myValue + 1)}>+</button>
    <button onClick={() => this.changeState(myValue - 1)}>-</button>
   </>
  );
 }
}

const Home = () => {
 const [myValue, setValue] = useState(10);

 return (
  <>
   Current Value: <h1>{myValue}</h1>
   <button onClick={() => setValue(myValue + 1)}>+</button>
   <button onClick={() => setValue(myValue - 1)}>-</button>
   <CompC />
  </>
 );
};

export default Home;
