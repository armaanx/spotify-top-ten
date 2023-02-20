import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-6 font-[Montserrat] gap-1 mb-3">
      <span className="text-sm">
        Made by{" "}
        <Link className="underline text-blue-500" href="/contact">
          Armaan
        </Link>
      </span>
      <span className="text-xs">
        <Link className="underline text-blue-500" href="/about">
          About
        </Link>{" "}
        |{" "}
        <Link className="underline text-blue-500" href="/privacy">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link className="underline text-blue-500" href="/contact">
          Contact
        </Link>
      </span>
    </div>
  );
}
