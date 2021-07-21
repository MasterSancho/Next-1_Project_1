const ArrowFunction = () => {
 console.log('Console Log');
 return (
  <div>
   <h1>I am arrow function</h1>
  </div>
 );
};

function CompA() {
 return (
  <>
   <h1>CompA</h1>
   <ArrowFunction />
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
 return (
  <>
   <h1>Hello World</h1>
   <CompA />
  </>
 );
};

export default Home;
