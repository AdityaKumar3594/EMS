import React, { useState } from "react";


const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Two-way Binding
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <label className="outline-none bg-transparent border-2 text-emerald-600 font-medium text-lg py-2 px-6 placeholder:text-gray-400 mb-10">EMS</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your email"
            className=" text-white outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter password"
            className="text-white outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400"
          />

          <button
            type="submit"
            className="mt-7 text-white hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;