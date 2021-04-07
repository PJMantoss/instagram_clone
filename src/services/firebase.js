import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(username){
    const result = await firbase
         .firestore()
         .collection('users')
         .where('username', '==', username)
         .get();

        return  result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUserId(userId){
    const result = await firbase
         .firestore()
         .collection('users')
         .where('userId', '==', userId)
         .get();
    
    const user = result.docs.map(() => ({
        ...item.data(),
        docId: item.Id
    }));
    
    return user;
};
