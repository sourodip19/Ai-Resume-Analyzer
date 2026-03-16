import React from "react";
import { useContext } from "react";
import { AuthContext } from "../auth.context.js";
import { signUp, login, logout, getMe } from "../services/auth.api.js";
import { set } from "mongoose";
export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    const data = await login({ email, password });
    setUser(data.user);
    setLoading(false);
  };
  const handleSignUp = async ({ email, password, username }) => {
    setLoading(true);
    const data = await signUp({ email, password, username });
    setUser(data.user);
    setLoading(false);
  };
  const handleLogOut = async () => {
    setLoading(true);
    const data = await logout();
    setUser(null);
    setLoading(false);
  };
  const handleGetMe = async () => {
    setLoading(true);
    const data = await getMe();
    setUser(data.user);
    setLoading(false);
  };
  return { user, loading, handleSignUp, handleLogin, handleLogOut };
};
