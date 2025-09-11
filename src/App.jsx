import HelloWorld from "./core-concepts/01-hello-world/HelloWorld";
import GreetingClass from "./core-concepts/02-components/GreetingClass";
import PropsExample from "./core-concepts/04-props/PropsExample";
import JsxExample from "./core-concepts/03-jsx/JsxExample";
import StateExample from "./core-concepts/05-state/StateExample";

function App() {
  // return <HelloWorld />;
  // return <Greeting />;
  // return <GreetingClass />;
  // return <JsxExample />;
  return (
    // <PropsExample technology="Javascript" title="Welcome to React Course" />
    <StateExample />
  );
}

export default App;
