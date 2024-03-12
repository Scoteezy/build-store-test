"use client";

interface InputProps {
    className?: string;
    value?:string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
  type?: string;
}
const Input = (props: InputProps) => {
  return (
    <input {...props} className={`w-[300px] h-[30px] rounded-md p-5 box-border text-xl ${props.className}`}/>
  );
};

export default Input;