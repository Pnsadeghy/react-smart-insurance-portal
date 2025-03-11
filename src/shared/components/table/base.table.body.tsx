import BaseTableRow from "./base.table.row";
import { FixedSizeList } from "react-window";
import React from "react";

interface componentProps {
    data: { id: string; [key: string]: string | number }[];
    columns: string[];
    onSelect: (id: string) => void;
    selectedRows: string[];
}

export default function BaseTableBody({data, columns, onSelect, selectedRows}: Readonly<componentProps>) {
    return data.map((row, i) => (
        <BaseTableRow
            key={i}
            row={row}
            columns={columns}
            onSelect={onSelect}
            isSelected={selectedRows.includes(row.id)}
        />
    ));
}