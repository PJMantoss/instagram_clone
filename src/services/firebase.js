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

export default function getUserFollowedPhotos(userId, followingUserIds){
    const result = await firbase
         .firestore()
         .collection('photos')
         .where('userId', 'in', followingUserIds)
         .get();
    
    const userFollowedPhotos = result.docs.map(() => ({
        ...item.data(),
        docId: item.Id
    }));
    
    const photosWithUserDetails = await Promise.all(
        userFollowedPhotos.map(async (photo) => {
            let userLikePhoto = false;
            if(photo.likes.includes(userId)){
                userLikePhoto = true;
            }
            
            const user = await getUserByUserId(photo.userId);
            const username = user[0].username;
            return { username, ...photo, userLikedPhoto };
        })
    );
    
    return photosWithUserDetails;
}

export async function getSuggestedProfiles(userId){
    const result = await firebase.firestore().collection('users').limit(10).get()
    
    const [{ following }] = getUserByUserId(userId)
    
    return result.docs
          .map(user => ({ ...user.data(), docId: user.id }))
          .filter(profile => profile.userId !== userId && !following.includes(profile.userId))
}

export async function updateUserFollowing(docId, profileId, isFollowingProfile){
    return firebase
        .firestore()
        .collection('users')
        .docId(docId)
        .update({
        following: isFollowingProfile
            ? 
            :
    })
};

export async function updateFollowedUserFollowers(docId, followingUserId, isFollowingProfile){};
