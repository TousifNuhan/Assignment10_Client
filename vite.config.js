import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     'https://assignment10-eight.vercel.app': {
  //       target: 'https://assignment10-eight.vercel.app',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\https://assignment10-eight.vercel.app/, '')
  //     }
  //   }
  // }
})



// export default defineConfig({

// });

