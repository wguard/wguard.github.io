# 麒麟v10服务器版制作mariadb的rpm包

## 背景

我们项目使用的mariadb的版本为麒麟官方源提供的，源上的mariadb版本太低，漏洞有很多。

以下是我的环境信息

| 名称 | 版本                                                         |
| ---- | ------------------------------------------------------------ |
| cpu  | 架构：           loongarch64<br/>字节序：         Little Endian<br/>CPU:             4<br/>在线 CPU 列表：  0-3<br/>每个核的线程数： 1<br/>每个座的核数：   4<br/>座：             1<br/>NUMA 节点：      1<br/>CPU 系列：       Loongson-64bit<br/>型号名称：       Loongson-3A5000-HV<br/>CPU MHz：        2500.00<br/>BogoMIPS：       5000.00<br/>L1d 缓存：       256 KiB<br/>L1i 缓存：       256 KiB<br/>L2 缓存：        1 MiB<br/>L3 缓存：        16 MiB<br/>NUMA 节点0 CPU： 0-3<br/>标记：           cpucfg lam ual fpu lsx lasx complex crypto lvz lbt_x86 lbt_arm lbt_mips |
| 系统 | Kylin Linux Advanced Server release V10 (Lance)              |

## 编译步骤

1. 安装依赖包

   ```shell
   yum install -y gawk bison bzip2-devel boost-devel coreutils checkpolicy binutils gnutls-devel cmake gcc-c++ gcc make libcurl-devel ncurses-devel systemtap-sdt-devel git libevent-devel flex cracklib-devel glibc-devel zlib-devel pcre2-devel systemd-devel java-1.8.0-openjdk-devel krb5-devel libaio-devel xz-devel libxml2-devel lz4-devel lzo-devel unixODBC-devel openssl-devel pam-devel pkgconfig  readline-devel policycoreutils-python-utils snappy-devel libzstd-devel numactl-devel
   ```

2. 下载源码包

   [下载地址](...)

3. 编译

   ```shell
   cmake . -DCMAKE_INSTALL_PREFIX=/usr/ -DRPM=ON -DMYSQL_DATADIR=/var/lib/mysql -DSYSCONFDIR=/etc -DMYSQL_USER=mysql -DWITH_INNOBASE_STORAGE_ENGINE=1 -DWITH_ARCHIVE_STORAGE_ENGINE=1 -DWITH_BLACKHOLE_STORAGE_ENGINE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DWITHOUT_MROONGA_STORAGE_ENGINE=1 -DWITH_DEBUG=0 -DWITH_READLINE=1 -DWITH_SSL=system -DWITH_ZLIB=system -DWITH_LIBWRAP=0 -DENABLED_LOCAL_INFILE=1 -DMYSQL_UNIX_ADDR=/var/lib/mysql/mysql.sock -DDEFAULT_CHARSET=utf8mb4 -DDEFAULT_COLLATION=utf8mb4_general_ci -DWITH_NUMA=ON
   ```

4. 执行完成编译命令会在当前目录下生成CPackSourceConfig.cmake

   ```shell
   cpack -G RPM --config ./CPackSourceConfig.cmake
   ```

5. 执行cpack命令会在本地生成





参考资料

https://github.com/osquery/osquery/issues/6230

https://cmake.org/cmake/help/v3.12/module/CPackRPM.html#variable:CPACK_RPM_PACKAGE_SOURCES

https://cmake.org/cmake/help/v3.12/module/CPackRPM.html#packaging-of-sources-srpm

