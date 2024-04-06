/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
    output: "standalone",
    compiler: {
        styledComponents: true
    },
    images: {
        remotePatterns:[
            {
                protocol: "https",
                hostname: "daisyui.com",
                port:"",
                pathname: "/images/stock/**"
            },
            {
                protocol: "https",
                hostname: "api.scryfall.com",
                port:"",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "cards.scryfall.io",
                port:"",
                pathname: "/**"
            }
        ]
    }
    
};

export default nextConfig;
