import axios from 'axios';

async function fetchDataFromGoogleTrends() {
    try {
        const response = await axios.get('https://api.google.com/trends');
        const data = response.data;

        // Map the data here
        const mappedData = data.map((item: any) => {
            // Perform mapping logic here
            return {
                // Map the properties you need from the item
                // Example:
                id: item.id,
                name: item.name,
                // ...
            };
        });

        return mappedData;
    } catch (error) {
        console.error('Error fetching data from Google Trends:', error);
        return [];
    }
}


