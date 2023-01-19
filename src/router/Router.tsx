import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Login } from '../pages'
type Props = {}

const Router = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
