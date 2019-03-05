# frontend-admin-boilerplate

中后台集成解决方案

**功能点**

- 基于 typescript 构建
- 规范的目录结构
- 定义数据模拟方式
- 模拟菜单数据和用户数据
- 登录逻辑
- 页面标题配置
- 常用组件展示
- 常用页面展示
- 包含子菜单的页面展示
- 规范统一的设计与交互
- 命令行创建目录文件

**项目初始化**
``` bash
npm i --registry https://registry.npm.taobao.org
```

**项目启动**
```
npm run serve
```

**常见目录文件创建**
``` bash
npm run new:viewr test      => @/views/test/index.vue,  @/views/test/test.router.ts
npm run new:view test/ab    => @/views/test/ab.vue
npm run new:comp test/ab    => @/views/test/comps/Ab.vue
npm run new:dialog test/ab  => @/views/test/dialogs/Ab.vue 
npm run new:module test     => @/views/test/test.module.ts 
npm run new:api test        => @/apis/test.ts
```

**反向代理**


**编译文件**
``` bash
npm run build
```

**校验**
``` bash
npm run lint
```
