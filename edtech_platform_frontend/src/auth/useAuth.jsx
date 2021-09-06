import React, { useState, useContext, createContext, useEffect} from "react"
import axios from 'axios'

const authContext = createContext()

export const useAuth = () => useContext(authContext)


export function AuthProvider ({ children }) {
  const [user, setUser] = useState(null);

  const signIn = (username, password) => {
    axios.post('http://127.0.0.1:8000/auth-jwt/token/', {username: username, password: password})
    .then(response => {
      saveTokens({
        'username': username,
        'access': response.data['access'],
        'refresh': response.data['refresh']
      })
      setUser({
        'username': username,
        'access': response.data['access'],
        'refresh': response.data['refresh']});
    }).catch(error => alert('wrong login or password'))
  };

  const saveTokens = (data) => {
    localStorage.setItem('access', data.access)
    localStorage.setItem('refresh', data.refresh)
    localStorage.setItem('username', data.username)
  }

  const removeTokens = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    localStorage.removeItem('username')
  }

  const signUp = (username, password) => {
    axios.post('http://127.0.0.1:8000/api/users/', {username: username, password: password})
    .then(response => { alert('User created. Please login in') })
    .catch(error => { alert('A user with that username already exists') })
  };

  const signOut = () => {
    setUser(null);
    removeTokens()
  };

  const getDataFromLocalStorage = () => {
    const data = 
    {
      username: localStorage.getItem('username'),
      access: localStorage.getItem('access'),
      refresh: localStorage.getItem('refresh'),
    }
    return data.access === null ? null : data
  }

  useEffect(() => {

    const data = getDataFromLocalStorage()
    setUser(data)

    const unsubscribe = ((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    });
    return () => unsubscribe() 
  }, [])

  return (
    <authContext.Provider value={{ user, setUser, signIn, signUp, signOut }}>
      { children }
    </authContext.Provider>
  )
}
