/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Cloudinary domain
        port: '',
        pathname: '/dj493l0jy/image/upload/**', // Path pattern for Cloudinary images
        search: '',
      },
    ],
  },
};

export default nextConfig;
