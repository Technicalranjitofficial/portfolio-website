/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  env:{
    PROJECT_ID: process.env.PROJECT_ID,
    DATASET:process.env.DATASET,
    URI:process.env.URI,
  }
}

module.exports = nextConfig



