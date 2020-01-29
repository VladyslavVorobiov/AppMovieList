export async function fetchData(url, method, headers){
    try {
        
        const response = await fetch(url, { method, headers });

        if(!response.ok){
            throw new Error( "Error HTTP: " + response.status);
        }
        const data = await response.json();
        //console.log(data.length);
        return data;

    } catch (error) {
        throw error;
    }
}