import Results from "@/app/components/Results";
import React from "react";

export default async function SearchPage({
  params,
}: {
  params: { searchTerm: string };
}) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US`
  );
  if (!res.ok) {
    throw new Error("Error fetching Data");
  }
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && <h1>No result found</h1>}

      {results && <Results results={results} />}
    </div>
  );
}
