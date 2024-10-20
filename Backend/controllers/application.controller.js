import { Application } from "../models/application.model";
import { Job } from "../models/jobModel";

export const applyJob = async (req, res) => {
    try {

        const userID = req.id;
        const jobId = req.params.id;

        if (!jobId) {
            return res.status(400).json({
                message: "Job id is required",
                success: false
            });
        };

        // check if user has already applied for the job 
        const existingApplication = await Application.findOne({ job: jobId, applicant: userID });

        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for the job",
                success: false
            })
        };

        const jobs = await Job.findById(jobId);

        if(!jobs){
            return res.status(400).json({
                message: "Job Not found",
                success: false
            })
        }

        const newApplication = await Application.create({
            job: jobId,
            applicant: userID
        });

        jobs.application.push(newApplication.id);
        await jobs.save();

        return res.status(200).json({
            message: "Job applied successfully",
            success: true
        })

    } catch (error) {
        console.log(error);
    }
}