/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/dashboard',
                destination: '/dashboard/home',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
