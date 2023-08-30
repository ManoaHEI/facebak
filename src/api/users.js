const API_BASE_URL = 'http://localhost:8081';

export const userLogin = async (log) => {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(log)
  });

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const responseBody = await response.text();
  console.log("responseBody : " + responseBody);

  try {
    const token = /*JSON.parse*/(responseBody);
    console.log("token : ", token);
    alert(token);
    return token;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    throw new Error("Failed to parse JSON response");
  }
}


/*export const getUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users` , {
    headers: {
      Authentification: 'Bearer ' + token
    }
  });
  const data = await response.json();
  return data;
};*/

export const createUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return data;
};

export const updateUser = async (userId, userData) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return data;
};

export const deleteUser = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    console.log("User deleted succefully");
    return true;
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
};
