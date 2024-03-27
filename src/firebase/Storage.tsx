import storage from '@react-native-firebase/storage'

const getUserPhotoURL = async (uid: string) => {
  return new Promise((resolve) => {
    storage()
      .ref(`users/${uid}.png`)
      .getDownloadURL()
      .then((url) => {
        resolve(url)
      })
      .catch((e) => {
        resolve('')
      })
  })
}

const FireStorage = {
  getUserPhotoURL
}

export default FireStorage
