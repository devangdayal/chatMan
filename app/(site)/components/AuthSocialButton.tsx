import { IconType } from "react-icons";

interface AuthSocialProps {
    icon: IconType,
    onClick: () => void;

}

const AuthSocialButton: React.FC<AuthSocialProps> = ({
    icon: Icon,
    onClick,
  
}) => {
    return ( 
        <button
        type="button"
        onClick={onClick}
        className="
        inline-flex
        w-full
        justify-center
        rounded-md
        bg-white
        px-4
        py-2
        text-black
        shadow-sm
        ring-1
        ring-inset
        ring-gray-300
        hover:bg-gray-50
        focus:outline-offset-0
        ">
            <Icon/>
           
        </button>
     );
}
 
export default AuthSocialButton;