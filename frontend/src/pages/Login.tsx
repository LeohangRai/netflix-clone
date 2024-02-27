import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import NavBar from '../components/NavBar';

export default function LoginPage() {
  const navigateTo = useNavigate();
  return (
    <div className="relative bg-black h-screen w-screen bg-opacity-50">
      <NavBar />
      <div className="flex justify-center items-center h-full">
        <div className="bg-black bg-opacity-70 p-16 self-center mt-2 w-full max-w-md rounded">
          <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
          <form action="" className="flex flex-col gap-4">
            <Input name="email" id="email" type="text" label="Email Address " />
            <Input
              name="password"
              id="password"
              type="password"
              label="Password"
            />
            <input
              type="submit"
              className="bg-red-400 hover:bg-red-700 hover:cursor-pointer text-white rounded-md w-full mt-10 py-3"
            />
          </form>
          <p className="text-neutral-500 mt-12">
            New to Netflix?{''}
            <span
              onClick={() => navigateTo('/signup')}
              className="text-white ml-1 hover:underline cursor-pointer"
            >
              Sign up now.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
