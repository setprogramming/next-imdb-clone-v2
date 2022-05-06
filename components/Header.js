import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/solid';


export default function Header() {
  return (
    <div className="bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between">
        <div className="flex">
            <HeaderIcon Icon={HomeIcon} title="HOME" />
            <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
            <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
            <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
        </div>
        <Image 
            src="https://static.wikia.nocookie.net/logopedia/images/8/83/IMDb_Logo.svg/revision/latest/scale-to-width-down/300?cb=20220306043925"
            width={100}
            height={50}
            className="cursor-pointer active:brightness-110"
        />
    </div>
  )
}
