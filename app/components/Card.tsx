import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ id, title, name, poster_path, backdrop_path,overview, release_date }: any) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${id}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${backdrop_path || poster_path}`} width={500} height={300} alt="movie pics" className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200" placeholder="blur" blurDataURL="/infinitySpinner.svg"/>
        <div className="p-2">
          <p className="line-clamp-4">{overview}</p>
          <h2 className="truncate text-lg font-bold text-amber-600">{title || name}</h2>
          <p>{release_date}</p>
        </div>
      </Link>
      {id}
    </div>
  );
}
