import apiInstance from "@/shared/utils/api.utils";

const fetchDynamicOptions = async (endpoint: string, method: string, dependsOnValue?: string) => {
    if (!dependsOnValue) return [];
    const response = await apiInstance({
        method,
        url: `${endpoint}?${dependsOnValue}`,
    });
    return response.data;
};

