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
      title,
      imgUrl
    }
  } 
}`

const queryTeachers = ` 
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
      id,
      title,
      imgUrl
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
    students {
      user {
        id, username
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
    .then((courses) => {
      return courses.map( (course) => ({
        'id': course.id,
        'title': course.title,
        'description': course.description,
        'imgUrl': course.img_url,
        'teachers': course.teachers}))
    }
    )
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

export const getStudentsExt = () => {
  return axios.post('http://127.0.0.1:8000/graphql', { query: queryStudents } )
  .then((response) => {
    return response.data.data.allStudents
  })
}

export const getTeachers = () => {
  return axios.post('http://127.0.0.1:8000/graphql', { query: queryTeachers } )
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


export const changeCourses = (userId, studentId, courses) => {
  return axios.put(`http://127.0.0.1:8000/api/students/${studentId}/`,
   {
     user: `http://127.0.0.1:8000/api/users/${userId}/`,
     courses: courses.map( course => `http://127.0.0.1:8000/api/courses/${course.id}/` )
    } )
  .then((response) => {
    return response
  })
  
}

export const addCourse = (title, description, imgUrl, teacherId) => {
  return axios.post(`http://127.0.0.1:8000/api/courses/`,
  {
    title: title,
    description: description,
    img_url: imgUrl,
    teachers: [`http://127.0.0.1:8000/api/teachers/${teacherId}/`]
   } )
 .then((response) => {
   return response
 })
}

export const deleteCourse = (id) => {
  return axios.delete(`http://127.0.0.1:8000/api/courses/${id}/`)
 .then((response) => {
   return response
 })  
}

export const editCourse = (id, title, description, imgUrl, teachers) => {
  return axios.put(`http://127.0.0.1:8000/api/courses/${id}/`,
  {
    title: title,
    description: description,
    img_url: imgUrl,
    teachers: teachers.map( teacher => `http://127.0.0.1:8000/api/teachers/${teacher.id}/` )
   } )
 .then((response) => {
   return response
 })

}