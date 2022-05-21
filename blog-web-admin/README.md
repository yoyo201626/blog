# blog-web-admin

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### dockerfile build 
```docker build -t q1090858499/blog-web-admin:v1 .```
注意这句 --link=blog:blog 映射IP到外部容器名称，即此容器内使用blog对应要访问的IP，也对应要访问的其他容器
```docker run  -dit --name blog-web-admin --restart=always -p 8080:8080  --link=blog:blog q1090858499/blog-web-admin:v1```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
