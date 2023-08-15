"use client";

import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { useMemo } from "react";
import { HiChevronLeft } from "react-icons/hi2";


interface HeaderProps{
    conversation: Conversation & {
        users: User[]
    }
};

const Header: React.FC<HeaderProps> = ({
    conversation
}) => {
    const otherUser = useOtherUser(conversation);

    const statusText = useMemo(() => {
        if(conversation.isGroup){
            return `${conversation.users.length} members`;
        }


        return 'Active';

    },[conversation])


    return (
        <div className="bg-white w-full flex border-b-[1px] sm:px-4 lg:px-4 justify-between items-center shadow-sm">
            <div className="flex gap-3 items-center">
                <Link
                className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer"
                href="/conversations"> 
                <HiChevronLeft size={32}/>
                </Link>
            </div>
        </div>
      );
}
 
export default Header;


