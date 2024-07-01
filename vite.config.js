import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      devOptions: {
        enabled: true
      },
      registerType:'autoUpdate',
      manifest: {
        name: 'Fakecomm',
        short_name: 'fcomm',
        start_url: '/',
        display: 'standalone',
        description:"This is a Mock Ecommerce website with cart functionality the datas are coming from fakestore api",
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: "assets/icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/assets/icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/assets/icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/assets/icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ],
        screenshots: [
          {
           src: "/assets/scrnshtdsk.png",
            sizes: "1920x907",
            type: "image/png",
            form_factor: "wide",
            label: "Desktop"
          },
          {
           src: "/assets/scrnsht.png",
            sizes: "369x795",
            type: "image/png",
            label: "Mobile"
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif}'],
        // runtimeCaching: [
        //   {
        //     urlPattern: /^https:\/\/fakestoreapi\.com\/.*/,
        //     handler: 'NetworkFirst',
        //     options: {
        //       cacheName: 'api-cache',
        //       cacheableResponse: {
        //         statuses: [0, 200],
        //       },
        //       expiration: {
        //         maxEntries: 100,
        //         maxAgeSeconds: 24 * 60 * 60,
        //       },
        //     },
        //   },
        //   {
        //     urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
        //     handler: 'CacheFirst',
        //     options: {
        //       cacheName: 'image-cache',
        //       cacheableResponse: {
        //         statuses: [0, 200],
        //       },
        //       expiration: {
        //         maxEntries: 50,
        //         maxAgeSeconds: 7 * 24 * 60 * 60,
        //       },
        //     },
        //   },
        //   {
        //     urlPattern: /\.(?:js|css)$/,
        //     handler: 'StaleWhileRevalidate',
        //     options: {
        //       cacheName: 'static-resources',
        //       cacheableResponse: {
        //         statuses: [0, 200],
        //       },
        //     },
        //   },
        //   {
        //     urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        //     handler: 'CacheFirst',
        //     options: {
        //       cacheName: 'google-fonts-cache',
        //       expiration: {
        //         maxEntries: 10,
        //         maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
        //       },
        //       cacheableResponse: {
        //         statuses: [0, 200]
        //       }
        //     }
        //   },
        //   {
        //     urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
        //     handler: 'CacheFirst',
        //     options: {
        //       cacheName: 'gstatic-fonts-cache',
        //       expiration: {
        //         maxEntries: 10,
        //         maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
        //       },
        //       cacheableResponse: {
        //         statuses: [0, 200]
        //       },
        //     }
        //   },
        //   {
        //     urlPattern: ({ request }) => request.mode === 'navigate',
        //     handler: 'NetworkFirst',
        //     options: {
        //       cacheName: 'pages',
        //       cacheableResponse: {
        //         statuses: [0, 200],
        //       },
        //     },
        //   },
        // ],
        runtimeCaching:[{
          urlPattern:({url})=>{
            return url.pathname.startsWith('/')
          },
          handler:"CacheFirst",
          options:{
            cacheName:'app-cache',
            cacheableResponse:{
              statuses:[0,200]
            }
          }
        }]
      },
      
    })
  ],
  server:{
    port:5200
  }
})
