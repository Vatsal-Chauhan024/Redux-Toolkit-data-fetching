import React, { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { fetchTodo } from '../store/slices/UserSlice'


const Todo = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.user);

    useEffect(() => {
      dispatch(fetchTodo())
    }, [])       

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      
      {data.loading ? <>
      <h1>Loading....</h1>
      </>: data.user?.map((element) => (
        <h2 key={element.id} className='text-lg text-indigo-600 my-2  tracking-wide '>{element.title}</h2>
      ))}

    </div>
  )
}

export default Todo
