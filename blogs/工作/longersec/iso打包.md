```
1. 数据库表 初始化
SET FOREIGN_KEY_CHECKS=0;
TRUNCATE t_acl;
TRUNCATE t_cmd_group;

TRUNCATE t_department;

TRUNCATE t_device;
TRUNCATE t_device_account;
TRUNCATE t_device_group;
TRUNCATE t_device_group_detail;

TRUNCATE t_favorite;
TRUNCATE t_message;
TRUNCATE t_message_user;

TRUNCATE t_policy;
TRUNCATE t_policy_account;
TRUNCATE t_policy_cmd_group;
TRUNCATE t_policy_device;
TRUNCATE t_policy_device_group;
TRUNCATE t_policy_priority;
TRUNCATE t_policy_user;
TRUNCATE t_policy_user_group;

TRUNCATE t_role;
TRUNCATE t_setting;

TRUNCATE t_user;
TRUNCATE t_user_group;
TRUNCATE t_user_group_detail;
TRUNCATE t_user_password_history;
TRUNCATE t_user_setting;

SET FOREIGN_KEY_CHECKS=1;
 

2.版本信息
openeuler 22.03_LTS_SP1
redis 6.2.7
mysql 8.0.29
es 





yum --downloadonly --downloaddir=./ install mysql redis6 nginx
```

### 版本信息

| 组件名称      | 版本          |
| ------------- | ------------- |
| openeuler     | 22.03_LTS_SP1 |
| redis         | 6.2.7         |
| mysql         | 8.0.29        |
| elasticsearch | 7.17.8        |
| nginx         | 1.21.5        |

#### 注意事项

