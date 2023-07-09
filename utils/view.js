import db from '@/config/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const collection = 'blogViews'

export const viewCounter = async (slug) => {
	const blogViewsData = await getViews(slug)
	const data = {
		views: blogViewsData?.views ? blogViewsData.views + 1 : 1
	}

	try {
		return await setDoc(doc(db, collection, slug), data, { merge: true })
	} catch (error) {
		return error
	}
}

const getViews = async (slug) => {
	const docRef = doc(db, collection, slug)
	try {
		return (await getDoc(docRef)).data()
	} catch (error) {
		return error
	}
}
