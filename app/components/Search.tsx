"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(!search) return;
    router.push(`/search/${search}`);
    console.log(search);
  };

  return (
    <form className="flex max-w-6xl mx-auto justify-between items-center px-5">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        name="search"
        placeholder="Search movie..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent border-2 border-gray-500"
      />
      <button
      disabled={!search}
        type="submit"
        onClick={handleSearch}
        className="text-amber-500 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
