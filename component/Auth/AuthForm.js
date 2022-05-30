import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const AuthForm = () => {
  const [form, setForm] = useState("sign-in");

  const handleToggleForm = () => {
      console.log('seeee')

    if (form === "sign-in") {
      setForm("sign-up");
    } else {
      setForm("sign-in");
    }
  };

  if (form === "sign-in") {
    return <SignInForm toggleForm={handleToggleForm} />;
  } else {
    return <SignUpForm toggleForm={handleToggleForm} />;
  }
};

export default AuthForm;
