import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function App() {
  const InitialValue = { name: '', email: '', phone: '', message: ''}

  const [formData, setFormData] = React.useState(InitialValue)
  const formRef = useRef();
  const sendEmail = (e: any) => {
       
    if(formData.name.trim()==="" || formData.email.trim() ==="" || formData.message.trim() ===""|| formData.phone.trim() ===""){
        alert("required all field");
      }
      else{
    
      setFormData(InitialValue)

        emailjs.sendForm('service_vxr70ia', 'template_owjmkcc', 'user_OjPcBuLBsMA0wASXXMw7Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Email sent');
      e.target.reset();
      }
    }
  return (
    <>
      <div>
      <Routes>
   <Route path='/' element={<Home sendEmail={sendEmail} formData={formData} setFormData={setFormData}/>}></Route>
   <Route path='/about' element={<About sendEmail={sendEmail}  formData={formData} setFormData={setFormData}/>}></Route>
   <Route path='/contact' element={<Contact sendEmail={sendEmail}  formData={formData} setFormData={setFormData}/>}></Route>
   <Route path='/privacy' element={<Privacy/>}></Route>
    </Routes>
      </div>
    </>
  )
}

export default App
