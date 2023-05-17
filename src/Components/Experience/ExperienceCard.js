const ExperienceCard = ({ experience, deleteExperience }) => {


  const handleDelete = () => {
    deleteExperience(experience.id);
  };
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{experience.name}</h2>
          <p className="text-gray-700 text-base">{experience.description}</p>
          <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded"></button>
        </div>
      </div>
    );
  }
  
  export default ExperienceCard;