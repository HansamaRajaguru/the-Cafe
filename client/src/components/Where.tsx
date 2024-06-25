import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import axios from 'axios';
import './Where.css';
import mapImage from '../images/map.jpg'; 

const Where: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    people: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/reserve', {
            ...formData,
            people: parseInt(formData.people, 10) // Ensure people is a number
        });
        alert(response.data.message);
    } catch (error) {
        alert('Error making reservation');
        console.error(error);
    }
};


  return (
    <div className={`where ${theme}`}>
      <h1>WHERE TO FIND US</h1>
      <br />
      <br />
      <h3>Find us at some address at some place.</h3>
      <br />
      <div>
        <img src={mapImage} alt="Map Location" className="location-image" />
      </div>
      <br />
      <h3><span className='bold'>FYI! </span>We offer full-service catering for any event, large or small.</h3>
      <br/>
      <h3>We understand your needs and we will cater the food to satisfy the biggest criteria of them all, both look and taste.</h3>
      <br />
      <h3><span className='bold'>Reserve</span> a table, ask for today's special or just send us a message:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          How many people:
          <input type="number" name="people" value={formData.people} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>
        <label>
          Message / Special Requirements:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Where;
