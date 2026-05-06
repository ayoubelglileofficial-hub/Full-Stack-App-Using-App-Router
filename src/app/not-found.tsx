import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white transition-colors">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Page not found
      </p>

      <Link
        href="/"
        className="mt-6 px-5 py-2 border border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
      >
        Go Home
      </Link>
    </div>
  );
}