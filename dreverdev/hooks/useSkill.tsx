import connection from "@/database/connection";
import { SkillType } from "@/types";
import Skill from "@/database/models/Skill";

export const useSkill = () => {
    const getAll = async (): Promise<SkillType[]> => {
        let skills: SkillType[] = [];
        skills = await Skill.find({});
        return skills;
    }

    return ({
        getAll,
    })
}