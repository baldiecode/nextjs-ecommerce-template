"use client";
import { useState } from "react";
import { handleCreateUser } from "app/actions";

export const NewAccountForm = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    handleCreateUser(formData);
  };

  return (
    <div className="mx-auto mt-20 max-w-7xl">
      <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        New Account
      </h1>
      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="Name"
          disabled={loading}
          className="col-span-2 text-gray-700 font-light p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="last_name"
          placeholder="Lastname"
          disabled={loading}
          className="col-span-2 text-gray-700 font-light p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          disabled={loading}
          className="col-span-2 text-gray-700 font-light p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="phone"
          placeholder="phone number"
          pattern="^[0-9]*$"
          disabled={loading}
          className="col-span-2 text-gray-700 font-light p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          disabled={loading}
          className="col-span-2 text-gray-700 font-light p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="re-type password"
          disabled={loading}
          className="col-span-2 text-gray-700 font-light p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="submit"
          name="submit"
          value="Crear cuenta"
          disabled={loading}
          className="col-span-2 border border-blue-500 bg-transparent text-gray-700 font-bold uppercase p-2 rounded-lg cursor-pointer focus:outline-none"
        />
      </form>
      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => {
            return (
              <p key={index} className="text-red-500 font-light mt-2">
                {error}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};
