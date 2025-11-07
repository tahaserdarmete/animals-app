const SignUp = () => {
  return (
    <div className="auth-box">
      <div className="flex flex-col mb-5">
        <h1 className="text-4xl font-bold">Welcome!</h1>
        <h2 className="text-zinc-400">Please fill in the blanks</h2>
      </div>

      <form className="w-3/4 flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-2 border rounded" />
        <input
          type="text"
          placeholder="Surname"
          className="p-2 border rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
        />

        <button
          type="button"
          className="bg-pink-400 text-white p-2 rounded-full"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
