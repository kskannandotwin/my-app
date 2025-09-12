import "../../App.css";

export default function SimpleForm() {
  const handleSubmit = (event) => {
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Simple Form</h1>
      <input type="text" name="name" placeholder="Enter name" />
      <input type="email" name="email" placeholder="Enter email" />
      <button type="submit" className="bg-color">
        Submit
      </button>
    </form>
  );
}
