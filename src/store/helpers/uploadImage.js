import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
export const createBlob = async (image) => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
      resolve(xhr.response)
    }
    xhr.onerror = function (e) {
      console.log("eeeee", e)
      reject(new TypeError("Network request failed"))
    }
    xhr.responseType = "blob"
    xhr.open("GET", image, true)
    xhr.send(null)
  })

  return blob
}

export const getUrl = (url) => {
  const xhr = new XMLHttpRequest()
  xhr.responseType = "blob"
  xhr.onload = (event) => {
    const blob = xhr.response
  }
  xhr.open("GET", url)
  xhr.send()

  return url
}

export const uploadImageAndDownloadUrl = async (
  image,
  folderName,
  imageName
) => {
  const storage = getStorage()
  const blob = await createBlob(image)
  const storageRef = ref(storage, `images/${folderName}/${imageName}`)
  const snapshot = await uploadBytes(storageRef, blob)
  const downloadUrl = await getDownloadURL(snapshot.ref)
  const url = getUrl(downloadUrl)
  return url
}
