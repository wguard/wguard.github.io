---
title: 常用笔记
date: 2022-01-22
sidebar: 'auto'
---

::: tip
常用命令
:::

##### rpm相关命令

```
# 查看rpm包
rpm -qa | grep java

# 卸载rpm
rpm -e --nodeps java*

# 安装rpm包
rpm -ivh * --nodeps --force
```

#####  自制ISO相关命令

```
打成ISO命令
mkisofs -o PSB-V1.0.x86_64.iso -input-charset utf-8 -b isolinux/isolinux.bin -c isolinux/boot.cat -no-emul-boot -boot-load-size 4 -boot-info-table -R -J -v -T -joliet-long  /opt/autoPackage/ISO

只下载rpm包
yum -y install --downloadonly  --downloaddir=/opt/autoPackage/ISO/Packages/ wget
```

##### masscan命令详细参数

```
-p 《ports,–ports 《ports》》 指定端口进行扫描
–banners 获取banner信息，支持少量的协议
–rate 《packets-per-second》 指定发包的速率
-c 《filename》, --conf 《filename》 读取配置文件进行扫描
–echo 将当前的配置重定向到一个配置文件中
-e 《ifname》 , --adapter 《ifname》 指定用来发包的网卡接口名称
–adapter-ip 《ip-address》 指定发包的IP地址
–adapter-port 《port》 指定发包的源端口
–adapter-mac 《mac-address》 指定发包的源MAC地址
–router-mac 《mac address》 指定网关的MAC地址
–exclude 《ip/range》 IP地址范围黑名单，防止masscan扫描
–excludefile 《filename》 指定IP地址范围黑名单文件
–includefile，-iL 《filename》 读取一个范围列表进行扫描
–ping 扫描应该包含ICMP回应请求
–append-output 以附加的形式输出到文件
–iflist 列出可用的网络接口，然后退出
–retries 发送重试的次数，以1秒为间隔
–nmap 打印与nmap兼容的相关信息
–http-user-agent 《user-agent》 设置user-agent字段的值
–show [open,close] 告诉要显示的端口状态，默认是显示开放端口
–noshow [open,close] 禁用端口状态显示
–pcap 《filename》 将接收到的数据包以libpcap格式存储
–regress 运行回归测试，测试扫描器是否正常运行
–ttl 《num》 指定传出数据包的TTL值，默认为255
–wait 《seconds》 指定发送完包之后的等待时间，默认为10秒
–offline 没有实际的发包，主要用来测试开销
-sL 不执行扫描，主要是生成一个随机地址列表
–readscan 《binary-files》 读取从-oB生成的二进制文件，可以转化为XML或者JSON格式.
–connection-timeout 《secs》 抓取banners时指定保持TCP连接的最大秒数，默认是30秒。
```

#####  git命令打包

```
cd 
vim .git-credentials

https://{username}:{password}@github.com #gitlab或github地址
git config --global credential.helper store
```

#####   **配置npm国内镜像**

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
npm install -g @vue/cli
```

#####  maven配置

```
<localRepository>D:\Path\Maven\repo</localRepository>


<mirror>
	<id>alimaven</id>
	<name>aliyun maven</name>
	<url>http://maven.aliyun.com/nexus/content/groups/public/</url>
	<mirrorOf>central</mirrorOf>        
</mirror>
```

##### 删除ssh连接记录

```java
cat ~/.ssh/known_hosts
```

##### 配置iptables

```
iptables -L -t nat  //查看

iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 22 -j REDIRECT --to-port 10022
iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 23 -j REDIRECT --to-port 10023
iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 21 -j REDIRECT --to-port 10021
iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 12288 -j REDIRECT --to-port 10022
iptables -t nat -A POSTROUTING -o eth1 -s 192.168.168.0/24 -j MASQUERADE

iptables-save
```



```
#!/bin/bash
nohup java  -Dfile.encoding=utf-8  -Xverify:none -jar /opt/dlgateway/portable-web.jar > /opt/logs/portable-web.log 2>&1 &
nohup java  -Dfile.encoding=utf-8  -Xverify:none -jar /opt/dlgateway/powergateway.jar > /opt/logs/powergateway.log 2>&1 &
nohup /opt/dlgateway/bin/sshproxy  > /opt/logs/sshproxy.log 2>&1 &
nohup /opt/dlgateway/bin/telproxy  > /opt/logs/telproxy.log 2>&1 &
nohup /opt/dlgateway/bin/ftproxy  > /opt/logs/ftpproxy.log 2>&1 &
nohup /opt/dlgateway/bin/project > /opt/logs/project.log 2>&1 &
nohup /opt/dlgateway/bin/hwport-monitor -start > /opt/logs/hwport-monitor.log 2>&1 &
nohup /opt/dlgateway/bin/icsproxy > /opt/logs/icsproxy.log 2>&1 &
nohup /opt/dlgateway/bin/pcap > /opt/logs/pcap.log 2>&1 &
nohup /opt/dlgateway/bin/usb-mode > /opt/logs/usb-mode.log 2>&1 &
nohup /opt/dlgateway/bin/usb-tran-serial > /opt/logs/usb-tran-serial.log 2>&1 &
nohup /opt/dlgateway/bin/net_protect -c  > /opt/logs/net_protect.log 2>&1 &
nohup /opt/dlgateway/bin/kvmrec  > /opt/logs/kvmrec.log 2>&1 &
nohup /usr/local/virusengine/virusengine start > /opt/logs/virusengine.log 2>&1 &
nohup /opt/dlgateway/bin/serial  > /opt/logs/serial.log 2>&1 &
nohup /opt/dlgateway/bin/kvm-mode > /opt/logs/kvm-mode.log 2>&1 &
nohup /opt/dlgateway/bin/com-mode > /opt/logs/com-mode.log 2>&1 &
/opt/dlgateway/sh/iptablesConfig.sh
cd /opt/dlgateway/bin/ &&  nohup ./usbotgd start > /opt/logs/usbotgd.log 2>&1 &
cd /opt/dlgateway/bin/LsFinger && nohup ./LsFinger > /opt/logs/LsFinger.log  2>&1 &
#nohup /opt/dlgateway/sh/startup.sh 2>&1 & 
exit 0
```

```
ssh root@localhost
ssh sysadm@localhost

ssh secadm@localhost

iptables -A INPUT -p tcp --dport 60100:60200 -j ACCEPT
iptables -A OUTPUT -p tcp --sport 60100:60200 -j ACCEPT
iptables-save

CREATE DATABASE IF NOT EXISTS portable_gateway;
use portable_gateway;



opkg install dosfstools
```

#### node-sass报错

```
//首先清除我们已经安装过的版本：
　npm uninstall node-sass 
　npm uninstall sass-loader
　npm uninstall style-loader
　
// 安装对应的版本
　npm i node-sass@4.13 --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/ 
　npm install sass-loader@7.3.1 --save-dev　　　
　npm install style-loader --save-dev
　
　npm版本
　6.14.10
　
　npm cache clean -f
　npm -g install npm@版本号

startup -m standalone

npm install -g cnpm --registry=https://registry.npm.taobao.org


```

#### 线上数据库

```
rm-bp1bx657u8n11g351do.mysql.rds.aliyuncs.com:3306
wusheng
Qaz147852@


链接：https://pan.baidu.com/s/1YuTG_BkF8A8pb9S523lZZg 
提取码：m7gi
```

### 图灵学院资料

```
图灵学院第四期
https://pan.baidu.com/s/1JbzeeLY1imD0zmbMRf253A
qi8t
```

