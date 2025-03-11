"use client"

import insuranceApi from "@/modules/insurance/services/insurance.api";
import BaseTableLoader from "@/shared/components/table/base.table.loader";

export default function InsuranceTable() {
    return (
        <BaseTableLoader api={insuranceApi.index} />
    );
}