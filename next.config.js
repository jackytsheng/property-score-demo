/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i2.au.reastatic.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
}
module.exports = nextConfig
