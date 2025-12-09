import {useState} from "react";
import MainPhoto from "../components/main/main-photo";
import SignUp from "../components/main/sign-up";
import SignIn from "../components/main/sign-in";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#27277d]">
      {/* Fotoğraf kısmı */}
      <div className="md:w-1/2 w-full">
        <MainPhoto />
      </div>

      {/* Form kısmı */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8">
        {isSignUp ? <SignUp /> : <SignIn />}

        {/* Geçiş butonu */}
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-white mt-6"
        >
          {isSignUp ? (
            <>
              Already have an account?
              <span className="underline cursor-pointer text-pink-400 hover:text-pink-600 mx-1">
                Sign In
              </span>
            </>
          ) : (
            <>
              No Account yet?
              <span className="underline cursor-pointer text-pink-400 hover:text-pink-600 mx-1">
                Create Account
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
