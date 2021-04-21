import { useContext } from 'react'
import AuthContext from './AuthContext'
import axios from 'axios'

export const useAuth = () => {
  const authenticationContext = useContext(AuthContext)

  if (authenticationContext.data.user === undefined) {
    authenticationContext.setData({
      ...authenticationContext.data,
      user: JSON.parse(window.localStorage.getItem('user')) || null
    })
  }

  return {
    user: authenticationContext.data.user,
    isLoggedIn () {
      return !!authenticationContext.data.user
    },
    async login (username, password) {
      await axios({
        method: 'POST',
        data: { username, password },
        withCredentials: true,
        url: '/login',
      })

      const userData = await axios({
        method: 'GET',
        withCredentials: true,
        url: '/user',
      })

      authenticationContext.setData({
        ...authenticationContext.data,
        user: userData.data
      })

      window.localStorage.setItem('user', JSON.stringify(userData.data))
    },
    logout () {
      authenticationContext.setData({
        ...authenticationContext.data,
        user: null
      })
      window.localStorage.setItem('user', 'null')
    }
  }
}
