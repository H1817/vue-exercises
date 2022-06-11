### 仿微信静态页面 vue2.0 + vant 2.0
### 有首页，通讯录，发现，我的四个主页面，首页下有5个二级页面，剩下几个主页面没有写二级页面，没有动画过渡效果 
![img](https://user-images.githubusercontent.com/99640168/173088910-b17970ce-8b87-4571-b1f0-193658872c64.png)
##### bug：左上角徽标从消息页面返回后还会出来，用组件缓存（学习中）好像也不适合 ，路由跳转连续点击两次会报错多出来一个链接 
#####  bug：没用到vant里的Layout布局，用了大量margin,padding，div排版，代码冗余，里面的单元格可以用v-for生成的 …… 太多了不想改了👀 
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



