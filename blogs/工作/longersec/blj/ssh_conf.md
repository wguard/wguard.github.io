```
ssh 配置
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes

ssh-keygen -t rsa -b 2048



Cmnd_Alias BLJ_OPERATE_CMD =/sbin/reboot,/bin/ping,/sbin/ifconfig,/sbin/route,/sbin/iptables



// 文件权限
Cmnd_Alias TEST = /bin/cat /opt/lsblj/tomcat/logs/*,/bin/cat /var/log/*


blj_admin ALL=(root) BLJ_OPERATE_CMD,TEST


visudo -c


iptables -A INPUT -p tcp -m state --state NEW -m tcp --dport 12288 -j ACCEPT

String[] split = userPolicy.getAllow_ip().split("\n");
			if (split.length > 1){
				for (String s : split) {

					IpUtils.ipIsSpecifyRange(s,client_ip);
				}
			}

```

