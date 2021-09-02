import React, { useState, useContext, createContext, useEffect} from "react";
import axios from 'axios'

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};


// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  
  const signin = (username, password) => {
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

  const signup = (username, password) => {
    setUser({'username': username, 'password': password});
    return user;
  };

  const signout = () => {
    setUser(null);
    removeTokens()
  };

  const getDataFromLocalStorage = () => {
    const data = 
    {
      username: localStorage.getItem('username'),
      access: localStorage.getItem('access'),
      refresh: localStorage.getItem('refresh')
    }
    return data.access === null ? null : data
  }

  useEffect(() => {
    const data = getDataFromLocalStorage()
    setUser(data)
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
  };
}