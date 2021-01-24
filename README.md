<div align="center">
  <h1>Quasar-Manage</h1>
</div>
<p align="center">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
    <img src="https://img.shields.io/badge/vue-2.6.12-brightgreen.svg" alt="vue">
  <img src="https://img.shields.io/npm/v/quasar.svg?label=quasar">  <img src="https://img.shields.io/npm/v/%40quasar/extras.svg?label=@quasar/extras"> 
</p>

Quasar-Manage 是一款中后台前端解决方案：
- 基于 [Quasar](http://www.quasarchs.com/) 实现，[Quasar-ui](http://www.quasarchs.com/) 的设计规范来自 [Material Design](https://material.io/)
- 包含动态路由，动态缓存，权限验证等常用功能
- 兼容多端运行: SPA / Electron / Cordova
- 响应式设计，支持手机 / 平板 / 桌面 /小分辨率屏幕显示
- 包含 tagView 快捷导航、面包屑导航等 SPA 应用常用功能
- 简单的代码逻辑，多种自定义组件，高度可定制性（只有 1600 行代码）
- 完全开源及免费

当然如果你想使用基于```VUE-CLI```版本的：[Vue-Quasar-Manage](https://github.com/972784674t/vue-quasar-manage)

使用这个项目前您需要了解如下技术栈：

[ES6](https://es6.ruanyifeng.com/) | [Node.js](https://nodejs.org/en/) | [Webpack](https://www.webpackjs.com/) | [Vue](https://cn.vuejs.org/) | [Vuex](https://vuex.vuejs.org/zh/) | [Vue-Router](https://router.vuejs.org/zh/) | [Vuex](https://vuex.vuejs.org/zh/) | [Quasar-cli](http://www.quasarchs.com/start/quasar-cli) | [Axios](http://www.axios-js.com/) | [ESlint](https://eslint.bootcss.com/) | [Electron：如果需要](https://www.electronjs.org/)
### DEMO地址 

[Github](https://972784674t.github.io/quasar-manage/) | [Gitee 国内用户访问](http://incimo.gitee.io/quasar-manage)

![SPA](https://images.gitee.com/uploads/images/2020/1121/001642_63a6fa66_5663937.png "home.png")

![Electron](https://images.gitee.com/uploads/images/2021/0122/174410_adafb537_5663937.png "electron.png")

<p align="center">
    <img src="https://images.gitee.com/uploads/images/2021/0123/174943_5c56f9c7_5663937.png" alt="android">
</p>

### Electron
之后 Electron 版本的更新将在 Electron 分支进行，感谢 [CloudWoR](https://github.com/CloudWoR) 提供的支持

### 如何运行
请确保您的计算机已经安装了 ```Node.js``` 以及 ```git```，当前项目主要用于展示说明文档

1、克隆项目
```sh
## 克隆模板项目
git clone https://github.com/972784674t/quasar-manage-template.git
```
2、下载项目所需依赖
```yarn
yarn install
```
3、启动开发服务器
```yarn
## 运行 SPA 版本
quasar dev

## 运行 Electron 版本
quasar dev -m electron
```
### 如何打包
```sh
quasar build
```

## License

Copyright (c) 2015-present Razvan Stoenescu

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
