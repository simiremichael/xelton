import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import React from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const InitialValue = { name: "", email: "", phone: "", message: "" };

  const [formData, setFormData] = React.useState(InitialValue);
  const form = React.useRef<HTMLFormElement>(null);

  // useEffect(() => {
  // emailjs.init('user_OjPcBuLBsMA0wASXXMw7Z')
  // }, [])
  // 'user_OjPcBuLBsMA0wASXXMw7Z'
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.target);
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === "" ||
      formData.phone.trim() === ""
    ) {
      alert("required all field");
    } else {
      if (form.current) {
        emailjs
          .sendForm(
            "service_vxr70ia",
            "template_owjmkcc",
            form.current,
            "user_OjPcBuLBsMA0wASXXMw7Z"
          )
          .then(
            () => {
              console.log("SUCCESS");
            },
            (error: unknown) => {
              if (
                typeof error === "object" &&
                error !== null &&
                "text" in error
              ) {
                console.log("FAIL...", error.text);
              } else {
                console.log("FAIL...", error);
              }
            }
          );
      } else {
        alert("Form reference is not available.");
      }
      toast("Message sent");
      // e.target.reset();
      setFormData(InitialValue);
    }
  };
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                sendEmail={sendEmail}
                form={form}
                formData={formData}
                setFormData={setFormData}
              />
            }
          ></Route>
          <Route
            path="/about"
            element={
              <About
                sendEmail={sendEmail}
                form={form}
                formData={formData}
                setFormData={setFormData}
              />
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <Contact
                sendEmail={sendEmail}
                form={form}
                formData={formData}
                setFormData={setFormData}
              />
            }
          ></Route>
          <Route
            path="/privacy"
            element={
              <Privacy
                sendEmail={sendEmail}
                form={form}
                formData={formData}
                setFormData={setFormData}
              />
            }
          ></Route>
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
