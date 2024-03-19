"use client";
import { handleLogin } from "app/actions";
import Link from "next/link";

export const LoginForm = () => {
  
  const handleSubmit = async (event: {
    target: any;
    preventDefault: () => void;
  
  }) => {
    const formData = new FormData(event.target);
    event.preventDefault();
    await handleLogin(formData);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://www.svgrepo.com/show/301692/login.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Inicia sesión en tu cuenta
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit}>
            <div>
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
                  placeholder="user@example.com"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
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
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-500 ease-in-out"
                  value="Login"
                />
              </span>
            </div>
            <div className="mt-6">
            <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Aún no tienes cuenta?
              </label>
              <span className="block w-full rounded-md shadow-sm">
                <Link href="/signup">
                  <input
                    type="submit"
                    value="Register"
                    className="w-full flex mt-1 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blak bg-white border-black hover:bg-gray-100 ease-in-out"
                  />
                
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
