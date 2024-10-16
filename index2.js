async function waitCall() {
    // Simulate waiting for an API call
    function fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: 'Sample data from API' });
            }, 2000); // Simulate a 2-second delay
        });
    }

    try {
        const response = await fetchData();
        console.log('Données reçues:', response.data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}

// Call the function to test it
waitCall();