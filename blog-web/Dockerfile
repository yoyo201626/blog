#基础镜像，这里选择的这个node 是因为build之后占用空间没有那么大
FROM node:latest
# 指定制作我们的镜像的联系人信息（镜像创建者）
# MAINTAINER xiaojiu

# 将根目录下的文件都copy到container（运行此镜像的容器）文件系统的app文件夹下
# cd到app文件夹下
WORKDIR /app
# #复制package文件到工作目录
# COPY package*.json ./
# # 安装项目依赖包
# RUN yard install 
#复制项目到工作目录中
COPY . .  
# 安装项目依赖包
# RUN yarn install --registry https://registry.npm.taobao.org
# RUN npm run build
         
# 容器对外暴露的端口号
# EXPOSE 8889
# 容器启动时执行的命令，类似npm run start
CMD ["/bin/bash", "-c", "yarn config set registry http://registry.npm.taobao.org/ && \ 
        yarn install && \
        npm run build && \
        npm run start"]

# CMD ["/bin/bash", "-c", "npm run build && \ 
#         npm run start"]