import LoginScreen from "@/assets/login-screen.svg";
import Apple from "@/assets/apple.svg";
import Facebook from "@/assets/facebook.svg";
import Google from "@/assets/google.svg";
import { Input } from "@/components/Input";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import PublicLayout from "@/layouts/PublicLayout";

export default function LoginPage() {

  return (
    <PublicLayout>

      <div className="flex h-screen justify-between">
        <div className="flex flex-col justify-center shrink-0 items-center w-[40%] max-lg:w-full  max-sm:h-fit max-md:px-4 pt-4">
          <div className="flex flex-col justify-center w-[380px] max-sm:w-full gap-4">
            <p className="font-bold text-2xl">Giriş Yap</p>

            <Input placeholder="Kullanıcı adı" id="username" type="text" />
            <Input placeholder="Şifre" id="password" type="password" />

            <Link className="font-normal text-xs text-[#808080] flex justify-end pr-2"
              to="/sifremi-unuttum">
              Şifremi unuttum
            </Link>

            <Button
              className="h-10 text-sm"
              buttonText="Giriş"
            />

            <div className="w-full border-[1px] bg-[#EAEAEA]" />
            <div className="flex justify-center items-center gap-4 pt-4">
              <img src={Facebook} alt="Facebook ile Giriş Yap" width={42} height={42} />
              <img src={Apple} alt="Apple ile Giriş Yap" width={42} height={42} />
              <img src={Google} alt="Google ile Giriş Yap" width={42} height={42} />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-orange-300 to-orange-500  w-[60%] max-lg:hidden  flex items-center justify-center">
          <img src={LoginScreen} alt="Giriş Yap" width={632} height={632} />
        </div>
      </div>
    </PublicLayout >
  );
}
