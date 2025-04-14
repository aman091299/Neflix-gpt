/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:false,
  images: {
    domains: ['assets.nflxext.com', 'image.tmdb.org'],
  },
  devIndicators:  false, // disables the build spinner in dev
  
};

export default nextConfig; // Use export default instead of module.exports
