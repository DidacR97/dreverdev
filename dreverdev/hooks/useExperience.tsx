import { ExperienceType, SkillType } from "@/types";
import Experience from "@/database/models/Experience";
import connection from "@/database/connection";
import Skill from "@/database/models/Skill";

export const useExperience = () => {
    const getAll = async (): Promise<ExperienceType[] | Error> => {
        await connection();
        try {
            let skills: SkillType[] = await Skill.find({});
            const experiences: ExperienceType[] | Omit<any, never>[] = await Experience.find({})
                .populate({ path: 'skills'})
                .exec();
            return experiences as ExperienceType[];
        } catch (error) {
            console.log(error)
            return error as Error;
        }

    }

    const update = async (id: string, params: object): Promise<ExperienceType | null | Error> => {
        await connection();
        try {
            const experience: ExperienceType | null = await Experience.findOneAndUpdate({ _id: id }, params, { new: true });
            return experience;
        } catch (error) {
            return error as Error;
        }
    }

    return ({
        getAll,
        update
    })
}