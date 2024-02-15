const mongoose = require("mongoose");
const { jobsSchema } = require("./jobsmodel");
const companySchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    Website: {
      type: String,
    },
    CompanySize: {
      type: String,
    },
    BussinessAreas: {
      type: String,
    },
    Decripsion: {
      type: String,
    },
    office: {
      type: String,
    },
    JobList: [
      {
        JobId: { type: mongoose.Schema.Types.ObjectId, ref: "jobs" },
        JobName: String,
      },
    ],
  },
  { timestamps: { createdAt: "created_at", updated: "updated_at" } }
);
module.exports = mongoose.model("company", companySchema);
