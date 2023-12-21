// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Link from "next/link";
import { useRouter } from "next/router";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { push } = useRouter();
  return (
    <>
      <h1>Hello world</h1>
      <ul>
        <li><Link href={"/blog/f/efe"}>Blog</Link></li>
        <li onClick={()=>{ push("/blog/f/efe") }}>Blog2</li>
      </ul>
    </>
  )
}
