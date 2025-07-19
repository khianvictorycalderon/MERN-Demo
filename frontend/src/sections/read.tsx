import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { backendPath } from "../endpoints";
import axios from "axios";

interface TableDataProps {
  _id: string;
  name: string;
  age: number;
  address: string;
}

interface ReadSectionProps {
  tableData: TableDataProps[];
  onReload: () => void;
}

export const ReadSection = ({ tableData, onReload }: ReadSectionProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedData, setEditedData] = useState<Partial<TableDataProps>>({});
  const [isReloading, setIsReloading] = useState(false);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${backendPath}/users/${id}`);
      onReload(); // refresh the list
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handleEdit = (user: TableDataProps) => {
    setEditingId(user._id);
    setEditedData({ ...user });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedData({});
  };

  const handleSave = async (id: string) => {
    try {
      await axios.put(`${backendPath}/users/${id}`, editedData);
      setEditingId(null);
      onReload(); // reload updated data
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const handleInputChange = (field: keyof TableDataProps, value: string | number) => {
    setEditedData(prev => ({ ...prev, [field]: value }));
  };

  const handleReload = async () => {
    setIsReloading(true);
    await onReload();
    setIsReloading(false);
  };

  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
        Read / Update / Delete
      </h3>
      <Button
        variant="secondary"
        className="hover:cursor-pointer w-full mt-4"
        onClick={handleReload}
        disabled={isReloading}
      >
        {isReloading ? "Reloading..." : "Reload"}
      </Button>

      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="border-t p-0">
              <th className="w-1/4 border px-4 py-2 text-left">Name</th>
              <th className="w-1/6 border px-4 py-2 text-left">Age</th>
              <th className="w-1/3 border px-4 py-2 text-left">Address</th>
              <th className="w-1/4 border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                className={`border-t p-0 ${index % 2 === 0 ? "bg-neutral-300 text-black" : ""}`}
                key={item._id}
              >
                <td className="border px-2 py-1">
                  {editingId === item._id ? (
                    <Input
                      value={editedData.name || ""}
                      onChange={e => handleInputChange("name", e.target.value)}
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td className="border px-2 py-1">
                  {editingId === item._id ? (
                    <Input
                      type="number"
                      value={editedData.age || ""}
                      onChange={e => handleInputChange("age", parseInt(e.target.value))}
                    />
                  ) : (
                    item.age
                  )}
                </td>
                <td className="border px-2 py-1">
                  {editingId === item._id ? (
                    <Input
                      value={editedData.address || ""}
                      onChange={e => handleInputChange("address", e.target.value)}
                    />
                  ) : (
                    item.address
                  )}
                </td>
                <td className="border px-2 py-1 space-x-2">
                  {editingId === item._id ? (
                    <>
                      <Button
                        size="sm"
                        className="bg-green-500 hover:bg-green-600 text-white"
                        onClick={() => handleSave(item._id)}
                      >
                        Save
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
