import { ExperienceType } from "@/types";
import connection from "../connection";
import Experience from "../models/Experience";
import mongoose from "mongoose";
import Skill from "../models/Skill";

export const getAll = async (): Promise<ExperienceType[] | Error> => {
    await connection();
    if(!mongoose.models.Skill)mongoose.models.Skill = Skill;
    try {
        const experiences: ExperienceType[] | Omit<any, never>[] = await Experience.find({})
            .sort('-endDate')
            .populate({ path: 'skills' })
        return experiences as ExperienceType[];
    } catch (error) {
        console.log(error)
        return error as Error;
    }
}

export const update = async (id: string, params: object): Promise<ExperienceType | null | Error> => {
    await connection();
    try {
        const experience: ExperienceType | null = await Experience.findOneAndUpdate({ _id: id }, params, { new: true });
        return experience;
    } catch (error) {
        return error as Error;
    }
}