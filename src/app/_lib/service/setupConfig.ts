import fs from 'fs';
import path from 'path';
import { fileExist, fileNotFound } from '../helpers/constant';
import { testDbConnection } from '../config/dbConnect';

/**
 * Class representing setup configuration.
 * 
 */
class SetupConfig {
    /** The path to the setup file. */
    private setupFilePath: string;

    /**
     * Creates an instance of SetupConfig.
     */
    constructor() {
        this.setupFilePath = path.join(process.cwd(), 'src', 'app', '_lib', 'setup.json');
    }

    /**
     * Creates or updates the setup file.
     * @param {any} payload - The data to write to the setup file.
     * @returns {string|null} - 'Success' if file creation or update is successful, otherwise null.
     */
    createOrUpdateFile = (payload: any): string | null => {
        if (!fs.existsSync(this.setupFilePath)) {
            // If the file doesn't exist, create it and write data
            fs.writeFileSync(this.setupFilePath, JSON.stringify(payload, null, 2));
            return 'File created successfully';
        } else {
            // If the file exists, read its content
            let existingData = JSON.parse(fs.readFileSync(this.setupFilePath, 'utf-8') || '{}')
            const newData = { ...existingData, ...payload }

            fs.writeFileSync(this.setupFilePath, JSON.stringify(newData, null, 2));
            return 'File updated successfully';
        }
    }

    /**
 * Checks if the setup file exists and reads its content.
 * @returns {Object} - An object containing the file data and an optional stage value.
 *                     - If the file exists, returns { data: "FILE_NOT_FOUND", stage: stageValue }.
 *                     - If the file does not exist, returns { data: "FILE_FOUND" }.
 */

    fileExist = (): { data: string, stage?: string } => {
        const exists = fs.existsSync(this.setupFilePath);
        if (!exists) return { data: fileNotFound }

        let data = JSON.parse(fs.readFileSync(this.setupFilePath, 'utf-8') || '{}') as { stage: string }
        return { data: fileExist, stage: data.stage }
    }


    dbConnection = async (payload: { connection: string }): Promise<string | null> => {
        try {
            const conn = await testDbConnection(payload.connection)
            if (conn) {
                return 'success'
            }
            return null
        } catch (error) {
            return null
        }
    }
}

export default SetupConfig;
