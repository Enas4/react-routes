import { Outlet, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>I am a Contact Page .</h1>
      <button onClick={() => navigate("contactnes")}>
        Go to contact nested
      </button>
      <Outlet />
    </div>
  );
}

export default Contact;
