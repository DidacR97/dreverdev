import {Schema, model, models} from "mongoose";

const SkillSchema = new Schema({
    name: String,
    desc_en: String,
    desc_es: String,
    link: String,
    image: String,
    type: String,
});

export default models.Skill || model("Skill", SkillSchema, "skills");