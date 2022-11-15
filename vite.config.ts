import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleImport,{AntdResolve} from 'vite-plugin-style-import'
//import * as path from 'path' 如果不识别path用这个
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleImport({
      resolves:[
        AntdResolve()
      ]
    })
  ],
  resolve: {
    alias: {
      '@':path.resolve(__dirname,'./src')
    }
  }
})
