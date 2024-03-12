import { Footer, Header } from "@/widgets";

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div >
      <Header/>
      {children}
      <Footer/>
    </div>
  );

}

