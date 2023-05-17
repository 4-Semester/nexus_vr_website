import React, { useState, useEffect } from 'react';
import ExperienceGrid from './ExperienceGrid';
import axios from 'axios';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);


  const deleteExperience = async (id) => {
    try {
      await axios.delete(`https://api.nexusvr.tech/experiences/${id}`, {
        headers: { Authorization: localStorage.getItem('token') },
      });
      fetchExperiences(); 
    } catch (error) {
      console.error('Error deleting experience:', error);
    }
  };

  const fetchExperiences = async () => {
    try {
      const response = await axios.get('https://api.nexusvr.tech/experiences', {headers: {Authorization: localStorage.getItem('token')}});
      setExperiences(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1>Oplevelser</h1>
        </div>
        <div className="flex">
          <input type="text" placeholder="Search" className="border p-2 mr-2" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Søg
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10">
      <ExperienceGrid experiences={experiences} fetchExperiences={fetchExperiences} deleteExperience={deleteExperience} />
      </div>
    </>
  );
}

export default Experience;