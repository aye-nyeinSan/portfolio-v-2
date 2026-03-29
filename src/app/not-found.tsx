import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-0 justify-center text-4xl text-center min-h-screen mt-52">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <div className="width:100%;height:0;padding-bottom:100%;position:relative;">
        <iframe
          src="https://giphy.com/embed/t7SoeHDfReiWOrhheD"
          width="100%"
          height="100%"
          className="position:absolute"
          frameBorder="0"
          allowFullScreen
          title="Funny GIF"
        ></iframe>
      </div>
      <Link className="cursor-pointer underline" href="/">Return Home</Link>
    </div>
  );
}
