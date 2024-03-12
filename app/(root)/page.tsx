import { Home } from "@/views";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HomePage",
  description: "HomePage of portfolio website",
};

const HomePage = () => {
  return (
    <Home/>
  );
};

export default HomePage;