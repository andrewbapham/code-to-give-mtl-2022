import React from "react";
import { auth } from "../utils/Firebase";
import { FirebaseApp } from "firebase/app";

export const Homepage: React.FC = ({}) => {
  var user = auth.currentUser;
  return <div>{user && "test text"}</div>;
};
