import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthPage from "./pages/auth-page";
import HomePage from "./pages/home-page";
import {Bounce, ToastContainer} from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
    </BrowserRouter>
  );
};

export default App;
