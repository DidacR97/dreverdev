import { ExperienceType } from "@/types";
import Experience from "@/database/models/Experience";
import connection from "@/database/connection";

export const useExperience = () => {
    const getAll = async () => {
        try {
            const response = await fetch('/api/experience/getExperiences');
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error);
        }
    }

    const update = async() => {
        
    }

    return ({
        getAll,
        update
    })
}