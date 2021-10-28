import './login.css';
import UseForm from '../../UseForm.js'

export default function Login() {
  const [values, handleChange] = UseForm({username:``, password:``})

  return (
    <>
    <form>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Submit
      </button>
    </form>
    <p>{ values.password }</p>
    </>
  );
}

