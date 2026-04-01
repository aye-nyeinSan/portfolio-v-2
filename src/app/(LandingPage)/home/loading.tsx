export default function HomePageLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-[480px] max-sm:max-w-[280px]">
        <div
          style={{
            width: "100%",
            height: 0,
            paddingBottom: "84%",
            position: "relative",
          }}
        >
          <iframe
            src="https://giphy.com/embed/uEb7Wps1mWe5ffEkQv"
            width="100%"
            height="100%"
            style={{ position: "absolute" }}
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="Loading animation"
          />
        </div>
      </div>
      <h1 className="text-4xl max-sm:text-2xl text-center mt-6">Loading...</h1>
    </div>
  );
}