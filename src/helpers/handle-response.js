import { userService } from "../services";


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                userService.logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            console.log("respuesta",error)
            return Promise.reject(error);
        }

        return data;
    });
}
export { handleResponse };