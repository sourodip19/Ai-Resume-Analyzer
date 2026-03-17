import React from "react";
import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { signUp, login, logout, getMe } from "../services/auth.api.js";
export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    try {
      const data = await login({ email, password });
      setUser(data.user);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const handleSignUp = async ({ email, password, username }) => {
    setLoading(true);
    try {
      const data = await signUp({ email, password, username });
      setUser(data.user);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const handleLogOut = async () => {
    setLoading(true);
    try {
      const data = await logout();
      setUser(null);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const handleGetMe = async () => {
    setLoading(true);
    const data = await getMe();
    setUser(data.user);
    setLoading(false);
  };
  return { user, loading, handleSignUp, handleLogin, handleLogOut };
};
