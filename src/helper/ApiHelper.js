const API = 'http://localhost:5000/api/v1/users'
export const signup = (user) => {
    return fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "multipart/form-data",
      },
      body: user,
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };
  
  export const signin = (user) => {
    return fetch(`${API}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((user) => {
        return user.json();
      })
      .catch((err) => console.log(err));
  };

  export const getAllRooms = () => {
    return fetch(`${API}/getallrooms`, {
      method: "GET",
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  export const getAllTenant = () => {
    return fetch(`${API}/getalltenant`, {
      method: "GET",
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  export const searchRoom = (param) => {
    return fetch(`${API}/searchrooms/?location=${param}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };


  export const getRoomById = (productId) => {
    console.log(productId);
    return fetch(`${API}/hello/${productId}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  export const getTenantById = (productId) => {
    console.log(productId);
    return fetch(`${API}/gettenantbyid/${productId}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  export const updateOwner = (user) => {
    return fetch(`${API}/update`, {
      method: "PUT",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "multipart/form-data",
      },
      body: user,
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };