import { Application } from "../models/application.model.js";
import { Job } from "../models/jobModel.js";


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

        if (!jobs) {
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

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;

        // Fetch applications and populate the job and company fields
        const applications = await Application.find({ applicant: userId })
            .sort({ createdAt: -1 })
            .populate({
                path: 'job',  // Use 'job' instead of 'Job'
                options: { sort: { createdAt: -1 } },
                populate: {
                    path: 'company',  // Use 'company' instead of 'Company'
                    options: { sort: { createdAt: -1 } },
                }
            });

        if (!applications || applications.length === 0) {
            return res.status(400).json({
                message: "No Applications Found",
                success: false
            });
        }

        return res.status(200).json({
            applications,
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};


//Admin checks number of applicants

export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: 'applications',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'applicant'
            }
        });
        if (!job) {
            return res.status(404).json({
                message: 'Job not found.',
                success: false
            })
        };
        return res.status(200).json({
            job,
            succees: true
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;
        if (!status) {
            return res.status(400).json({
                message: 'status is required',
                success: false
            })
        };

        // find the application by applicantion id
        const application = await Application.findOne({ _id: applicationId });
        if (!application) {
            return res.status(404).json({
                message: "Application not found.",
                success: false
            })
        };

        // update the status
        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message: "Status updated successfully.",
            success: true
        });

    } catch (error) {
        console.log(error);
    }
}