import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase';

export default function useAuthListener(){
  const [user, setUser] = useState(JSON.parse());
}
