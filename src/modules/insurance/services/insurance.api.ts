import type BaseDynamicTableDataInterface from "@/shared/components/dynamic-table/interfaces/base.dynamic.table.data.interface";
import apiInstance from "@/shared/utils/api.utils";

const insuranceApi: {
    index: (params?: object) => Promise<{data: BaseDynamicTableDataInterface}>;
    forms: () => Promise<{data: object[]}>;
    submit: (data: object) => Promise<unknown>;
} = {
    index: (params: object = {}) => apiInstance.get(process.env.INSURANCE_LIST_API!, {params}),
    forms: () => apiInstance.get(process.env.INSURANCE_FORMS_API!),
    submit: (data: object) => apiInstance.post(process.env.INSURANCE_REQUEST_STORE_API!, data)
}

export default insuranceApi