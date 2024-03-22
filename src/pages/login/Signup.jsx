import { useForm } from "react-hook-form";
import{useCreateUserWithEmailAndPassword, useUpdateProfile} from "react-firebase-hooks/auth"
import auth from "../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "../../shared/Loading";
const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    await createUserWithEmailAndPassword(data.email,data.password);
    await updateProfile({displayName:data.name})
  };
    console.log(user)
   
    if (user) {
      toast.success("user created successfully");
      return navigate("/homepage");
      
    }
  
  
  return (
    <div className="m-auto w-1/2 mt-10">
      <h1 className="font-semibold text-3xl  mb-4">Sign up here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
        <label className="block">Name</label>
          <input
            className="input input-bordered input-info w-full max-w-xs"
             {...register("name")}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block">Email</label>
          <input
            className="input input-bordered input-info w-full max-w-xs"
            {...register("email", { required: true })}
            placeholder="Email"
          />
        </div>
        {errors.email && (
          <span className="text-red-600">Email is required</span>
        )}

        <div >
          <label className="block">Password</label>
          <input
            className="input input-bordered input-info w-full max-w-xs"
            {...register("password", { required: true })}
            placeholder="Password"
            type="password"
          />
        </div>
        {errors.password && (<span>Password is required</span>)}

        {loading ||updating ? (
          <Loading/>
        ) : (
          <input
            className="btn btn-primary block mt-4 w-1/2 text-xl"
            type="submit"
          />
        )}

        {
          error && <h1 className="text-red-700 text-center mt-5 text-2xl">{error.message}</h1>
        }

        <Link to="/login" className="text-blue-600">
          Already have an account? Login here
        </Link>
      </form>
    </div>
     
  );
};

export default Signup;
