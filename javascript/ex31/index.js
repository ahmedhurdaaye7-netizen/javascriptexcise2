async function postData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'asyc',
                body: 'sub',
                userId: 60
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("posted:", data);
    } catch (error) {
        console.error("Error posting data:", error);
    }
}

postData();