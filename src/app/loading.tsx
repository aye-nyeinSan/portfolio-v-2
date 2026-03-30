export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center text-4xl text-center min-h-screen">
      <h1>Loading...</h1>
      <div className="relative w-full pb-[73%]">
        <iframe
          src="https://giphy.com/embed/3y0oCOkdKKRi0"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allowFullScreen
          title="Loading animation"
        />
      </div>
    </div>
  );
}
