"use client"
import { handleLogin } from "app/actions";

export const LoginForm = () => {
  const handleSubmit = async (event) => {
    const formData = new FormData(event.target);
    event.preventDefault();
    await handleLogin(formData);
  };

  return (
    <div className="mx-auto mt-20 max-w-7xl">
      <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        Login
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
        <input
          type="text"
          name="email"
          placeholder="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          className="text-gray-700 font-light p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="text-gray-700 font-light p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="submit"
          name="submit"
          value="Login"
          className="border border-blue-500 bg-transparent text-gray-700 font-bold uppercase p-2 rounded-lg cursor-pointer focus:outline-none"
        />
      </form>
    </div>
  );
};
