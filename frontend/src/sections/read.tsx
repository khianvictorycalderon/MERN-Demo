import { useEffect, useState } from "react"
import { Button } from "../components/ui/button"
import { backendPath } from "../endpoints";
import axios from "axios";

interface TableDataProps {
    name: string;
    age: number;
    address: string;
}

export const ReadSection = () => {

    const [isReloadButtonDisabled, setIsReloadButtonDisabled] = useState<boolean>(false);
    const [tableData, setTableData] = useState<TableDataProps[]>([
        {
            name: "Joshua",
            age: 18,
            address: "Lucena"
        },
        {
            name: "Jake",
            age: 21,
            address: "Sariaya"
        },
        {
            name: "Blake",
            age: 16,
            address: "Pagbilao"
        },
        {
            name: "Joshua",
            age: 18,
            address: "Lucena"
        },
        {
            name: "Jake",
            age: 21,
            address: "Sariaya"
        },
        {
            name: "Blake",
            age: 16,
            address: "Pagbilao"
        }
    ]);

    const fetchUsers = async () => {
        setIsReloadButtonDisabled(true);

        try {
            const res = await axios.get(`${backendPath}/users`);
            setTableData(res.data.users || []);
        } catch (error) {
            console.error(`Error fetching users: ${error}`);
        } finally {
            setIsReloadButtonDisabled(false);
        }
    }

    // Initial loading
    useEffect(() => {
        fetchUsers();
    },[]);

    return (
        <>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
                Read
            </h3>
            <Button
                variant="secondary"
                className="hover:cursor-pointer w-full mt-4"
                onClick={fetchUsers}
                disabled={isReloadButtonDisabled}
            >Reload</Button>
            <div className="my-6 w-full overflow-y-auto">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="border-t p-0">
                            <th className="w-2/6 border px-4 py-2 text-left">Name</th>
                            <th className="w-1/6 border px-4 py-2 text-left">Age</th>
                            <th className="w-3/6 border px-4 py-2 text-left">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item, index) => (
                            <tr className={`border-t p-0 ${index % 2 == 0 && "bg-neutral-300 text-black"}`} key={index}>
                                <td className="w-2/6 border px-4 py-2 text-left">{item.name}</td>
                                <td className="w-1/6 border px-4 py-2 text-left">{item.age}</td>
                                <td className="w-3/6 border px-4 py-2 text-left">{item.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}