"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

type NavItem = {
  title: string,
  param: string
}

export default function NavbarItem({title, param}: NavItem) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link className={`m-4 hover:text-amber-600 ${genre && genre === param && "underline underline-offset-8 decoration-4 decoration-amber-500" }`} href={`/?genre=${param}`}>
        {title}
      </Link>
    </div>
  )
}
