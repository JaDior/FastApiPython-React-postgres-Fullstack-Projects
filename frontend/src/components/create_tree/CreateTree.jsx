export default async function createTree(token, formData, setApiError) {
    const requestOptions = {
        method: 'POST',
        headers: {
            Authorization: "Bearer " + token,
        },
        body: formData
    };

    await fetch('user/trees/', requestOptions)
        .then(async response => {
            if (!response.ok) {
                // get error message from body or default to response status
                const error = response.status;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            setApiError(`Error: ${error}`);
        });
}