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

 // const changeValue = (incrementor) => {
 //  setValue(myValue + incrementor);
 // };

 return (
  <>
   Current Value: <h1>{myValue}</h1>
   <button onClick={() => setValue(myValue + 1)}>+</button>
   <button onClick={() => setValue(myValue - 1)}>-</button>
   <CompA />
  </>
 );
};

export default Home;
