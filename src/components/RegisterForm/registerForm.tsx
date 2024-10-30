import React from 'react';
import './registerForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const CadastroForm = () => {
  return (
      <div className='wrapper'>
        <form action="">
          <h1>REGISTER</h1>
          <div className="input-box">
            <input type="email" placeholder='Email' required/>
            <MdEmail className='icon' />
          </div>
          <div className="input-box">
            <input type="text" placeholder='Username' required/>
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required/>
            <FaLock className='icon'/>
          </div>

          <button type="submit">REGISTER</button>
        </form>

      </div>
  )
}

export default CadastroForm;