// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
 const nextConfig = {
    /* config options here */
    // async rewrites() {
    //     return [
    //     {   
    //         source: '/api/:path*',
    //         destination: 'http://127.0.0.1:8085/api/:path*',
    //         // destination: 'http://blog:8085/api/:path*',
    //         // destination: 'http://47.99.132.7:8085/api/:path*',
    //     },
    //     ]
    // },
    productionBrowserSourceMaps: true,
}
module.exports = nextConfig
