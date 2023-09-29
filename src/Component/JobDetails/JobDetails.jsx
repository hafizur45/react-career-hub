import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id}=useParams(); 
    const job = jobs.find(job => job.id === parseInt(id));
    console.log(job,id);
    const {job_description,job_responsibility,educational_requirements,experiences}=job;
    const handleApplyJob = () =>{
        saveJobApplication(parseInt(id));
        toast('you have applied success fully');
    }
    return (
        <div className="mb-5">
            <h2 className="text-center">Job Details of: {id}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 space-y-4">
                    <h2><span className="font-extrabold">Job Description: </span>{job_description}</h2>
                    <h2><span className="font-extrabold">Job Responsibility: </span>{job_responsibility}</h2>
                    <h2 className="font-extrabold">Educational Requirements:</h2>
                    <p>{educational_requirements}</p>
                    <h2 className="font-extrabold">Experiences</h2>
                    <p>{experiences}</p>

                </div>
                <div className="border">
                    <h2>JobDetails</h2>
                    <hr />
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>

                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;