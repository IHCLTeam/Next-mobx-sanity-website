import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Frist from '../components/first'
import styles from '../styles/Home.module.css'
import { getAllBlogs } from './api/api'

const Home: NextPage = ({blogs}:any) => {
  return (
   <div>
       <Frist dgks={blogs}></Frist>
    </div>
  )
}

export default Home
export async function getStaticProps(){
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  }
}
