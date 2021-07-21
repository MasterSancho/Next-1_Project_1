import React, { useState } from 'react';

function CompA({ myProp1, myProp2, myProp3, myProp4 }) {
 return (
  <>
   <h1>CompA</h1>
   <p>Hello Comp A</p>
   <div>My Prop1: {myProp1}</div>
   <div>My Prop2: {myProp2}</div>
   <div>My Prop3: {myProp3}</div>
   <div>My Prop4: {<myProp4 />}</div>
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
   <CompA
    myProp1={myValue}
    myProp2='My Custom Value'
    myProp3={true.toString()}
    myProp4={() => <div>My NEW JSX!</div>}
   />
  </>
 );
};

export default Home;
