import { ProjectType } from "@/types";
import connection from "../connection";
import Project from "../models/Project";

export const getAll = async (): Promise<ProjectType[] | Error> => {
    await connection();
    try {
        return await Project.find({ priority: { $gt: 0 }})
            .sort('priority');
    } catch (error) {
        console.log(error)
        return error as Error;
    }

}