import { useNavigate } from 'react-router-dom';
import Input from '../components/auth/SignupInput';
import NavBar from '../components/NavBar';
import {
  FieldErrors,
  SubmitHandler,
  UseFormRegister,
  useForm
} from 'react-hook-form';
import { createContext } from 'react';
import { RegistrationFormFields, registerSchema } from '../schemas';
import { zodResolver } from '@hookform/resolvers/zod';

type SignupFormContext = {
  register: null | UseFormRegister<RegistrationFormFields>;
  errors: FieldErrors<RegistrationFormFields>;
};

export const SignupFormContext = createContext<SignupFormContext>({
  register: null,
  errors: {}
});

export default function SignupPage() {
  const navigateTo = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegistrationFormFields>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit: SubmitHandler<RegistrationFormFields> = (data) => {
    console.log(data);
  };

  return (
    <div className="relative bg-black h-screen w-screen bg-opacity-50">
      <NavBar />
      <div className="flex justify-center items-center h-full">
        <div className="bg-black bg-opacity-70 p-16 self-center mt-2 w-full max-w-md rounded">
          <h2 className="text-white text-4xl mb-8 font-semibold">Sign Up</h2>
          <SignupFormContext.Provider
            value={{
              register,
              errors
            }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <Input
                name="username"
                id="username"
                type="text"
                label="Username"
              />
              <Input
                name="email"
                id="email"
                type="text"
                label="Email Address"
              />
              <Input
                name="password"
                id="password"
                type="password"
                label="Password"
              />
              <Input
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                label="Confirm Password"
              />
              <input
                type="submit"
                className="bg-red-400 hover:bg-red-700 hover:cursor-pointer text-white rounded-md w-full mt-10 py-3"
              />
            </form>
          </SignupFormContext.Provider>
          <p className="text-neutral-500 mt-12">
            Already have an account?{''}
            <span
              onClick={() => navigateTo('/login')}
              className="text-white ml-1 hover:underline cursor-pointer"
            >
              Login here.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
