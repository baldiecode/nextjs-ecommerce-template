import Link from "next/link";

export const Button = () => {
  return (
    <Link
      href="/store"
      className="inline-block px-10 py-4 text-xl font-semibold text-start text-white transition duration-300 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 ease-in-out whitespace-nowrap"
    >
      Comprar Ahora
    </Link>
  );
};
