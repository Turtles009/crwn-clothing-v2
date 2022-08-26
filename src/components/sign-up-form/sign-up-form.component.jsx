import { useState } from "react";

const displayFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(displayFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form onSubmit={() => {}}>
      <label>Display Name</label>
      <input
        type="text"
        required
        onChange={handleChange}
        name="displayName"
        value={displayName}
      />
      <label>E-mail Address</label>
      <input
        type="email"
        required
        onChange={handleChange}
        name="email"
        value={email}
      />
      <label>Password</label>
      <input
        type="password"
        required
        onChange={handleChange}
        name="password"
        value={password}
      />
      <label>Confirm Password</label>
      <input
        type="password"
        required
        onChange={handleChange}
        name="confirmPassword"
        value={confirmPassword}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
