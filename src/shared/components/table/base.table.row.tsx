interface componentProps {
    row: { id: string; [key: string]: string | number };
    columns: string[];
    onSelect: (id: string) => void;
    isSelected: boolean;
}

export default function BaseTableRow({row, columns, onSelect, isSelected}: Readonly<componentProps>) {
    return (
        <div
            className={`table-row hover:bg-gray-100 ${isSelected ? "bg-blue-100" : ""}`}
            onClick={() => onSelect(row.id)}
        >
            {columns.map((column) => (
                <div key={`${row.id}-${column}`} className="table-cell p-2 border-b">
                    {row[column]?.toString() || ""}
                </div>
            ))}
            <div className="table-cell p-2 border-b">
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onSelect(row.id)}
                    className="cursor-pointer"
                />
            </div>
        </div>
    );
}