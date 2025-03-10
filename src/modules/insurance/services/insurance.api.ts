import type BaseDynamicTableDataInterface from "@/shared/components/dynamic-table/interfaces/base.dynamic.table.data.interface";
import apiInstance from "@/shared/utils/api.utils";

const insuranceApi: {
    index: (params?: object) => Promise<{data: BaseDynamicTableDataInterface}>;
    forms: () => Promise<{data: object[]}>;
} = {
    index: (params: object = {}) => apiInstance.get(process.env.INSURANCE_LIST_API!, {params}),
    forms: () => apiInstance.get(process.env.INSURANCE_FORMS_API!)
}

export default insuranceApi