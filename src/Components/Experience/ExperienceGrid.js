import ExperienceCard from './ExperienceCard';
import ExperienceModal from './ExperienceModal';

const ExperienceGrid = ({ experiences, fetchExperiences, deleteExperience}) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {experiences.map(myExperience => (
        <ExperienceCard key={myExperience.id} experience={myExperience} deleteExperience={deleteExperience} />
      ))}
      <label htmlFor="experience-modal" className="bg-white rounded-lg overflow-hidden shadow-md h-20 text-base flex justify-center items-center font-black text-5xl cursor-pointer">
        +
      </label>
      <ExperienceModal fetchExperiences={fetchExperiences} />
    </div>
  );
}

export default ExperienceGrid;
