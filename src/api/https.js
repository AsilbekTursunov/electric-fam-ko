import axios from 'axios'
import store from '@/stores'

const service = axios.create({
  baseURL: 'http://localhost:3000',
  // baseURL: 'https://famtest.ls-electric.com',
})

service.defaults.withCredentials = false

service.interceptors.request.use((config) => {
  const token = store.getters.getToken  
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
}, (error) => {
  return Promise.reject(error)
})

service.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, (error) => {

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log(error)
  switch (error.response.status) {
    case 400:
      console.log('400')
      break
    case 401:
      console.log('401')
      break
    case 403:
      console.log('403')
      //store.commit('removeToken')
      break
    case 404:
      console.log('404')
      break
    case 500:
    //  store.dispatch('logout')
      console.log('500')
      break

    default:
      console.log('There was an error with your request', error.response.status)
  }
  return Promise.reject(error)
})


export const get = async (url, params = {}) => {
  return service.get(url, { params }).then(res => res.data) 
}

export const post = async (url, data = {}) => {
  return service.post(url, data).then(res => res.data)
}

export const put = async (url, data = {}) => {
  return service.put(url, data).then(res => res.data)
}

export const remove = async (url, data = {}) => {
  return service.delete(url, data).then(res => res.data)
}

export const fileUpload = async (url, formData, onUploadProgress) => {
  return new Promise((resolve, reject) => {

    service({
      method: 'post',
      url: url,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
      onUploadProgress
    }).then(res => {
      if(res.status === 200) {
        if(res.data || !res.data.code) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      } else {
        // Server Error
        reject(res.data)
      }
    })
      .catch(err => reject(err)) 
  })
}
