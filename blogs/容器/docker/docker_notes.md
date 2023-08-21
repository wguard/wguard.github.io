---
title: Docker环境的部署安装
date: 2022-07-29
sidebar: 'auto'
categories:
 - 容器化
tags:
 - 容器化
---

::: tip 介绍
Docker环境的部署安装
:::

#### Docker命令学习资料

```markdown
https://macrozheng.github.io/mall-learning/#/reference/docker_command
```

#### Docker的安装

1. 安装yum-utils

```shell
yum install -y yum-utils device-mapper-persistent-data lvm2
```

2. 为yum源添加docker仓库位置

```shell
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

2. 安装docker

```shell
yum install docker-ce
```

2. 启动docker

```shell
systemctl start docker
systemctl enable docker
```

#### Docker安装nacos

1. nacos 低版本安装

```shell
# nacos版本
https://hub.docker.com/r/nacos/nacos-server/tags

# 拉取nacos镜像
docker pull nacos/nacos-server:2.0.2

# 创建文件夹
mkdir -p /mydata/nacos/logs/
mkdir -p /mydata/nacos/conf/

# 修改配置文件，可以添加数据库配置
vi /mydata/nacos/conf/application.properties

# 运行nacos 
docker  run \
--name nacos-server -d \
-p 8848:8848 \
-p 9848:9848 \
-p 9849:9849 \
--privileged=true \
--restart=always \
-e JVM_XMS=256m \
-e JVM_XMX=256m \
-e MODE=standalone \
-e PREFER_HOST_MODE=hostname \
-v /mydata/nacos/logs:/home/nacos/logs \
-v /mydata/nacos/conf/application.properties:/home/nacos/conf/application.properties \
nacos/nacos-server:2.0.2
```

```sh
# application.properties 配置
server.contextPath=/nacos
server.servlet.contextPath=/nacos
server.port=8848
 
spring.datasource.platform=mysql
db.num=1
db.url.0=jdbc:mysql://rm-bp1bx657u8n11g351do.mysql.rds.aliyuncs.com:3306/mall4cloud_nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC
db.user.0=wusheng
db.password.0=Qaz147852@

 
nacos.cmdb.dumpTaskInterval=3600
nacos.cmdb.eventTaskInterval=10
nacos.cmdb.labelTaskInterval=300
nacos.cmdb.loadDataAtStart=false
management.metrics.export.elastic.enabled=false
management.metrics.export.influx.enabled=false
server.tomcat.accesslog.enabled=true
server.tomcat.accesslog.pattern=%h %l %u %t "%r" %s %b %D %{User-Agent}i
nacos.security.ignore.urls=/,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/v1/auth/login,/v1/console/health/**,/v1/cs/**,/v1/ns/**,/v1/cmdb/**,/actuator/**,/v1/console/server/**
nacos.naming.distro.taskDispatchThreadCount=1
nacos.naming.distro.taskDispatchPeriod=200
nacos.naming.distro.batchSyncKeyCount=1000
nacos.naming.distro.initDataRatio=0.9
nacos.naming.distro.syncRetryDelay=5000
nacos.naming.data.warmup=true
nacos.naming.expireInstance=true
```

#### Docker安装mysql

```shell
# mysql版本


mdkir -p /mydata/mysql/log
mdkir -p /mydata/mysql/data
mdkir -p /mydata/mysql/conf

 docker run \
 -p 3307:3306 --name mysql \
 -v /mydata/mysql/log:/var/log/mysql \
 -v /mydata/mysql/data:/var/lib/mysql \
 -v /mydata/mysql/conf:/etc/mysql \
 -e MYSQL_ROOT_PASSWORD=root \
 -d mysql:latest
```

#### Docker安装Redis

```shell
# redis版本
https://hub.docker.com/_/redis?tab=tags

# 拉取镜像
docker pull redis:6.2.6

# 创建文件
mkdir -p /mydata/redis/redis.conf
mkdir -p /mydata/redis/data

# 运行容器
docker run \
-p 6379:6379 --name redis \
-v /mydata/redis/redis.conf:/mydata/redis/data \
-v /mydata/redis/data:/data \
--restart=always \
-d redis:6.2.6
```

#### Docker安装pgsql

docker run --name pgsql12 -e POSTGRES_PASSWORD=postgres -p 5432:5432 -v /Users/wusheng/DockerData/pgsql/data:/var/lib/postgresql/data  -v /Users/wusheng/DockerData/pgsql/postgresql.conf:/var/lib/postgresql/data/postgresql.conf  -v /Users/wusheng/DockerData/pgsql/pg_hba.conf:/var/lib/postgresql/data/pg_hba.conf  -d postgres:12

### elasticsearch安装

```
docker pull elasticsearch:7.17.8

docker run \
-d \
--name elasticsearch -p 9200:9200 -p 9300:9300 \
-e "discovery.type=single-node" \
-v $PWD/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \
-v $PWD/data:/usr/share/elasticsearch/data \
-v $PWD/logs:/usr/share/elasticsearch/logs \
-v $PWD/plugins:/usr/share/elasticsearch/plugins \
elasticsearch:7.17.8
```

### kibana安装

```
docker pull
docker run --name some-kibana -e ELASTICSEARCH_URL=http://some-elasticsearch:9200 -p 5601:5601 -d kibana
```

### Mariadb安装

```
docker pull mariadb:10.5.11

docker run \
-d \
-p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=mysql \
-v $PWD/data:/var/lib/mysql \
-v $PWD/conf/my.cnf:/etc/mysql/my.cnf \
mariadb:10.5.11
```

