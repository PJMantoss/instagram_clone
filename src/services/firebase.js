import { firebase, FieldValue } from '../lib/firebase';

export async function doesUserExist(username){
    const result = await firbase
         .firestore()
         .collection('users')
         .where()
}