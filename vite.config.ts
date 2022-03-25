import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    }
  },
  css: {
    preprocessorOptions: {
      sass: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': 'red',
        },
      },
    }
  },
  // server: {
  //   port: 300,
  //   host: '0.0.0.0',
    // proxy: {
    //   '/api': {
    //     target: 'http://159.75.118.xxx:5000',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    //   '/Api': {
    //     target: 'http://106.14.120.xxx:3002',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace(/^\/Api/, "api"),
    //   },
    // }
  // }
})
