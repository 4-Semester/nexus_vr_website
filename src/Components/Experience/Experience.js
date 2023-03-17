import React, { useState, useEffect } from 'react';
import ExperienceGrid from './ExperienceGrid';
import axios from 'axios';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get('https://api.example.com/users');
        setExperiences(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

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
        <ExperienceGrid experiences={experiences} />
      </div>
    </>
  );
}

export default Experience;