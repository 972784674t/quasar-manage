/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js
/* eslint-env node */

module.exports = function (ctx) {
  // 选择性加载electron启动文件
  const electron = ctx.mode.electron ? 'electron' : ''
  const productName = 'quasar-manage'
  const version = '0.0.1'
  return {
    // https://quasar.dev/quasar-cli/supporting-ts
    supportTS: false,

    // https://quasar.dev/quasar-cli/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://quasar.dev/quasar-cli/boot-files
    boot: [
      electron,
      'i18n',
      'axios',
      'main',
      'permission'
    ],

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: [
      'app.css'
    ],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'fontawesome-v5',
      'material-icons' // optional, you are not bound to it
    ],

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      publicPath: process.env.NODE_ENV === 'production' ? '/quasar-manage/' : '/',
      vueRouterMode: 'hash', // available values: 'hash', 'history'

      // transpile: false,

      // Add dependencies for transpiling with Babel (Array of string/regex)
      // (from node_modules, which are by default not transpiled).
      // Applies only if "transpile" is set to true.
      transpileDependencies: [
        'vue-echarts',
        '@kangc'
      ],

      // rtl: false, // https://quasar.dev/options/rtl-support
      // preloadChunks: true,
      showProgress: false,
      gzip: true,
      analyze: true,

      // sourcemap
      productionSourceMap: false,

      // Options below are automatically set depending on the env, set them if you want to override
      // extractCSS: false,

      // https://quasar.dev/quasar-cli/handling-webpack
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        })
      }
    },

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      https: false,
      port: 8888,
      open: true // opens browser window automatically
    },

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
    framework: {
      iconSet: 'material-icons', // Quasar icon set
      lang: 'en-us', // Quasar language pack
      config: {},

      // Possible values for "importStrategy":
      // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
      // * 'all'  - Manually specify what to import
      importStrategy: 'auto',

      // For special cases outside of where "auto" importStrategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //

      components: [
        'QSpinnerGrid'
      ],

      directives: [
        'ClosePopup',
        'Ripple'
      ],

      // Quasar plugins
      plugins: [
        'LoadingBar',
        'Dialog',
        'Notify',
        'Cookies',
        'QAjaxBar',
        'TouchPan',
        'QMenu',
        'AppFullscreen'
      ]
    },

    // animations: 'all', // --- includes all animations
    // https://quasar.dev/options/animations
    animations: [],

    // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      pwa: false
    },

    // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW
      manifest: {
        name: 'Quasar App',
        short_name: 'Quasar App',
        description: 'A Quasar Framework app',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    electron: {
      bundler: 'builder', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'quasar-manage',
        // this is a configuration passed on
        // to the underlying Webpack
        // devtool: 'source-map',
        win: {
          // 图标一定不能太大，一定不能太大，一定不能太大。。。。。。。。。。。。。。。。
          icon: 'build/icon/icon.ico',
          publisherName: 'quasar-manage', // 程序名称
          target: [
            {
              target: 'nsis',
              arch: [
                'ia32'
              ]
            }
          ],
          publish: [
            // {
            //   provider: 'generic', // 自己配置的更新服务器要选generic
            //   url: 'http://updateServer:prop/updata/download'
            // }
          ]
        },
        nsis: {
          // 是否一键安装，建议为 false，可以让用户点击下一步、下一步、下一步的形式安装程序，如果为true，当用户双击构建好的程序，自动安装程序并打开，即：一键安装（one-click installer）
          oneClick: false,
          // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowElevation: true,
          // 允许修改安装目录，建议为true，是否允许用户改变安装目录，默认是不允许。
          allowToChangeInstallationDirectory: true,
          // 安装图标。--必须为.ico文件
          installerIcon: 'build/icon/icon.ico',
          // 卸载图标。
          // uninstallerIcon: './build/icon/linux-512x512.png',
          // 安装时头部图标。
          // installerHeaderIcon: 'build/icon/logo.png',
          // 创建桌面图标。
          createDesktopShortcut: true,
          // 创建开始菜单图标。
          createStartMenuShortcut: true,
          // electron中LICENSE.txt所需要的格式，并非是GBK，或者UTF-8，LICENSE.txt写好之后，需要进行转化，转化为ANSI。
          license: 'LICENSE.txt',
          // 网络安装程序（nsis-web）的默认设置。
          differentialPackage: true,
          // 控制面板中的卸载程序显示名称。
          uninstallDisplayName: `${productName}${version}`,
          // 是否显示辅助安装程序的安装模式安装程序页面（选择按机器还是按用户）。或者是否始终按所有用户（每台计算机）安装。
          perMachine: true,
          // 默认安装路径。
          include: 'build/installer.nsh'
        }
      },

      // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: true,

      extendWebpack (/* cfg */) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      }
    }

  }
}
