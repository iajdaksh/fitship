export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
          Fitship
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Premium fitness, lifestyle & mindset platform.
          Build your body. Sharpen your mind. Live elite.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-white px-8 py-3 font-semibold text-black hover:bg-gray-200">
            Start Your Journey
          </button>

          <button className="rounded-full border border-white px-8 py-3 font-semibold hover:bg-white hover:text-black">
            Explore Content
          </button>
        </div>
      </section>
    </main>
  );
}
