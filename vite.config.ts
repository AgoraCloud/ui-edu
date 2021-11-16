import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import { exit } from 'process'

// import {esbuildCommonjs} from '@originjs/vite-plugin-commonjs'

const SRC_PATH = path.resolve(__dirname, './src/')

// console.log(process.env)
// console.log(process.env.npm_lifecycle_event)

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const proxyTarget = process.env.PROXY_TARGET
  console.log("COMMAND", command)
  if (!proxyTarget && command !== 'build') {
    console.error("NO PROXY TARGET DEFINED")
    console.warn("please set an ENV variable PROXY_TARGET=https://agoracloud.YOURDOMAIN.com")
    exit()
  }

  return {
    plugins: [
      reactRefresh(),
      // typescript({
      //   tsconfig: './tsconfig.json'
      // })
    ],
    root: SRC_PATH,
    resolve: {
      alias: {
        'app': path.resolve(__dirname, './src/app'),
        '@styles': path.resolve(__dirname, './src/app/styles'),
        "@nestjs/swagger": path.resolve(__dirname, './src/polyfill'),
        "swagger-ui-express": path.resolve(__dirname, './src/polyfill'),
        "fastify-swagger": path.resolve(__dirname, './src/polyfill'),
        "cache-manage": path.resolve(__dirname, './src/polyfill'),
        "class-transformer/storage": "class-transformer"
      },
      dedupe: [
        "class-transformer",
        "reflect-metadata",
        "class-validator"
      ]
    },
    build: {
      outDir: '../build',
      emptyOutDir: true,
      chunkSizeWarningLimit: 1000,
      minify: false
    },
    server: {
      proxy: {
        '/api': {
          target: proxyTarget,
          changeOrigin: true,
          cookieDomainRewrite: ""
        },
      },
      fs: {
        allow: ['/home/marc/Desktop/projects/mars-man/models', '..']
      }
    },
    /**
     * 
    optimizeDeps: {
      exclude: [
        "class-transformer/storage",
        // "mobx",
        // this is to handle swagger commonjs
        // "@nestjs/swagger",
        "swagger-ui-express",
        "fastify-swagger",
        "cache-manager"
      ]
    }
     */

  }
})

