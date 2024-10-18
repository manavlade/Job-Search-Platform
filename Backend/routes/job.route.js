import express from "express";

import isAuthenticated from "../middleware/isAuthenticated.js";

import { getAdminJobs, getAllJobs, getJobsById, postJob } from "../controllers/job.controllers.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);

router.route("/get/job").get(isAuthenticated, getAllJobs);

router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);

router.route("/get/:id").get(isAuthenticated, getJobsById);

export default router;
