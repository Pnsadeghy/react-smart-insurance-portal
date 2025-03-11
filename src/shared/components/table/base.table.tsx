import type IBaseTableData from "./interfaces/base.table.data.interface";
import {useState} from "react";
import BaseTableSearch from "@/shared/components/table/base.table.search";
import BaseTableHeader from "@/shared/components/table/base.table.header";
import BaseTableBody from "@/shared/components/table/base.table.body";

interface componentProps {
    tableData: IBaseTableData
}

export default function BaseTable({tableData}: Readonly<componentProps>) {
    const [sortedData, setSortedData] = useState(tableData.data);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSort = (column: string, direction: "asc" | "desc") => {
        const sorted = [...sortedData].sort((a, b) => {
            if (a[column] < b[column]) return direction === "asc" ? -1 : 1;
            if (a[column] > b[column]) return direction === "asc" ? 1 : -1;
            return 0;
        });
        setSortedData(sorted);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const filtered = tableData.data.filter((row) =>
            Object.values(row).some((value) =>
                value.toString().toLowerCase().includes(query.toLowerCase())
            )
        );
        setSortedData(filtered);
    };

    const handleSelect = (id: string) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };

    const filteredData = searchQuery
        ? sortedData.filter((row) =>
            Object.values(row).some((value) =>
                value.toString().toLowerCase().includes(searchQuery.toLowerCase())
            )
        )
        : sortedData;

    return (
        <div className="w-full">
            <BaseTableSearch onSearch={handleSearch} />
            <div className="overflow-hidden border rounded shadow">
                <BaseTableHeader columns={tableData.columns} onSort={handleSort} />
                <div className="overflow-y-auto" style={{ maxHeight: "400px" }}>
                    <div className="table w-full table-fixed">
                        <BaseTableBody
                            data={filteredData}
                            columns={tableData.columns}
                            onSelect={handleSelect}
                            selectedRows={selectedRows}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}