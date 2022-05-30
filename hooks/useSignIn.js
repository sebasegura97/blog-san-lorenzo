import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import useAuthContext from "./useAuthContext";

const useSignIn = () => {
  const { setUser } = useAuthContext();

  const handleLoginWithEmailAndPassword = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (result.user) {
        setUser(result.user);
      }
      return { success: true, user: result.user };
    } catch (error) {
      console.error(error);
      return { success: false, error };
    }
  };

  return {
    loginWithEmailAndPassword: handleLoginWithEmailAndPassword,
  };
};
export default useSignIn;
