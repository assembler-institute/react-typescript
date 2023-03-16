import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login, Config } from '../pages'
type Props = {}

const Router = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/user' element={<Config />} />
        <Route path='*' element={<Navigate to='/home' />} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router
