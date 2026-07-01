// app/tmdb-test/page.js
import Link from "next/link";
import { fetchPopularMovies } from "@/lib/tmdb";

export const metadata = { title: "人気映画一覧" };

export default async function MoviesPage() {
  const movies = await fetchPopularMovies();

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">人気映画一覧</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((m) => (
          <Link
            key={m.id}
            // 文字列の組み立てによるズレを防ぐため、確実な書き方に修正しました
            href={`/tmdb-test/${m.id}`}
            className="border rounded-lg p-2 shadow hover:shadow-lg transition block"
          >
            <img
              src={
                m.poster_path
                  ? `https://image.tmdb.org/t/p/w200${m.poster_path}`
                  : "/placeholder.png"
              }
              alt={m.title}
              className="rounded mb-2 w-full h-auto"
            />
            <h2 className="text-sm font-semibold truncate">{m.title}</h2>
            <p className="text-xs text-gray-600">{m.release_date}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}