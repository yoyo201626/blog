#基础镜像，这里选择的这个node 是因为build之后占用空间没有那么大
FROM node:14.17.1
# cd到app文件夹下
WORKDIR /app
#复制项目到工作目录中
COPY . .  

# 容器启动时执行的命令，类似npm run start
CMD ["/bin/bash", "-c", "yarn config set registry http://registry.npm.taobao.org/ && \ 
        yarn install && \
        npm run build && \
        node app.js"]
