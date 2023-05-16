import {useState} from "react";
import axios from "axios";
const ExperienceModal = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        url: ""
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log(formData);
        axios.post("https://api.nexusvr.tech/experiences", formData, {
            headers: {
                "Authorization": localStorage.getItem("token"),
            }
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <>
            <input id="experience-modal" type="checkbox" className="modal-toggle"/>
            <label htmlFor="experience-modal" className="modal modal-bottom sm:modal-middle cursor-pointer">
                <label htmlFor="" className="modal-box relative">
                    <h3 className="text-lg font-bold">Lav en ny oplevelse</h3>
                    <div className="flex flex-col">
                        <label htmlFor="experience-name" className="text-sm font-bold">Navn</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} id="experience-name" className="border-2 border-gray-300 rounded-md p-2 mb-2" placeholder="Navn"/>
                        <label htmlFor="experience-description" className="text-sm font-bold">Beskrivelse</label>
                        <textarea id="experience-description" name="description" value={formData.description} onChange={handleChange} className="border-2 border-gray-300 rounded-md p-2 mb-2" placeholder="Beskrivelse"/>
                        <label htmlFor="experience-url" className="text-sm font-bold">URL</label>
                        <input type="text" id="experience-url" value={formData.url} onChange={handleChange} name="url" className="border-2 border-gray-300 rounded-md p-2 mb-2" placeholder="URL"/>
                        <button className="btn btn-outline btn-success" onClick={() => handleSubmit()}>Opret</button>
                    </div>
                </label>
            </label>
        </>
    )
}

export default ExperienceModal;