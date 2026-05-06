import Link from "next/link";

const Button = ({ name, url }) => {
  return (
    <Link href={url}>
      <button
        type="button"
        className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white bg-blue-600 transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-800"
      >
        {name}
      </button>
    </Link>
  );
};

export default Button;