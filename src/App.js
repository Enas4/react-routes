import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Service from "./components/Service/Service";
import User from "./components/User/User";
import Menu from "./components/Menu/Menu";
import ContactNes from "./components/ContactNes/ContactNes";

function App() {
  return (
    <>
      <Menu />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About name={About} />} />
          <Route path="/service" element={<Service name={Service} />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="contactnes" element={<ContactNes />} />
          </Route>
          <Route component={Error} />
        </Routes>
      </div>
    </>
  );
}

export default App;
