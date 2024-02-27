import { useContext } from 'react';
import { AuthFormContext } from '../pages/Signup';
import { RegistrationFormFields } from '../schemas';
import { ErrorMessage } from '@hookform/error-message';

interface InputProps {
  readonly name: keyof RegistrationFormFields;
  readonly id: string;
  readonly label: string;
  readonly type?: string;
}

export default function Input({ name, id, label, type }: InputProps) {
  const { register, errors } = useContext(AuthFormContext);
  if (!register) return; // this won't happen, trust me ;)

  // render function for the <ErrorMessage /> component
  const renderError = ({ message }: { message: string }) => (
    <p className="text-red-500">{message}</p>
  );

  return (
    <div className="relative">
      <input
        {...register(name)}
        type={type}
        id={id}
        className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
      />
      <label
        htmlFor={id}
        className="absolute 
          text-md
          text-zinc-400
          duration-150 
          transform 
          -translate-y-3 
          scale-75 
          top-4 
          z-10 
          origin-[0] 
          left-6
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-3"
      >
        {label}
      </label>
      <ErrorMessage name={name} errors={errors} render={renderError} />
    </div>
  );
}
