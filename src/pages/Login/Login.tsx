
import { useAuth0 } from '@auth0/auth0-react'
import './styles.css'

export const Login = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className='main'>

      <button type='button' className='nes-btn is-primary login-button' onClick={() => loginWithRedirect()}>
        <i className='nes-pokeball icon' />
        Login
      </button>
    </div>
  )
}
