import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     'http://localhost:5000': {
  //       target: 'http://localhost:5000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\http://localhost:5000/, '')
  //     }
  //   }
  // }
})



// export default defineConfig({

// });

