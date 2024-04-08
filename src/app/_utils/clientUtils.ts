import localFont from "next/font/local";

export const jura = localFont({ src: '../../fonts/Jura-Regular.ttf' })

class ResponseError extends Error {
    constructor(message: string, public response: Response) {
        super(message);
    }
}

export const makeRequest = async <T>(path: string, method?: string, data?: unknown): Promise<T> => {
    try {
        const options: RequestInit = {}
        if (method) {
            options.method = method
            options.body = JSON.stringify(data) as BodyInit
        }
        const response = await fetch(`/api/${path}`, options);
        if (!response.ok) {
            throw new ResponseError('Bad fetch response', response);
        }
        return await response.json() as T;
    } catch (error) {
        if (error instanceof ResponseError) {
            console.error(`Error fetching data: ${error.response.statusText}`, error);
        } else {
            console.error('Network error:', error);
        }
        throw error; // Rethrow the error to be handled by the caller
    }
};
