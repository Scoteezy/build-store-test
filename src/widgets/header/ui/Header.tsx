"use client";
import { Button, headerNav } from "@/shared";
import { supabase } from "@/shared/lib/supabase";
import { useAppDispatch } from "@/shared/store/hooks";
import { logOutUser } from "@/shared/store/userSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const signOut = async () =>{
    await supabase.auth.signOut();
    dispatch(logOutUser());
    router.push("/login");
  };

  return (
    <header className="w-full pr-[60px] pt-7 flex justify-end font-medium">
      <nav className="hidden sm:flex-center gap-8">
        {headerNav.map((nav)=>
          <a className="text-black text-lg hover:text-black/80 hover:font-bold transition-all duration-300" href={nav.path} key={nav.name}>
            {nav.name}
          </a>
        )}
      </nav>
      <Button className="hover:text-primary" onClick={signOut}>Sign out</Button>
      <div className="block sm:hidden relative">
        <button className=" w-[30px] h-fit peer relative z-40">
          <Image alt="menu" height={18} src="/icons/menu.svg" width={30}/>
        </button>
        <div className="bg-primary  flex-col gap-2 p-5 absolute -left-5 top-0 rounded-lg flex opacity-0 peer-focus:opacity-100 z-0 peer-focus:z-50 transition-all duration-500">
          {headerNav.map((nav)=>
            <a className="text-white text-lg hover:text-white/80 hover:font-bold transition-all duration-300" href={nav.path} key={nav.name}>
              {nav.name}
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;