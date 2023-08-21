改密升级sql

```
CREATE TABLE `lsblj_change_password_file_dump` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `change_time` datetime DEFAULT NULL COMMENT '改密时间',
  `policy_name` varchar(255) DEFAULT NULL COMMENT '策略名称',
  `file_name` varchar(255) DEFAULT NULL COMMENT '文件名称',
  `size` double DEFAULT NULL COMMENT '文件大小',
  `path` varchar(255) DEFAULT NULL COMMENT '文件路径',
  `policy_id` int(11) DEFAULT NULL COMMENT '策略id',
  `unzip_password` varchar(255) DEFAULT NULL COMMENT '解压密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

CREATE TABLE `lsblj_change_password_policy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT 'ä»»åŠ¡åç§°',
  `status` smallint(6) DEFAULT 1 COMMENT '0ç¦1å¯ç”¨',
  `file_id` int(11) NOT NULL DEFAULT 0,
  `changetype` smallint(6) NOT NULL DEFAULT 0 COMMENT 'æ”¹å¯†æ–¹å¼0ä¸åŒå¯†ç 1ç›¸åŒå¯†ç 2æŒ‡å®šç›¸åŒå¯†ç ',
  `exec_method` int(11) NOT NULL DEFAULT 1 COMMENT 'æ‰§è¡Œæ–¹å¼0æ˜¯æ‰‹åŠ¨,1å®šæ—¶,2æ˜¯å‘¨æœŸ',
  `exec_datetime` varchar(20) NOT NULL DEFAULT '0000-00-00' COMMENT 'æ‰§è¡Œæ—¶é—´',
  `exec_cycle` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0åˆ†é’Ÿ 1å°æ—¶ 2å¤© 3å‘¨ 4æœˆ',
  `internal` smallint(6) NOT NULL DEFAULT 1 COMMENT 'é—´éš”',
  `end_datetime` varchar(20) NOT NULL DEFAULT '0000-00-00' COMMENT 'ç»“æŸæ—¶é—´',
  `description` varchar(2048) NOT NULL DEFAULT '' COMMENT 'æè¿°',
  `allow_root` tinyint(1) NOT NULL DEFAULT 1 COMMENT 'ä¼˜å…ˆä½¿ç”¨ç‰¹æƒè´¦å·æ”¹å¯†',
  `allow_change_root` tinyint(1) NOT NULL DEFAULT 1 COMMENT 'å…è®¸ä¿®æ”¹ç‰¹æƒè´¦å·å¯†ç ',
  `password` varchar(255) DEFAULT '' COMMENT 'æŒ‡å®šå¯†ç ',
  `type` varchar(255) DEFAULT NULL,
  `department` int(11) NOT NULL DEFAULT 1 COMMENT 'éƒ¨é—¨id',
  `last_exec_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT 'ä¸Šæ¬¡æ‰§è¡Œæ—¶é—´',
  `pwd_length` tinyint(1) DEFAULT 8 COMMENT 'æœ€å°å¯†ç é•¿åº¦',
  `task_id` int(11) DEFAULT NULL COMMENT '定时任务id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;




update mysql.user set authentication_string=password('lsblj') where user='lsblj' and Host ='localhost';


ssl_certificate "/opt/test/blj.crt";
ssl_certificate_key "/opt/test/blj.key";
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers HIGH:!aNULL:!MD5;        
ssl_prefer_server_ciphers on;
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;
```



### 改密测试用例

| 用例名称 | 使用SSH通过特权账号修改Linux系统密码                         |
| :------- | ------------------------------------------------------------ |
| 用例编号 | 1                                                            |
| 测试目的 | 堡垒机可以通过root用户登陆目标机器，可通过命令行的形式修改用户密码。 |
| 预置条件 |                                                              |
| 测试步骤 |                                                              |
| 预期结果 |                                                              |
| 备注     |                                                              |
|          |                                                              |

