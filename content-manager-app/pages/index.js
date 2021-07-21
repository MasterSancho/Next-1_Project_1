import React, { useState } from 'react';

function CompA() {
 return (
  <>
   <h1>CompA</h1>
   <CompB />
  </>
 );
}

function CompB() {
 return (
  <>
   <h1>CompB</h1>
   <p>Hello Comp B</p>
  </>
 );
}

const Home = () => {
 // [stateValue, mutateState]
 const valueState = useState(10);
 const [value, setValue] = useState(10);
 // const value = valueState[0];
 // const setValue = valueState[1];

 return (
  <>
   valueState: {valueState[0]}
   <h1>Hello World</h1>
   <CompA />
  </>
 );
};

export default Home;
