1. 

2. 下载镜像

   ```bash
   docker pull registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g:latest
   ```

3. 启动oracle

   ```bash
   docker run \
   -e JAVA_OPTS="-Xms256m -Xmx256m" \
   -p 1521:1521 \
   --privileged=true \
   --restart=always \
   --name oracle_11g \
   --mount source=oracle_vol,target=/home/oracle/app/oracle/oradata \
   -d registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
   ```

4. 登录oracle

   ```bash
   # 进入oracle实例
   docker exec -it oracle-11g /bin/bash
   # 切换到root账户（默认进入之后是oracle账户）
   su
   # 密码
   helowin
   # 编辑环境变量 添加以下内容
   echo "
   export ORACLE_HOME=/home/oracle/app/oracle/product/11.2.0/dbhome_2
   export ORACLE_SID=helowin
   export PATH=$ORACLE_HOME/bin:$PATH" >> /etc/profile
   # 刷新环境变量
   source /etc/profile
   # 创建软链接
   ln -s $ORACLE_HOME/bin/sqlplus /usr/bin
   # 切换到oracle用户，登录sqlplus
   su - oracle
   sqlplus /nolog
   # 修改sys、system用户密码
   conn /as sysdba
   alter user system identified by system;
   alter user sys identified by system;
   alter profile default limit PASSWORD_LIFE_TIME UNLIMITED;
   ```

   