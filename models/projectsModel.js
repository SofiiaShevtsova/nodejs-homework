const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: Boolean,
    required: true,
  },
  enTitle: { type: String, required: true },
  enDescription: { type: String, required: true },
  poster: { type: String, required: true },
  detailDesc: {
    start: { type: String },
    enStart: { type: String },
    text: [{ type: String }],
    enText: [{ type: String }],
    image: [{ type: String }],
  },
  mission: {
    image: { type: String },
    title: { type: String },
    enTitle: { type: String },
    list: [{ type: String }],
    enList: [{ type: String }],
  },
  projectProgram: {
    title: { type: String },
    enTitle: { type: String },
    list: [{ type: String }],
    enList: [{ type: String }],
  },
  support: {
    text: { type: String },
    enText: { type: String },
    logo: { type: String },
  },
  videos: [{ type: String, default: null }],
  photos: [{ type: String, default: null }],
  location: {
    title: { type: String },
    enTitle: { type: String },
    text: { type: String },
    enText: { type: String },
    link: { type: String },
  },
  partners: [{ name: { type: String }, logo: { type: String } }],
});

const Projects = mongoose.model("Projects", projectsSchema);

module.exports = Projects;
