import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import React from 'react'
import emailjs from '@emailjs/browser';

function App() {
  const InitialValue = { name: '', email: '', phone: '', message: ''}

  const [formData, setFormData] = React.useState(InitialValue)

//   let templateParams = {
//     name: formData.name,
//     email: formData.email,
//     phone: formData.phone,
//     message: formData.message
// };
// 'user_OjPcBuLBsMA0wASXXMw7Z'
  const sendEmail = (e: any) => {
    e.preventDefault();
       
    if(formData.name.trim()==="" || formData.email.trim() ==="" || formData.message.trim() ===""|| formData.phone.trim() ===""){
        alert("required all field");
      }
      else{
        emailjs.sendForm('service_vxr70ia', 'template_owjmkcc', formData, {
          publicKey: 'user_OjPcBuLBsMA0wASXXMw7Z',
        })
      .then(() => {
          console.log('SUCCESS');
      }, (error: any) => {
          console.log('FAIL...', error.text);
      });
      alert('Email sent');
      // e.target.reset();
      setFormData(InitialValue)
      }
    }
  return (
    <>
      <div>
      <Routes>
   <Route path='/' element={<Home sendEmail={sendEmail} formData={formData} setFormData={setFormData}/>}></Route>
   <Route path='/about' element={<About sendEmail={sendEmail}  formData={formData} setFormData={setFormData}/>}></Route>
   <Route path='/contact' element={<Contact sendEmail={sendEmail}  formData={formData} setFormData={setFormData}/>}></Route>
   <Route path='/privacy' element={<Privacy sendEmail={sendEmail} formData={formData} setFormData={setFormData}/>}></Route>
    </Routes>
      </div>
    </>
  )
}

export default App
