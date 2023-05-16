const ExperienceCard = ({ experience }) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{experience.name}</h2>
          <p className="text-gray-700 text-base">{experience.description}</p>
        </div>
      </div>
    );
  }
  
  export default ExperienceCard;