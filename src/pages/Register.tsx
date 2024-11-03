// supabase , toastify , router-dom
import { supabase } from "../supabase/supabase";
import { toast } from "react-toastify";
import { Navigate, useNavigate, Link } from "react-router-dom";

// redux
import { useAppDispatch, useAppSelector } from "../redux/store";
import { login } from "../redux/features/userAuth";

// data  , schema
import { registerInputs } from "../data/datas";
import { registerSchema } from "../validation/schema";

// react hook form
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import FormInput from "../components/FormInput";
import FormLayout from "../components/FormLayout";

type RegisterFormInput = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const { isLogin } = useAppSelector((state) => state.userAuth);

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInput>({ resolver: yupResolver(registerSchema) });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  // register form handler
  const registerFormSumitHandler: SubmitHandler<RegisterFormInput> = async (
    data
  ) => {
    const { email, password, userName } = data;

    const {
      error,
      data: { session },
    } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: "USER",
          userName,
        },
      },
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Create Account successfully", {
      onClose: () => {
        dispatch(
          login({
            token: session?.access_token,
            userInfo: {
              userName,
              email,
              role: "USER",
            },
          })
        );
        reset();
        navigate("/dashboard");
      },
    });
  };

  if (isLogin) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <FormLayout>
      <div className="bg-primaryGradient w-[90%] px-6 py-2 rounded-xl md:w-[600px]">
        <h2 className="text-center my-6 text-xl md:text-3xl">
          Wellcome To My Website
        </h2>

        <form
          className="my-4 space-y-4"
          onSubmit={handleSubmit(registerFormSumitHandler)}
        >
          {registerInputs.map((item) => (
            <FormInput
              key={item.id}
              inputData={item}
              name={item.name}
              register={register}
              error={errors[item.name]}
            />
          ))}

          <div>
            <Link to="/login" className="opacity-70 hover:opacity-100">
              You Have Account ?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-primary py-4 rounded-xl transition-all active:scale-95"
          >
            Create Account
          </button>
        </form>
      </div>
    </FormLayout>
  );
};

export default Register;
