import {useState} from "react";

interface componentProps {
    columns: string[];
    onSort: (column: string, direction: "asc" | "desc") => void;
}

export default function BaseTableHeader({columns, onSort}: Readonly<componentProps>) {
    const [sortConfig, setSortConfig] = useState<{ column: string; direction: "asc" | "desc" }>({
        column: "",
        direction: "asc",
    });

    const handleSort = (column: string) => {
        const direction =
            sortConfig.column === column && sortConfig.direction === "asc" ? "desc" : "asc";
        setSortConfig({ column, direction });
        onSort(column, direction);
    };

    return (
        <div className="sticky top-0 bg-gray-200 z-10 md:table hidden w-full table-fixed border-b border-gray-400">
            <div className="table-header-group">
                <div className="table-row">
                    {columns.map((column) => (
                        <div
                            key={column}
                            className="table-cell p-2 text-left cursor-pointer hover:bg-gray-300"
                            onClick={() => handleSort(column)}
                        >
                            <div className="flex items-center">
                                {column}
                                {sortConfig.column === column && (
                                    <span className="ml-1">
                    {sortConfig.direction === "asc" ? "↑" : "↓"}
                  </span>
                                )}
                            </div>
                        </div>
                    ))}
                    <div className="table-cell p-2">Select</div>
                </div>
            </div>
        </div>
    );
}