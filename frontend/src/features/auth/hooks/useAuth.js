import axios from "axios";
const api = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
});

export async function signUp(username, email, password) {
  try {
    const response = await api.post("api/user/auth/signup", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function login(email, password) {
  try {
    const response = await api.post("api/user/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function logout() {
  try {
    const response = await api.post("api/user/auth/logout");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMe() {
  try {
    const response = await api.get("api/user/auth/getMe");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
