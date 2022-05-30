import React from "react";
import useAuthContext from "../../../hooks/useAuthContext";
import Editor from "../Editor";
import Layout from "../Layout";
import VisitorAdvice from "../VisitorAdvice";

const Main = () => {
  const { user } = useAuthContext();
  return <Layout>{user ? <Editor /> : <VisitorAdvice />}</Layout>;
};

export default Main;
