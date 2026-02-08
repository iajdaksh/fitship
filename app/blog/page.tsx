export default function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-white">
      <h1 className="mb-10 text-4xl font-bold">Fitship Blog</h1>

      <article className="mb-12 border-b border-white/10 pb-8">
        <h2 className="text-2xl font-semibold">
          Discipline Beats Motivation
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Feb 8, 2026 · 5 min read
        </p>
        <p className="mt-4 text-gray-300">
          Motivation comes and goes. Discipline is what builds bodies,
          businesses, and strong minds. Learn how to train discipline daily.
        </p>
        <a
          href="/blog/discipline-beats-motivation"
          className="mt-4 inline-block text-sm font-semibold text-white underline"
        >
          Read more →
        </a>
      </article>

      <article className="mb-12 border-b border-white/10 pb-8">
        <h2 className="text-2xl font-semibold">
          Fitness Is a Lifestyle, Not a Phase
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Feb 6, 2026 · 4 min read
        </p>
        <p className="mt-4 text-gray-300">
          True fitness is built into your daily habits. Let’s break the myth
          of short-term transformation.
        </p>
        <a
          href="#"
          className="mt-4 inline-block text-sm font-semibold text-white underline"
        >
          Read more →
        </a>
      </article>
    </main>
  );
}
