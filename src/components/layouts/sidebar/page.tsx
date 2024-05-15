import {Button} from "@/components/ui/button";
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { LuBuilding, LuClipboardCheck } from "react-icons/lu";
import { RiCalendarScheduleLine } from "react-icons/ri";

const SideBar = () => {
    return (
        <>
            <div className="px-5 min-h-screen">
                <div className="space-y-4 py-4">
                    <div className="px-3 py-2">
                        <h2 className="font-semibold text-lg px-4">Dashboard</h2>
                        <div className="space-y-3">
                            <Button
                                variant={"ghost"}
                                className="w-full justify-start rounded-none text-black hover:text-red-700 lg:rounded-md">
                                <AiOutlineHome className="mr-2 text-lg" />
                                Home
                            </Button>
                            <Button
                                variant={"ghost"}
                                className="w-full justify-start rounded-none text-black hover:text-red-700 lg:rounded-md">
                                <AiOutlineMail className="mr-2 text-lg" />
                                Messages
                            </Button>
                            <Button
                                variant={"ghost"}
                                className="w-full justify-start rounded-none text-black hover:text-red-700 lg:rounded-md">
                                <LuBuilding className="mr-2 text-lg" />
                                Cabang Olahraga
                            </Button>
                            <Button
                                variant={"ghost"}
                                className="w-full justify-start rounded-none text-black hover:text-red-700 lg:rounded-md">
                                <GoPerson className="mr-2 text-lg" />
                                Atlit & Pelatih 
                            </Button>
                            <Button
                                variant={"ghost"}
                                className="w-full justify-start rounded-none text-black hover:text-red-700 lg:rounded-md">
                                <LuClipboardCheck className="mr-2 text-lg" />
                                Job Listing
                            </Button>
                            <Button
                                variant={"ghost"}
                                className="w-full justify-start rounded-none text-black hover:text-red-700 lg:rounded-md">
                                <RiCalendarScheduleLine className="mr-2 text-lg" />
                                My Schedules
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
