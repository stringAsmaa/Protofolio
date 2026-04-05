import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/slices/counterSlice'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Box, Typography, Button } from '@mui/material'
import { VictoryPie } from 'victory'
import Lottie from 'lottie-react'
import animationData from '../assets/lottie-sample.json'
import { FaReact } from 'react-icons/fa'

export default function Home(){
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  // example axios call (placeholder)
  const fetchExample = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      alert('Fetched: ' + JSON.stringify(res.data))
    } catch(e){
      console.error(e)
      alert('Axios request failed (CORS may block in local file).')
    }
  }

  // cookies example
  const saveCookie = () => {
    Cookies.set('my-demo-cookie', 'hello', { expires: 1 })
    alert('Cookie set: ' + Cookies.get('my-demo-cookie'))
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Home</Typography>
      <Typography>Redux counter: {count}</Typography>
      <Button variant="contained" sx={{ mr:1 }} onClick={() => dispatch(increment())}>Increment</Button>
      <Button variant="outlined" sx={{ mr:1 }} onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button sx={{ mr:1 }} onClick={fetchExample}>Axios GET</Button>
      <Button sx={{ mr:1 }} onClick={saveCookie}>Set Cookie</Button>
      <Box sx={{ mt:3, maxWidth: 400 }}>
        <Typography variant="h6">Victory Pie (sample)</Typography>
        <VictoryPie data={[{ x: 'A', y: 35 }, { x: 'B', y: 40 }, { x: 'C', y: 25 }]} />
      </Box>
      <Box sx={{ mt:3, width: 200 }}>
        <Typography variant="h6">Lottie (sample)</Typography>
        <Lottie animationData={animationData} loop={true} />
      </Box>
      <Box sx={{ mt:3 }}>
        <Typography>React icon sample: <FaReact size={24} /></Typography>
      </Box>
    </Box>
  )
}