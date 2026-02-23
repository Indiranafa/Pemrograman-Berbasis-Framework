import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p><strong>Nama Mahasiswa:</strong> Indira Nafa Aurah Huda</p>
      <p><strong>NIM:</strong> 2341720001</p>
      <p><strong>Program Studi:</strong> D4 Pengembangan Web</p>
    </div>
  )
}
