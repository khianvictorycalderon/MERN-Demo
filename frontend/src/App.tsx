import { useEffect, useState } from "react";
import { CreateSection } from "./sections/create";
import { ReadSection } from "./sections/read";
import axios from "axios";
import { backendPath } from "./endpoints";

interface TableDataProps {
  _id: string;
  name: string;
  age: number;
  address: string;
}

export default function App() {
  const [tableData, setTableData] = useState<TableDataProps[]>([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${backendPath}/users`);
      setTableData(res.data.users || []);
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4 md:p-16">
      <h1 className="text-center text-4xl font-extrabold tracking-tight">
        MERN stack basic CRUD
      </h1>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>MongoDB</li>
        <li>Express JS</li>
        <li>React (Vite)</li>
        <li>Node.js</li>
      </ul>

      <hr className="mb-4" />

      <CreateSection onUserCreated={fetchUsers} />
      <ReadSection
        tableData={tableData}
        onReload={fetchUsers}
      />
    </div>
  );
}
