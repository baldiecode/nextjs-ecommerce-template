"use client";
import { useState } from "react";
import { handleCreateUser } from "app/actions";

export const NewAccountForm = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await handleCreateUser(formData);
  };

  return (
    <div className="mx-auto mt-20 max-w-7xl">
      <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        New Account
      </h1>
      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="Name" disabled={loading} />
        <input type="text" name="lastName" placeholder="Lastname" disabled={loading} />
        <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" disabled={loading} />
        <input type="text" name="phone" placeholder="phone number" pattern="^[0-9]*$" disabled={loading} />
        <input type="password" name="password" placeholder="password" disabled={loading} />
        <input type="password" name="password_confirmation" placeholder="re-type password" disabled={loading} />
        <input type="submit" name="submit" value="Crear cuenta" disabled={loading} />
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
