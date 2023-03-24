import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// import dotenv from 'dotenv'

const server = process.env.PUBLIC_SERVER_URL
console.log("fdgd",server)

// const envPath = `.env.${lang}.local`
// dotenv.config({ path: envPath })

// https://astro.build/config
export default defineConfig({
  integrations: [react()]
});