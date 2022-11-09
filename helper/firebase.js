import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore'
import { db } from '../lib/firebase'

export const checkStudent = async (name, mobile,check) => {
  const q = query(
    collection(db, 'students'),
    where('name', '==', name.trim().toLowerCase()),
    where('mobile', '==', mobile.trim()),
    limit(1)
  )
  const snapshot = await getDocs(q)
  if(check){
    return snapshot.empty
  }else{
    if(!snapshot.empty){
  return snapshot.docs[0].data()
    }
  }
}

export const addFullData = async (data, id) => {
  const docRef = doc(db, `students/${id}`)
  const snapshot = await getDoc(docRef)
  if (!snapshot.exists()) {
    await setDoc(docRef, data)
    return true
  } else {
    return false
  }
}
