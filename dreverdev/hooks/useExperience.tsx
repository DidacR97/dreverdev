import { Experience } from "@/types";

export const useExperience = () => {
    const getAll = (): Experience[] => {
        let experiences: Experience[] = [];
        return experiences;
    }

    return ({
        getAll,
    })
}