import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthPage from "./pages/auth-page";
import HomePage from "./pages/home-page";
import {Bounce, ToastContainer} from "react-toastify";
import Footer from "./components/footer";
import DetailPage from "./components/detailPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <div>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/pets/:id" element={<DetailPage />} />
          </Routes>
        </div>
        <Footer />
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
      </div>
    </BrowserRouter>
  );
};

export default App;
