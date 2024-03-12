"use client";
import { useState } from "react";
import { toast } from "react-toastify";

import { Button, Input } from "@/shared";
import { loginSchema } from "@/shared";
import { supabase} from "@/shared/lib/supabase";
import { useAppDispatch } from "@/shared/store/hooks";
import { setUser } from "@/shared/store/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ZodError } from "zod";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();

  const showErrorToast = (errorMessage:string) => {
    toast.error(errorMessage, {
      autoClose: 5000 
    });
  };
  const validateForm = ()=>{
    try {
      const obj = {email, password};
      const validatedData = loginSchema.parse(obj);

      return { success: true, result: validatedData };
      
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach((error)=>{
          showErrorToast(error.message);
        });
        return { success: false, error };
      }
    }
  };

  const login = async ()=>{
    try{
      if(validateForm()?.success){
        const{data,error}= await supabase
          .auth
          .signInWithPassword({
            email,
            password
          });

        if(data.user) {
          dispatch(setUser({access_token: data.session.access_token,refresh_token:data.session.refresh_token, user_id:data.session.user.id, user_email:data.session.user.email as string }));
          console.log(data);
          router.push("/");
        }else{
          showErrorToast(error!.message);
        }
      }
    }catch(error){
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex-center">
      <div className="p-20  bg-secondary/50 rounded-2xl flex-center flex-col gap-10">
        <h2 className="text-3xl text-dark font-bold">Login Page</h2>
        <Input onChange={(e)=>setEmail(e.target.value)} placeholder="email" value={email}/>
        <Input onChange={(e)=>setPassword(e.target.value)} placeholder="password" type="password" value={password}/>
        <Button className="bg-primary text-white text-xl hover:font-bold hover:bg-[#ff5353]" onClick={login}>Sign In</Button>
        <p className="text-xl text-dark">or <Link className="text-2xl font-bold hover:text-dark/90 transition-all duration-300" href='reg'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;