import React, { useEffect, useState } from 'react'
import { addDoc, collection } from "firebase/firestore"
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';


function CreatePost({ isAuth }) {

     const [title, setTitle] = useState("");
     const [postText, setPostText] = useState("");

     const postsCollectionRef = collection(db, "posts");
     let navigate = useNavigate();

     const createPost = async () => {
          await addDoc(postsCollectionRef, { title, postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } }
          );

          navigate("/")
     }

     useEffect(() => {
          if (!isAuth) {
               navigate("/login");
          }
     })


     return (
          <div className="createPostsPage">
               <div className="cpContainer">
                    <h1>Create a post</h1>
                    <div className="inputGp">
                         <label>Title:</label>
                         <input placeholder="Title..." type="text" onChange={(event) => {
                              setTitle(event.target.value)
                         }} />
                    </div>
                    <div className="inputGp">
                         <label>Post:</label>
                         <textarea placeholder="Post..." onChange={(event) => {
                              setPostText(event.target.value)
                         }}></textarea>
                    </div>

                    <button onClick={createPost}>Submit post</button>
               </div>
          </div>
     )
}

export default CreatePost