import React, { createContext, useState } from 'react'

interface CurrentUserContextType {
  username: string;
}

interface UpdateCurrentUserContextType {
  currentUser: CurrentUserContextType;
  updateCurrentUser: (username: string) => void;
}

const CurrentUserContext = createContext<UpdateCurrentUserContextType>({
  currentUser: { username: '' },
  updateCurrentUser: () => {}
})

type Props = {
  children: React.ReactNode;
};

const UserContext = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<CurrentUserContextType>({
    username: ''
  })

  const updateCurrentUser = (username: string) => {
    setCurrentUser({ username })
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, updateCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export default UserContext
