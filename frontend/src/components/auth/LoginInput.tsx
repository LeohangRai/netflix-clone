import { useContext } from 'react';
import { LoginFormContext } from '../../pages/Login';
import { LoginFormFields } from '../../schemas';
import { ErrorMessage } from '@hookform/error-message';
import { renderError } from '../../common/util-components';

interface InputProps {
  readonly name: keyof LoginFormFields;
  readonly id: string;
  readonly label: string;
  readonly type?: string;
}

export default function Input({ name, id, label, type }: InputProps) {
  const { register, errors } = useContext(LoginFormContext);
  if (!register) return; // this won't happen, trust me ;)
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
