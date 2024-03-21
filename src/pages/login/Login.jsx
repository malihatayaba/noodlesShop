import { useForm } from "react-hook-form";
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import { FaGoogle } from "react-icons/fa";
import auth from "../../../firebase.init";
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm();
      const handleGoogleSignIn =() =>{
        signInWithGoogle()
      }
      console.log(user)
    
      const onSubmit = (data) => console.log(data);
    return (
        <div className="m-auto w-1/2 mt-10 ">
            <h1 className="font-semibold text-3xl text-blue-400 mb-4 ">LOG IN HERE</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              className="input input-bordered input-info w-full max-w-xs"
              defaultValue=""
              {...register("name")}
            />
          </div>
          <div className="mb-4">
            <input
              className="input input-bordered input-info w-full max-w-xs"
              {...register("emailRequired", { required: true })}
            />
          </div>
          {errors.emailRequired && <span>This field is required</span>}
  
          <input
            type="submit"
            className="btn btn-primary block mt-4 w-1/2"
          />
        </form>
        <button onClick={handleGoogleSignIn} className="bg-blue-500 text-white w-1/2 mt-4 rounded ">
        <FaGoogle style={{fontSize:"36px", textAlign:"center"}} />
        </button>
      </div>
        
    );
};

export default Login;