import {Schema, model, models} from "mongoose";

const ExperienceSchema = new Schema({
    name: String,
    desc_en: String,
    desc_es: String,
    endDate: String,
    startDate: String,
    company: String,
    image: String,
    sector: String,
    skills: [{
        type: Schema.Types.ObjectId,
        ref: "Skill",
    }],
});

export default models.Experience || model("Experience", ExperienceSchema, "experience");
// const Experience = models && "Experience" in models ? models.Experience : model("Experience", ExperienceSchema, "experience");
// export default Experience;