export default function Landing() {
  return (
    <main className="flex h-screen items-center justify-center bg-white">
      <div className="flex items-center gap-2">
        <div className="blob"></div>
        <h1 className="relative text-3xl font-light text-black">
          Human(Labs)
          <p
            className="absolute bottom-2.5 -right-2 text-black font-extralight"
            style={{ fontSize: "14px" }}
          >
            ®
          </p>
        </h1>
      </div>
    </main>
  );
}
