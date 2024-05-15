import { DataTable } from "@/components/data-table";
import { User, columns } from "./columns";

export const metadata = {
    title: "User Page",
};


async function getUsers(): Promise<User[]>{
    const res = await fetch(
        'https://66437c0f6c6a656587074681.mockapi.io/users'
    )
    const data = await res.json()
    return data
}


const UserPage = async () => {
    const data = await getUsers()
    return (
        <section className="py-10">
            <div className="container">
                <h1 className="text-3xl font-bold">All Users</h1>
                <DataTable columns={columns} data={data} />
                
            </div>
        </section>
    );
};

export default UserPage;
