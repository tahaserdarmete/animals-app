import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // json-server
    fetch("http://localhost:5001/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name, surname, email, password}),
    })
      .then((res) => res.json())
      .then(() => toast.success("User created"));
  };
  return (
    <div className="auth-box">
      <div className="flex flex-col mb-5">
        <h1 className="text-4xl font-bold ">Welcome!</h1>
        <h2 className="text-zinc-400">Please fill in the blanks</h2>
      </div>

      <form className="w-3/4 flex flex-col gap-4" onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          className="p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Surname"
          className="p-2 border rounded"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-pink-400 text-white p-2 rounded-full"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
