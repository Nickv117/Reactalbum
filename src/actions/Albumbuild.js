import axios from "axios"

export function albumsFetch() {
  return new Promise((resolve, reject) => {
    axios
      .get("/albums")
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}

export function albumFetch(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/albums/${id}?_embed=picture`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}

export function getalbumList() {
  return new Promise(resolve => {
    axios.get(`/albums/`).then(resp => {
      resolve(resp.data)
    })
  })
}

export function albumPic(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/picture/${id}`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}
