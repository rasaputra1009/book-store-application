const API_BASE_URL = 'http://localhost:8081'; // Replace with your actual API base URL

export const apiRequest = async <T>(method: string, url: string, data?: any): Promise<T> => {
    try {
        const headers = {
            'Content-Type': 'application/json', // Set the content type to JSON
            "Access-Control-Allow-Origin": '*'
        };

        const options: RequestInit = {
            method,
            headers,
            body: data ? JSON.stringify(data) : undefined, // Stringify the data payload if provided
        };

        const response = await fetch(`${API_BASE_URL}${url}`, options);

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const responseData: T = await response.json();

        return responseData;
    } catch (error) {
        throw new Error(`API request error: ${error.message}`);
    }
};


// GET request example
export const get = async <T>(url: string): Promise<T> => {
    return await apiRequest<T>('GET', url);
};

// POST request example
export const post = async <T>(url: string, data: any): Promise<T> => {
    return await apiRequest<T>('POST', url, data);
};

// PUT request example
export const put = async <T>(url: string, data: any): Promise<T> => {
    return await apiRequest<T>('PUT', url, data);
};

// DELETE request example
export const del = async <T>(url: string): Promise<T> => {
    return await apiRequest<T>('DELETE', url);
};
