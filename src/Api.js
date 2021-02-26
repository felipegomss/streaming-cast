import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default {
	googleAuth: async () => {
		const provider = new firebase.auth.GoogleAuthProvider()
		let result = await firebase.auth().signInWithPopup(provider)
		return (result)
	},
	faceAuth: async () => {
		const provider = new firebase.auth.FacebookAuthProvider()
		let result = await firebase.auth().signInWithPopup(provider)
		return (result)
	}
}