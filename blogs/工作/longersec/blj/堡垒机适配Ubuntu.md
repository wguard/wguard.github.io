# 堡垒机适配Ubuntu23.10

## 一、安装依赖

1. 下载依赖

   ```shell
   #!/bin/bash
   
   # 要检查和安装的软件包列表
   packages=("build-essential" "pango1.0-tools" "uuid-dev" "libxcb1-dev" "libx11-dev" "libwebsockets-dev" "libvncserver-dev" "libtelnet-dev" "libtool" "libcurl" "cmake" "automake" "g++" "g--" "mariadb-server" "nginx" "openjdk-8-jdk" "nmap" "ntpdate" "redis-server" "nginx" "mariadb-server-10.3" "mariadb-common" "mariadb-client" "mariadb-server-core-10.3" "libcurl4" "libmysqlclient20" " libtiff5" "libgdk-pixbuf2.0-0" "libcups2" "libgdk-pixbuf2.0-0" "libgtk2.0-0" "libjpeg-turbo8-dev" "librsvg2-2" "libgnutls28-dev" "zlib1g-dev" "libssl-dev" "zlib1g-dev" "libsystemd-dev" "pkg-config" "libpulse-dev" "libcups2-dev" "libpcsclite-dev" "libcairo2-dev" "libcurl4-openssl-dev" "libpango1.0-dev" "libavcodec-dev" "libavformat-dev" "libavutil-dev" "libvorbis-dev" "libvncserver-dev" "libwebp-dev" "libswscale-dev" "libtool")
   
   # 检查并安装软件包
   check_and_install_packages() {
       for package in "${packages[@]}"; do
           if ! dpkg -l | grep -q $package; then
               echo "$package 未安装，正在下载并安装..."
               sudo apt-get install --download-only $package -y
               if [ $? -eq 0 ]; then
                   echo "$package 安装成功"
               else
                   echo "安装 $package 失败"
               fi
           else
               echo "$package 已安装"
           fi
       done
   }
   
   # 调用检查和安装函数
   check_and_install_packages
   
   sudo apt-get install --download-only -y libtool
   sudo apt-get install --download-only -y nginx
   ```

## 二、预编译依赖组件

1. 编译安装libssh2

   ```shell
   # 1. 下载libssh2
   wget https://192.168.30.44/f/a0PU7/libssh2-1.11.0.tar.gz --no-check-certificate
   
   # 2. 解压
   tar -zxvf libssh2-1.11.0.tar.gz
   
   # 3. 编译
   cd libssh2-1.11.0/
   mkdir build
   cd build
   cmake .. -DCMAKE_INSTALL_PREFIX=/usr/local/libssh2
   make -j4
   make install
   
   echo "/usr/local/libssh2/lib" >> /etc/ld.so.conf
   ```

2. 编译安装freerdp 2.9.0

   ```shell
   # 1. 下载freerdp2
   wget https://192.168.30.44/f/bk3So/freerdp-2.9.0.tar.gz --no-check-certificate
   
   # 2. 解压
   tar -zxvf freerdp-2.9.0.tar.gz
   
   # 4. 编译
   mkdir -p ./freerdp-2.9.0/build
   cd ./freerdp-2.9.0/build
   
   cmake .. -DCMAKE_CXX_COMPILER=/usr/bin/g++ -DCMAKE_C_COMPILER=/usr/bin/gcc -DCMAKE_INSTALL_PREFIX=/usr/local/freerdp2 -DWITH_CLIENT=ON -DWITH_CAIRO=ON -DCHANNEL_URBDRC=OFF -DWITH_CLIENT_SDL=OFF
   
   make -j4
   make install
   ```