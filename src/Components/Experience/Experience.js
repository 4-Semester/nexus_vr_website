import ExperienceGrid from './ExperienceGrid';

const registeredExperiences = [
  { id: 1, name: 'VaskVR', avatar: 'https://decortips.com/da/wp-content/uploads/2020/07/mand-gulvvask.jpg', bio: 'Beskrivelse.' },
  { id: 2, name: 'VaskVR', avatar: 'https://decortips.com/da/wp-content/uploads/2020/07/mand-gulvvask.jpg', bio: 'Beskrivelse.' },
  { id: 3, name: 'VaskVR', avatar: 'https://decortips.com/da/wp-content/uploads/2020/07/mand-gulvvask.jpg', bio: 'Beskrivelse.' },
];

const Experience = () => {
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
      <ExperienceGrid experiences={registeredExperiences} />
    </div>
    </>
  );
}

export default Experience;
