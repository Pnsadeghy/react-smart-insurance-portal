import type IBaseTableData from "./interfaces/base.table.data.interface";
import BaseLoaderApi from "@/shared/components/loader/base.loader.api";
import BaseSpinner from "@/shared/components/spinner/base.spinner";
import BaseTable from "./base.table";
import {useState} from "react";

interface componentProps {
    api: () => Promise<{data: IBaseTableData}>
}

export default function BaseTableLoader({api}: Readonly<componentProps>) {

    const [tableData, setTableData] = useState<IBaseTableData>();

    const onSuccess = (data: object) => {
        setTableData(data as IBaseTableData);
    }

    return (
        <BaseLoaderApi apiAction={api}
                       success={onSuccess}
                       loader={<BaseSpinner className="h-40" />}>
            {tableData && <BaseTable tableData={tableData} />}
        </BaseLoaderApi>
    );
}