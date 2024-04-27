import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
   <main>
      <h1 className="mt-6 flex items-center justify-center text-3xl font-extrabold font-mono">Home</h1>
      <p className="flex items-center justify-center mt-2 text-lg font-mono">Welcome to the home page</p>
      <div className="flex justify-center my-4 ">  <Image src="https://img.freepik.com/premium-vector/2fa-authentication-password-secure-notice-login-verification-sms-with-push-code-message-shield-icon-smartphone-phone-laptop-computer-pc-flat_212005-139.jpg" alt="home" width={500} height={500} className="flex items-center justify-center rounded-lg" />
      </div>
   </main>
  );
}
