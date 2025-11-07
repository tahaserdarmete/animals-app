const SignIn = () => {
  return (
    <div className="auth-box mb-2">
      <div className="mb-10">
        <h1
          className="font-bold text-pink-100 text-3xl ml-24"
          style={{fontFamily: "Arial, sans-serif"}}
        >
          LOGIN
        </h1>
        <h2 className="text-sm text-zinc-400">
          Please enter your password to continue
        </h2>
      </div>

      <form className="w-3/4 flex flex-col gap-6 pt-1 pb-2">
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
          className="bg-pink-400 hover:bg-pink-700 cursor-pointer text-white p-2 rounded-full w-30 ml-15"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
