const ExperienceCard = ({ experience }) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img className="w-full" src={experience.avatar} alt={experience.name} />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{experience.name}</h2>
          <p className="text-gray-700 text-base">{experience.bio}</p>
        </div>
      </div>
    );
  }
  
  export default ExperienceCard;