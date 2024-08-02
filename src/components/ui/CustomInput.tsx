import React, { useState } from 'react';
import { FormControl, FormField, FormLabel, FormMessage } from './form';
import { Input } from './input';
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { authFormSchema } from '../../../lib/utils';
import { FaRegEye } from 'react-icons/fa6';
import { IoEyeOff } from 'react-icons/io5';

const formSchema = authFormSchema('sign-up');

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  type?: 'text' | 'password'; // type should be 'text' or 'password'
}

const CustomInput = ({ control, name, label, placeholder, icon, type = 'text' }: CustomInputProps) => {
  // Only manage the state for 'password' type fields
  const [isPasswordVisible, setIsPasswordVisible] = useState(type === 'password');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  // Set input type based on visibility state
  const inputType = type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item relative">
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <div className="relative flex items-center">
                <Input
                  placeholder={placeholder}
                  className={`input-class ${icon ? 'pr-12' : ''}`} // Adjust padding if needed
                  type={inputType} // Use inputType to set the correct type
                  {...field}
                />
                {type === 'password' && (
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {isPasswordVisible ? <IoEyeOff size={20} /> : <FaRegEye size={20} />}
                  </button>
                )}
                {icon && (
                  <div className="absolute right-5 text-gray-500">
                    {icon}
                  </div>
                )}
              </div>
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
