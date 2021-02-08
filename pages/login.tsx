import React, { useEffect, useState } from "react";
import { BaseLayout } from "../src/components/baselayout";
import TextField from "../src/components/textfield";
import { useDispatch, useSelector } from "react-redux";
import login from "../src/redux/dispatchers/auth/login";
import signedIn from "../src/redux/dispatchers/auth/signedInAlready";
import signOutAction from "../src/redux/dispatchers/auth/signout";
import Spinner from "../src/components/spinner";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { error, pending, loggedIn } = useSelector(
    (state) => state.authReducer
  );

  useEffect(() => {
    dispatch(signedIn());
  }, []);

  const handleAuth = () => {
    if (!loggedIn) dispatch(login({ username, password }));
    else dispatch(signOutAction());
  };

  return (
    <BaseLayout title="Gabriel Kaszewski - Login">
      <span className="m-12" />
      <h1 className="text-5xl font-bold">Login</h1>
      {loggedIn ? (
        <h1 className="text-5xl">You are already logged in.</h1>
      ) : (
        loginForm()
      )}
      <button
        className="p-2 w-40 rounded-xl border border-yellow-400 hover:bg-yellow-400"
        onClick={handleAuth}
      >
        {loggedIn ? "Sign out" : "Login"}
      </button>
      <Spinner open={pending} />
      {error && (
        <p className="text-red-600 text-2xl font-bold">Wrong credentials</p>
      )}
    </BaseLayout>
  );

  function loginForm() {
    return (
      <div className="flex flex-col w-1/2 md:w-1/3 gap-4 items-center">
        <div className="flex flex-col md:flex-row w-full gap-2">
          <p className="text-xl">Username</p>
          <TextField
            value={username}
            onChange={(val) => {
              setUsername(val);
            }}
          />
        </div>
        <div className="flex flex-col md:flex-row w-full gap-2">
          <p className="text-xl">Password</p>
          <TextField
            value={password}
            onChange={(val) => {
              setPassword(val);
            }}
            type="password"
          />
        </div>
      </div>
    );
  }
}
