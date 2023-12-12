

// Child component that receives props
function Greeting(props) {
  return <div>Hello, {props.name}!</div>;
}

// Parent component
function App() {
  return (
    <div>
      <h1>Greetings</h1>
      <Greeting name="Alice" /> {/* Passing the "name" prop */}
      <Greeting name="Bob" /> {/* Passing a different "name" prop */}
    </div>
  );
}
