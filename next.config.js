/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  async rewrites () {
    return [
      {
        source: '/pe/servicios/consultoria-customer-relationship-management/',
        destination: '/localized_files_2/es_pe/servicios/crm/crm'
      }
    ]
  }
}

module.exports = nextConfig
