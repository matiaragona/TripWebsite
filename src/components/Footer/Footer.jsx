import React from 'react'
import './footer.css'


import {SiYourtraveldottv} from 'react-icons/si'
import {ImFacebook} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">


          <div className="footerLogo">
            <a href="a" className='logo flex'>
              <h1 className="flex">
              <SiYourtraveldottv className='icon'/>
              Mat
              </h1>
            </a>
          </div>

          <div className="socials flex">
              <ImFacebook className='icon'/>
              <BsTwitter className='icon'/>
              <BsInstagram className='icon'/>
          </div>

        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Explore</a>
          </li>

          <li>
            <a href="#">Travel</a>
          </li>

          <li>
            <a href="#">Blog</a>
          </li>

        </div>
        <div className="footerLinks">
          <span className="linkTitle">
            Helpful Links
          </span>
          <li>
            <a href="#">Destination</a>
          </li>

          <li>
            <a href="#">Support</a>
          </li>

          <li>
            <a href="#">Travel & conditions</a>
          </li>

          <li>
            <a href="#">Privacy</a>
          </li>

        </div>
        <div className="footerLinks">
          <span className="linkTitle">
            Contact Us
          </span>
          <span className="phone">+54 1132497063</span>
          <span className="email">Matiaragona@gmail.com</span>
        </div>
        
      </div>
    </div>
  )
}

export default Footer