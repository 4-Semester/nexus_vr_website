
import axios from "axios";
const ExperienceCard = ({ experience, removeExperience }) => {
  const handleDelete = () => {
      axios.delete(`https://api.nexusvr.tech/experiences/${experience.id}`, {
          headers: {
              "Authorization": localStorage.getItem("token"),
          }
      }).then((res) => {
          console.log(res);
          removeExperience(experience.id);
      }).catch((err) => {
          console.log(err);
      });
  };
  return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{experience.name}</h2>
              <p className="text-gray-700 text-base">{experience.description}</p>
              <button onClick={handleDelete} className="bg-blue 700">Slet</button>
          </div>
      </div>
  );
}

export default ExperienceCard;
