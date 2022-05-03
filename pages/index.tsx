import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getAllBlogs } from './api/api'
import SanityData from './components/first'

const Home: NextPage = ({ blogs }: any) => {
  return (
    <>

      <SanityData dgks={blogs} ></SanityData>

    </>
  )
}

export default Home
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  }
}
