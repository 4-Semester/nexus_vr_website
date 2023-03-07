import ExperienceCard from './ExperienceCard';

const ExperienceGrid = ({ experiences }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {experiences.map(myExperience => (
        <ExperienceCard key={myExperience.id} experience={myExperience} />
      ))}
    </div>
  );
}

export default ExperienceGrid;
