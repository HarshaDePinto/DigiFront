import { API } from "../../../config";

export const numberOfOngoingOrders = (restaurantId, abortCont) => {
  return fetch(
    `${API}/restaurant/ongoingOrdersNumber/${restaurantId}`,
    { signal: abortCont.signal },
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      if (err.name === "AbortError") {
        console.log("Fetch Aborted");
      } else {
        console.log(err);
      }
    });
};

export const ongoingOrders = (restaurantId, abortCont) => {
  return fetch(
    `${API}/restaurant/ongoingOrders/${restaurantId}`,
    { signal: abortCont.signal },
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      if (err.name === "AbortError") {
        console.log("Fetch Aborted");
      } else {
        console.log(err);
      }
    });
};

export const updateStatus = (invoiceId, invoice) => {
  return fetch(`${API}/invoice/status/${invoiceId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(invoice),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const readRestaurant = (restaurantId, abortCont) => {
  return fetch(
    `${API}/restaurant/${restaurantId}`,
    { signal: abortCont.signal },
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      if (err.name === "AbortError") {
        console.log("Fetch Aborted");
      } else {
        console.log(err);
      }
    });
};
