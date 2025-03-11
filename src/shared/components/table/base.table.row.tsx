interface componentProps {
    row: { id: string; [key: string]: string | number };
    columns: string[];
    onSelect: (id: string) => void;
    isSelected: boolean;
}

export default function BaseTableRow({row, columns, onSelect, isSelected}: Readonly<componentProps>) {
    return (
        <div
            className={`md:table-row hover:bg-gray-100 ${isSelected ? "bg-blue-100" : ""}`}
            onClick={() => onSelect(row.id)}
        >
            {columns.map((column) => (
                <div key={`${row.id}-${column}`} className="md:table-cell block md:py-2 px-2 py-1 md:border-b border-gray-300">
                    <span className="md:hidden text-gray-600" >{column}: </span>
                    {row[column]?.toString() || ""}
                </div>
            ))}
            <div className="md:table-cell block p-2 border-b border-gray-300">
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