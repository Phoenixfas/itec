const usePost = async (url, body) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    }

    try {
        const res = await fetch(`https://dashboard.afriopia.com/api/${url}`, config);
        const json = await res.json();
        // const data = json.data;
        return json;
    } catch (error) {
        console.log(error)
    }

};

export default usePost;
