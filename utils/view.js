import db from '@/config/firebase'
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'

const collectionName = 'blogViews'

export const viewCounter = async (slug) => {
	const blogViewsData = await getViews(slug)
	const data = {
		views: blogViewsData?.views ? blogViewsData.views + 1 : 1
	}

	try {
		return await setDoc(doc(db, collectionName, slug), data, { merge: true })
	} catch (error) {
		return error
	}
}

export const getViews = async (slug) => {
	if (slug) {
		const docRef = doc(db, collectionName, slug)
		try {
			return (await getDoc(docRef)).data()
		} catch (error) {
			return error
		}
	} else {
		const posts = []
		const data = await getDocs(collection(db, collectionName))
		data.forEach((doc) => {
			posts.push({ slug: doc.id, ...doc.data() })
		})
		return posts
	}
}
