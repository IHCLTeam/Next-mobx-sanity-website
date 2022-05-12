import { Box, Typography } from '@mui/material'
import { observe } from 'mobx'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getAllBlogs } from './api/api'
import SanityData from './components/first'
import TodoStore from './store/ToDoList'
import TodoInput from './Todo/TodoInput'
import TodoList from './Todo/TodoList'


const todos = new TodoStore();

const Home: NextPage = ({ blogs }: any) => {
  return (
    <>
    
      <TodoInput todos={todos} />
      <Box sx={{ flexGrow: 1  ,margin:'auto ' }}>
       
        <TodoList todos={todos} />
      
      </Box>

      <SanityData dgks={blogs} ></SanityData>

    </>
  )
}

export default Home
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: { blogs }
  }
}

