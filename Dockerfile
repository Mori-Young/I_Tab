# 基础镜像
FROM nginx
# 元数据
LABEL author="mori"
# 为镜像新增一层存储层
# 这层的修改就是修改原有的nginx的默认配置文件
RUN echo  "server { \
            listen 80; \
            server_name localhost; \
            index index.html; \
            rewrite /home /; \
            location / { \
                root /var/www/html; \
            } \
        }" > etc/nginx/conf.d/default.conf \
    && mkdir -p /var/www/html

# 新增一层
# 这一层主要是将镜像上下文中的打包结果(dist)迁移到新一层/var/www/html文件中
COPY dist/ /var/www/html/

# 声明暴露的端口，HTTP默认端口80
EXPOSE 80
