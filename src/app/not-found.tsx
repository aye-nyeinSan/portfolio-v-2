import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-4xl text-center min-h-screen">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <div className="relative w-50 h-50 ">
        <iframe
          src="https://giphy.com/embed/t7SoeHDfReiWOrhheD"
          className="absolute  w-50 h-50"
          frameBorder="0"
          allowFullScreen
          title="Funny GIF"
        />
      </div>
      <Link className="cursor-pointer underline mt-4" href="/">Return Home</Link>
    </div>
  );
}
