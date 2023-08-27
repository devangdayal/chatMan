'use client';

import { 
  FieldErrors, 
  FieldValues, 
  UseFormRegister
} from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
}

const MessageInput: React.FC<MessageInputProps> = ({ 
  placeholder, 
  id, 
  type, 
  required, 
  register, 
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="
          text-black
          font-light
          py-2
          px-4
          bg-gradient-to-r from-emerald-100 from-20% via-cyan-100 via-30% to-green-200 to-90%
          w-full 
          rounded-full
          focus:outline-none
        "
      />
    </div>
   );
}
 
export default MessageInput;