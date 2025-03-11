import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    env: {
        INSURANCE_LIST_API: '/api/insurance/forms/submissions',
        INSURANCE_FORMS_API: '/api/insurance/forms',
        INSURANCE_REQUEST_STORE_API: '/api/insurance/forms/submit'
    }
};

export default withNextIntl(nextConfig);
