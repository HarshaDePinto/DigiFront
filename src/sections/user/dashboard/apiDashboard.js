import { API } from "../../../config";

export const numberOfD = (userId) => {
    return fetch(`${API}/ongoing/number/client/${userId}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  export const ongoingOrdersD = (userId) => {
    return fetch(`${API}/ongoing/client/${userId}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  export const isSubmit = (userId) => {
    return fetch(`${API}/ongoing/submit/${userId}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };