"use client"
import Link from "next/link"


export default function Home () {
  return (
    <>
      <h1>Haloo world</h1>
      <Link href={{
        pathname: '/register',
        query: {
          type: 'fffffff'
        }
      }}>register</Link>

    <Link href="/dashboard">Dashboard</Link>
      </>
  )
}