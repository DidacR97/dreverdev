import connection from "@/database/connection";
import { SkillType } from "@/types";
import Skill from "@/database/models/Skill";

export const useSkill = () => {
    const getAll = async (): Promise<SkillType[]> => {
        let experiences: SkillType[] = [];
        await connection();
        experiences = await Skill.find({});
        return experiences;
    }

    return ({
        getAll,
    })
}