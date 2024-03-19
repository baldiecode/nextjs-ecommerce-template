"use client";
import { useState } from "react";
import { handleCreateUser } from "app/actions";

export const NewAccountForm = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: {
    target: any;
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await handleCreateUser(formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://www.svgrepo.com/show/301692/login.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Crear nueva cuenta
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Nombre
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  name="firstName"
                  placeholder="John Doe"
                  required
                  type="text"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Apellido
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  disabled={loading}
                  name="lastName"
                  placeholder="Smith"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="email"
                  name="email"
                  disabled={loading}
                  placeholder="user@example.com"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Número de teléfono
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="phone"
                  placeholder="1234567890"
                  disabled={loading}
                  required
                  pattern="^[0-9]*$"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Contraseña
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  disabled={loading}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Confirmar Contraseña
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  name="password_confirmation"
                  disabled={loading}
                  type="password"
                  placeholder="re-type password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <input
                  type="submit"
                  name="submit"
                  value="Crear cuenta"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-500 ease-in-out"
                  disabled={loading}
                />
              </span>
            </div>
          </form>
          {errors.length > 0 && (
            <div>
              {errors.map((error, index) => {
                return <p key={index}>{error}</p>;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
