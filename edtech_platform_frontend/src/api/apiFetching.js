import axios from 'axios'

const queryStudents = ` 
query {
  allStudents {
    id,
    user {
      username
    }
    courses {
      id,
      title
    }
  } 
}`

const queryTeachers = ` 
query {
  allTeachers {
    id,
    user {
      username
    }
    courses {
      id,
      title
    }
  } 
}`

const queryTeachersSimple = ` 
query {
  allTeachers {
    id,
    bio,
    imgUrl,
    user {
      id,
      username
    }
    courses {
      id
    }
  } 
}`


const queryCourses = `
query {
  allCourses {
    id,
    title,
    description,
    imgUrl,
    teachers {
      id,
      imgUrl
      user {
        id,username
      }
    }
  } 
}`


export const fetchUsers = () => {
  return fetch('http://127.0.0.1:8000/api/users/')
  .then((response) => {
    return response.json()
  })
}

export const fetchCourses = () => {
    return fetch('http://127.0.0.1:8000/api/courses/')
    .then((response) => {
      return response.json()
    })
}

export const fetchTeachers = () => {
  return fetch('http://127.0.0.1:8000/api/teachers/')
  .then((response) => {
    return response.json()
  })
}

export const addTeacher = (user) => {
  return axios.post('http://127.0.0.1:8000/api/teachers/', 
  { user: `http://127.0.0.1:8000/api/users/${user.id}/`,
    courses: [] }
  )
}

export const addStudent = (user) => {
  return axios.post('http://127.0.0.1:8000/api/students/', 
  { user: `http://127.0.0.1:8000/api/users/${user.id}/`,
    courses: [] }
  )
}

export const getTeachersExt = () => {
  return axios.post('http://127.0.0.1:8000/graphql', { query: queryTeachers } )
  .then((response) => {
    return response.data.data.allTeachers
  })
}

export const getStudentsExt = () => {
  return axios.post('http://127.0.0.1:8000/graphql', { query: queryStudents } )
  .then((response) => {
    return response.data.data.allStudents
  })
}

export const getTeachers = () => {
  return axios.post('http://127.0.0.1:8000/graphql', { query: queryTeachersSimple } )
  .then((response) => {
    return response.data.data.allTeachers
  }) 
}

export const getCourses = () => {
  return axios.post('http://127.0.0.1:8000/graphql', { query: queryCourses } )
  .then((response) => {
    return response.data.data.allCourses
  }) 
}



export const obtainJwtToken = (username, password) => {
  return axios.post('http://127.0.0.1:8000/auth-jwt/token/', {username: username, password: password})
}

export const registerUser = (username, password) => {
  return axios.post('http://127.0.0.1:8000/api/users/', {username: username, password: password})
}

export const getCourse = (id) => {
  return fetch(`http://127.0.0.1:8000/api/courses/${id}`)
  .then((response) => {
    return response.json()
  })
}


export const getTeacher = (id) => {
  return fetch(`http://127.0.0.1:8000/api/teachers/${id}`)
  .then((response) => {
    return response.json()
  })
}

export const customFetch = (url) => {
  return fetch(url)
  .then((response) => {
    return response.json()
  })
}