import mongoose, { get } from 'mongoose';
import getConfig from 'next/config';

export default async () => {
    try {
        await mongoose.connect('mongodb+srv://didacr97:ZpQT6hdu6MHiy8ik@loredb.jj0tv5e.mongodb.net/dreverdev');
    } catch (error) {
        console.log(error);
        throw new Error("Error connecting to database");
    }
};