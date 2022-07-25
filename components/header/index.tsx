import Link from "@components/Link";
import { ReactNode, useState } from "react";
import { HiSpeakerphone, HiOutlineNewspaper, HiCalendar} from "react-icons/hi";

interface IiconWrapperProps {
  children:ReactNode
}
const  IconWrapper = ({children}:IiconWrapperProps)=>{
  return (<span className="text-3xl  text-red-300"> 
    {children} 
    </span>)
}
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [flyer, setFlyer] = useState(false);
  const [flyerTwo, setFlyerTwo] = useState(false);

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative bg-white border-b-2 border-gray-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="w-auto h-8 sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden space-x-10 md:flex">
              <a
                href="/agenda"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
               Agenda
              </a>
              <Link href="/agenda">
              <a
                href="eventrite"
                // className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
              EventBrite
              </a>
            
              </Link>
             
            </nav>
            <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-red-700"
              >
                Buy Tickets
              </a>
            </div>
          </div>
        </div>
        {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden "
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-red-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/chart-bar */}
                    <IconWrapper>
                    <HiSpeakerphone />  
                    </IconWrapper>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Speakers
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/chart-bar */}
                    
                    <IconWrapper>
                      <HiOutlineNewspaper />
                    </IconWrapper>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Agenda
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/chart-bar */}
                   <IconWrapper>
                    <HiCalendar />
                   </IconWrapper>
                    <span className="ml-3 text-base font-medium text-gray-900">
                     EventBrite
                    </span>
                  </a>
               
                </nav>
              </div>
            </div>
            <div className="px-5 py-6 space-y-6">
              
              <div>
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700"
                >
                  Buy Ticket
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar