import mongoose from 'mongoose';
import Experience from "@/database/models/Experience";
import Skill from "@/database/models/Skill";

let isConnected = false;

export default async () => {
    if(isConnected)return;
    try {
        if(!process.env.dreverdevURI) throw new Error("undefined db URI");
        await mongoose.connect(process.env.dreverdevURI);
        isConnected = true;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
