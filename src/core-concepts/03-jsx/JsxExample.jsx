import "../../App.css";

export default function JsxExample() {
  // embedded expression
  const name = "Kannan";
  return (
    <div>
      <h1 className="bg-color">Hello, {name}!</h1>
      <p style={{ backgroundColor: "yellow", border: "1px solid grey" }}>
        This is a JSX example.
      </p>
    </div>
  );
}
