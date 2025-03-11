import {ChangeEvent, useState} from "react";

interface componentProps {
    onSearch: (query: string) => void;
}

export default function BaseTableSearch({onSearch}: Readonly<componentProps>) {
    const [query, setQuery] = useState("");

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search..."
                className="p-2 border border-gray-300 bg-white rounded w-full"
            />
        </div>
    );
}