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
 const [myValue, setValue] = useState(10);

 const incrementValue = () => {
  setValue(myValue + 1);
  console.log(myValue);
 };

 return (
  <>
   Current Value: <h1>{myValue}</h1>
   <button onClick={incrementValue}>+</button>
   <button>-</button>
   <CompA />
  </>
 );
};

export default Home;
