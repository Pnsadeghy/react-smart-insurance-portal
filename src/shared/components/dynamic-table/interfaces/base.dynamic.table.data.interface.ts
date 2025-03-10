interface IBaseDynamicTableData {
    columns: string[];
    data: {[key: string]: unknown }[];
}

export default IBaseDynamicTableData;