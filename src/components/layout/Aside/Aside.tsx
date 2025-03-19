import { useUser } from "@/context/UserContext";
import AsideLink from "../AsideLink/AsideLink";
import { HomeIcon } from "@/assets/icon/HomeIcon";
import { DashboardIcon } from "@/assets/icon/DashboardIcon";
import { OffIcon } from "@/assets/icon/OffIcon";
import { CashIcon } from "@/assets/icon/CashIcon";
import Image from "next/image";
import UserIcon from "@/assets/images/bonnie-green.png";

export default function Aside() {
  const { user, logout } = useUser();

  return (
    <aside className="sticky top-0 right-0 z-40 min-w-64 min-h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="flex flex-col h-full w-full bg-white border-r border-gray-200 dark:bg-cinder-950 dark:border-gray-700">
        <div className="overflow-y-auto py-4 px-3 ">
          <div className="flex items-center pl-2 mb-5">
            <DashboardIcon className="mr-3 h-6 sm:h-8 text-gray-800   dark:text-white " />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Dashboard
            </span>
          </div>
          <ul className="space-y-2 mt-8">
            <AsideLink to="/" icon={<HomeIcon />}>
              Home
            </AsideLink>
            <AsideLink to="/dashboard/maximum-quantity" icon={<CashIcon />}>
              Maximum Quantity
            </AsideLink>
          </ul>
        </div>

        <div className="mt-auto justify-center p-4 w-full ">
          <div
            data-dropdown-toggle="dropdownUserName"
            className="flex justify-between items-center px-2 py-2 w-full rounded-lg dark:bg-cinder-950 dark:hover:bg-gray-700 hover:bg-gray-50 dark:hover-bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
          >
            <span className="sr-only">Open user menu</span>
            <div className="flex items-center">
              <Image
                src={UserIcon}
                className="mr-3 w-8 h-8 rounded-full"
                alt="Bonnie avatar"
                width={32}
                height={32}
              />
              <div className="text-left">
                <div className="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">
                  {user?.username}
                </div>
              </div>
            </div>
            <OffIcon
              className="h-6 w-6 text-gray-800 dark:text-white cursor-pointer"
              onClick={logout}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
