import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removerUser } from "../utils/userSlice";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  //It is knid of event lisetner
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
      });
  };
  
  useEffect(() => {
    //It is knid of event lisetner
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removerUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>

      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            alt="usericon"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          />

          <button
            onClick={handleSignOut}
            className="h-12 bg-red-600 text-white font-bold text-xl mx-2 py-2 px-4 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;