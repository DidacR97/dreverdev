import { SkillType } from "@/types";
import connection from "../connection";
import Skill from "../models/Skill";

export const getAll = async (): Promise<SkillType[] | Error> => {
    await connection();
    try{
        return await Skill.find({});
    }catch(error){
        console.log(error)
        return error as Error;
    }
    
}