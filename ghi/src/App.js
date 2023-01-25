import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUpFormModal from "./Accounts/SignUpFormModal";
import ListAdoptions from "./Adoptions/ListAdoptions";
import LoginForm from "./Accounts/LoginForm";
import ListDogs from "./dogs/ListDogs";
import NotFound from "./alerts/NotFound";
import Nav from "./Nav";
import "./App.css";

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');
  return (
    <BrowserRouter basename={basename}>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/dogs" element={<ListDogs />} />
          <Route path="/adoptions" element={<ListAdoptions />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpFormModal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
