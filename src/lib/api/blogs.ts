import axios from 'axios';

export const fetchBlogModalCode = async (): Promise<string> => {
    try {
        const response = await axios.get('119ba3c8ba4148b4af61072e6ecfaf1d');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch blogModal code');
    }
};
