import React, { useState } from 'react';
import './components.css';
import { Input } from './Input.jsx';
import { Dropdown } from './Dropdown.jsx';
import { Button } from './Button.jsx';
import { FaLocationDot, FaInstagram, FaPinterest, FaFacebookF } from 'react-icons/fa6';
import { FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import TL_Logo from '../assets/Logo-TL.png';
import axios from 'axios';
import { BiWorld } from 'react-icons/bi';

const InputCard = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    service: '',
    country: '',
    message: '',
  });

  const handleInputChange = (name, value) => {
    console.log('changing', value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServiceSelect = (service) => {
    setFormData({
      ...formData,
      service: service,
    });
  };

  const handleSelectedRegion = (region) => {
    setFormData({
      ...formData,
      country: region,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3003/feedback', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const services = [
    'BRANDING SERVICE ',
    'CLOUD COMPUTING SERVICES (Amazon Web Services (AWS), Microsoft AZURE)',
    'DATABASE MIGRATION',
    'DOMAIN REGISTRATION',
    'E-COMMERCE WEBSITE',
    'EMAIL EXCHANGE',
    'GPS INTEGRATION',
    'HOSTING SERVICE',
    'OTT SHARE',
    'PAYMENT GATEWAY',
    'SEO',
    'SHAREPOINT',
    'SMS:GATEWAY',
    'SOCIAL MEDIA MANAGMENT',
  ];
  const regions = [
    'America',
    'India',
    'Canada',
    'Australia',
    'United Kingdom',
    'Japan',
    'Germany',
    'France',
    'Brazil',
    'Russia',
    'China',
    'South Africa',
    'Mexico',
    'Italy',
    'Spain',
    'Argentina',
    'Nigeria',
    'Egypt',
    'Saudi Arabia',
    'South Korea',
  ];

  return (
    <div className="card1">
      <h1 className="head">Get in touch!</h1>
      <div className="container1">
        <Input
          type={'text'}
          placeholder={'Name'}
          labels={'Name'}
          onChange={(value) => handleInputChange('username', value)}
          required={true} 
        />
        <Input
          type={'tel'}
          placeholder={'phone Number'}
          labels={'Phone Number'}
          onChange={(value) => handleInputChange('phone', value)}
          required={true} 
        />
        <Input
          type={'email'}
          placeholder={'Email Address'}
          labels={'Email Address'}
          onChange={(value) => handleInputChange('email', value)}
          required={true} 
        />
        <label className="dropdown-label">What service do you need</label>
        <Dropdown options={services} placeholder={'Select a service'} onSelect={handleServiceSelect} required={true} /> 
        <label className="dropdown-label">Select your country</label>
        <Dropdown options={regions} placeholder={'Select your country'} onSelect={handleSelectedRegion} required={true} /> 
        <Input
          type={'text'}
          h={'40px'}
          placeholder={'Tell us what we should help with you'}
          labels={'How should we help you?'}
          onChange={(value) => handleInputChange('message', value)}
          required={true} 
        />

<a href='https://wa.me/+919061432814?text=urlencodedtext' style={{textDecoration:"none"}}>
        <div
          style={{
            width: '100%',
            justifyContent: 'center',
            alignContent: 'center',
            display: 'flex',
          }}
        >
          <Button value={'Lets Chat'} onClick={handleSubmit} />
        </div>
          </a>
        <div
          style={{
            gap: '10px',
            width: '100%  ',
            justifyContent: 'center',
            alignContent: 'center',
            display: 'flex',
          }}
        >
          <a href="https://www.google.com/maps/place/TL+TECHNOLOGIES+PRIVATE+LIMITED/@8.5795247,76.8567485,16z/data=!4m6!3m5!1s0x3b05bfb13fa37fc1:0xf89d4bd32e84246f!8m2!3d8.5799619!4d76.8632868!16s%2Fg%2F11p5shtd3y?entry=ttu">
            <FaLocationDot style={{ color: 'white' }} />
          </a>
          <a href="https://www.facebook.com/tltechnologiespvtltd">
            <FaFacebookF style={{ color: 'blue' }} />
          </a>
          <a href="https://www.instagram.com/tltechnologiespvtltd/">
            <FaInstagram style={{ color: 'red' }} />
          </a>
          <a href="https://www.youtube.com/channel/UC66DHUJ0uCcSbAqhppInx5Q">
            <FaYoutube style={{ color: 'red' }} />
          </a>
          <a href="https://www.linkedin.com/company/tltechnologiespvtltd/">
            <FaLinkedinIn style={{ color: 'blue' }} />
          </a>
          <a href="https://in.pinterest.com/tltechnologiespvtltd/">
            <FaPinterest style={{ color: 'red' }} />
          </a>
          <a href="https://twitter.com/tl_technologies">
            <FaTwitter style={{ color: 'blue' }} />
          </a>
          <a href="https://tltechnologies.net/">
            <BiWorld style={{ color: 'lightblue' }} />
          </a>
        </div>
        <div
          style={{
            width: '100%  ',
            paddingBlock: '20px',
            gap: '4px',
            fontSize: '10px',
            fontFamily: 'sans-serif',
            color: 'white',
            justifyContent: 'center',
            alignContent: 'center',
            display: 'flex',
            backgroundColor: 'grey',
            padding: '10px',
            borderRadius: '10px',
          }}
        >
          <span style={{ marginRight: '100px' }}>
            to know more about our service
            <br />
            <a href="https://connect.tltechnologies.net/service.html">
              <button
                style={{
                  color: 'white',
                  backgroundColor: 'blue',
                  padding: '3px',
                  border: 'none',
                  borderRadius: '4px',
                }}
              >
                technologies
              </button>
            </a>
          </span>

          <div
            style={{
              display: 'flex',
              fontSize: '10px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            powered by
            <img src={TL_Logo} style={{ height: '28px', width: '28px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputCard;
