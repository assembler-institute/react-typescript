import { useReducer } from 'react'
import { userReducer } from '../../reducer/userReducer'
import { UserActionType } from '../../interfaces'

type Props = {}

const Config = (props: Props) => {
  const [state, dispatch] = useReducer(userReducer, {
    id: 0,
    name: '',
    email: '',
    age: 0
  })
  return (
    <div>
      <h1>User: {state.name}</h1>
      <button onClick={() => dispatch({
        type: UserActionType.UPDATE_USER,
        payload: { id: 1, email: 'assembler@assembler.com', name: 'Assembler', age: 3 }
      })}
      >UPDATE USER
      </button>
    </div>
  )
}

export default Config
