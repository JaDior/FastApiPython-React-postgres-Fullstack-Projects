export default async function GetAllPublicTrees(token, setTrees, setApiError) {
    const requestOptions = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    };
    await fetch('users/trees/public', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            setTrees(data);
        })
        .catch(error => {
            if (error === 401) {
                setApiError(`Error ${error}: You Are Unauthorized, please login to gain access to public trees`);
            } else if (error === 500) {
                setApiError(`Error ${error}: The Server Is Down`);
            }
        });
}