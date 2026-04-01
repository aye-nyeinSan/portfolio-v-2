export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl max-sm:text-2xl text-center">Loading...</h1>
      <div className="relative w-full max-w-[480px] max-sm:max-w-[280px] pb-[73%] max-sm:pb-[60%] mt-4">
        <iframe
          src="https://giphy.com/embed/uEb7Wps1mWe5ffEkQv"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allowFullScreen
          title="Loading animation"
        />
      </div>
    </div>
  );
}
