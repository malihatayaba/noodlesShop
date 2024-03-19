import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // console.log(watch("example"));
  return (
    <div className="m-auto w-1/2">
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
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent"
        />
      </form>
    </div>
  );
};

export default Signup;
