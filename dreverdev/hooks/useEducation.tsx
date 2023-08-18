import { ExperienceType } from "@/types";
import Experience from "@/database/models/Experience";
import connection from "@/database/connection";

export const useEducation = () => {
    const getAll = async () => {
        try {
            const response = await fetch('/api/education/getEducations');
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