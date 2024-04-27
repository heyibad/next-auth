import Image from "next/image";
import Navbar from "./components/Navbar";
import Element from "./components/Element";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <main>

    <h1 className="mt-6 flex items-center justify-center text-3xl font-extrabold font-mono">Home</h1>
      <p className="flex items-center justify-center mt-2 text-lg font-mono">Welcome to the home page</p>
    <div className="flex flex-wrap items-center w-full overflow-hidden justify-center">
<Element />
<Element />
<Element />
<Element />
<Element />
<Element />
<Element />
<Element />
<Element />
<Element />
<Element />
<Element />

    </div>

   <Footer/>
   </main>
  );
}
