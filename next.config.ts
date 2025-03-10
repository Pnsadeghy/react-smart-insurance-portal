import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    env: {
        INSURANCE_LIST_API: '/api/insurance/forms/submissions',
        INSURANCE_FORMS_API: '/api/insurance/forms'
    }
};

export default withNextIntl(nextConfig);
