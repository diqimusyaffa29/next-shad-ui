"use client"
import {Button} from "@/components/ui/button";
import { EyeIcon, PlusIcon } from "lucide-react";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();
    const navUsersPage = () => router.push("/users");
    return (
        <>
            <div>Welcome to kocak gaming</div>
            <Button onClick={navUsersPage} className="rounded-none lg:rounded-sm py-3 px-6 ">
                <EyeIcon className="mr-2 w-4 h-4" />
                See All Users
            </Button>
        </>
    );
}
