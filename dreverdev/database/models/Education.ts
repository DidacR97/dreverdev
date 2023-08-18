import {Schema, model, models} from "mongoose";

const EducationSchema = new Schema({
    name: String,
    desc_en: String,
    desc_es: String,
    endDate: Number,
    startDate: Number,
    place: String,
    image: String,
    skills: [{
        type: Schema.Types.ObjectId,
        ref: "Skill",
    }],
});

export default models.Education || model("Education", EducationSchema, "education");
