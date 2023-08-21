```
1. 30 read

setenforce 0 && echo > /var/log/audit/audit.log

生成pp文件
cat  /var/log/audit/audit.log  |  audit2allow  -M  xxx-module
semodule -i  xxx-module.pp


cat  /var/log/audit/audit.log  |  audit2allow  -M  usb-module
semodule -i  usb-module.pp


cat  /var/log/audit/audit.log  |  audit2allow  -M  iptables-module
semodule -i  iptables-module


sed -i '/save 120 1/c\' /etc/redis/redis.conf
sed -i '/save 60 100/c\' /etc/redis/redis.conf
sed -i '/save 30 1000/c\save ""' /etc/redis/redis.conf
rm -rf /var/lib/redis/dump.rdb

sed -i '/appendonly yes/c\appendonly no' /etc/redis/redis.conf
sed -i '/appendfsync everysec/c\appendfsync no' /etc/redis/redis.conf
rm -rf /var/lib/redis/appendonly.aof
systemctl restart redis

```

