// components
import FormInput from "../components/FormInput";
import FormLayout from "../components/FormLayout";

// react hook form
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// toastify
import { toast } from "react-toastify";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { loginInputs } from "../data/datas";
import { loginSchema } from "../validation/schema";

// redux
import { useAppDispatch, useAppSelector } from "../redux/store";
import { login } from "../redux/features/userAuth";
import { supabase } from "../supabase/supabase";

export type LoginFormInput = {
  email: string;
  password: string;
};

const Login = () => {
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInput>({ resolver: yupResolver(loginSchema) });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginFormSumitHandler: SubmitHandler<LoginFormInput> = async (data) => {
    const {
      error,
      data: { session },
    } = await supabase.auth.signInWithPassword(data);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("You Are Login", {
      onClose: () => {
        dispatch(
          login({
            userInfo: {
              role: session?.user.user_metadata.role,
              email: session?.user.email,
              userName: session?.user.user_metadata.userName,
            },
            token: session?.access_token,
          })
        );
        reset();
        navigate("/dashboard");
      },
    });
  };

  const { isLogin } = useAppSelector((state) => state.userAuth);

  if (isLogin) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <FormLayout>
      <div className="bg-primaryGradient w-[90%] px-6 py-2 rounded-xl md:w-[600px]">
        <h2 className="text-center my-6 text-xl md:text-3xl">Login</h2>

        <form
          className="my-4 space-y-4"
          onSubmit={handleSubmit(loginFormSumitHandler)}
        >
          {loginInputs.map((item) => (
            <FormInput
              key={item.id}
              inputData={item}
              name={item.name}
              register={register}
              error={errors[item.name]}
            />
          ))}

          <div>
            <Link to="/register" className="opacity-70 hover:opacity-100">
              Not Have Account ? Create One
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-primary py-4 rounded-xl transition-all active:scale-95"
          >
            Login
          </button>
        </form>
      </div>
    </FormLayout>
  );
};

export default Login;
