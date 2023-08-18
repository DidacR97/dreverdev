import { EducationType } from "@/types";
import connection from "../connection";
import Education from "../models/Education";
import mongoose from "mongoose";
import Skill from "../models/Skill";

export const getAll = async (): Promise<EducationType[] | Error> => {
    await connection();
    if(!mongoose.models.Skill)mongoose.models.Skill = Skill;
    try {
        const educations: EducationType[] | Omit<any, never>[] = await Education.find({})
            .sort('-endDate')
            .populate({ path: 'skills' })
        return educations as EducationType[];
    } catch (error) {
        console.log(error)
        return error as Error;
    }
}

export const update = async (id: string, params: object): Promise<EducationType | null | Error> => {
    await connection();
    try {
        const experience: EducationType | null = await Education.findOneAndUpdate({ _id: id }, params, { new: true });
        return experience;
    } catch (error) {
        return error as Error;
    }
}