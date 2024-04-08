import mongoose from "mongoose";


export const testDbConnection = async (connectionString: string) => {
    try {
        const conn = await mongoose.createConnection(connectionString).asPromise();
        return conn;
    } catch (error) {
        return null;
    }
}
