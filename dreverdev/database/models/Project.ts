import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
    _id: String,
    name: String,
    desc: String,
    link: String,
    image: String,
    priority: Number,
});

export default models.Project || model("Project", ProjectSchema, "projects");