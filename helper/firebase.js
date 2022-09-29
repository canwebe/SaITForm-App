import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { db } from '../lib/firebase'

export const checkStudent = async (name, mobile) => {
  const q = query(
    collection(db, 'students'),
    where('name', '==', name),
    where('mobile', '==', mobile),
    limit(1)
  )
  const snapshot = await getDocs(q)
  return snapshot.empty
}
