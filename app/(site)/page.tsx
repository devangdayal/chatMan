
import Image from "next/image"
import AuthForm from "./components/AuthForm"


export default function Home() {
    return (

        <div
            className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        bg-gray-100">


            <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
          height="200"
          width="200"
          className="mx-auto w-auto"
          src="/images/logo.png"
          alt="Logo"
        />   
                <h3
                    className="
                    mt-6
                    text-center
                    text-3xl
                    font-bold
                    tracking-tight
                    text-emerald-500">
                    Connect with chatMan
                </h3>
            </div>
            {/* Auth Form */}
            <AuthForm />
        </div>
    )
}
