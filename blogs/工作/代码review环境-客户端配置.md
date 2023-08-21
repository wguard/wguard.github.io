### 客户端环境配置

以windows客户端环境为例，MacOS环境需要参考Windows环境的指引做适当的调整。

- 安装git命令行工具：https://git-scm.com/downloads

- 安装python 

  下载： https://www.python.org/downloads/

  安装的过程中可以选择把 python.exe的路径加入到Path中。

  安装完成后，新开一个command, 执行python命令，检查否能正常进入到python交互式命令行模式。

- 安装git-review 命令行工具: 

  ```
  pip install git-review
  ```

  安装完成后检查是否能正常启动：

  ```
  $ git review -h
  usage: git review [OPTIONS] ... [BRANCH]
  
  A git command for submitting branches to Gerrit.
  ......
  
  ```

  

### 账号注册

访问```http://192.168.1.71:8080/static/index.html#/login``` 使用个人对应的公司邮箱注册，注册好后联系bingma同步用户。

备注：注册的时候需要使用的是完整的email地址，比如：zhangsan@longersec.com, 登录内部系统使用的实际的账号是：zhangsan

### 登录gerrit

- 修改 hosts文件(C:\Windows\System32\drivers\etc\hosts)
	新增一行配置：
	
	```
	192.168.1.41 git.longersec.com
	```
- 使用注册账号登录gerrit, 登录地址：```https://git.longersec.com:8443/```

### 登录后设置 gerrit

- 配置ssh pub key
  - 个人设置（settings）->SSH Keys, 粘贴ssh pub key的内容
	
- 配置ssh config

  ssh config 文件位于用户的home目录，比如：C:\Users\ponytp\\.ssh\config

  在config file增加下面的配置项（其中 IdentityFile 替换成自己的 ssh private key路径）：

  ```
  Host 192.168.1.41
    IdentityFile C:\\Users\\ponytp\\.ssh\\id_rsa_2048_ls_dev
    
  Host git.longersec.com
    IdentityFile C:\\Users\\ponytp\\.ssh\\id_rsa_2048_ls_dev
  ```

- 设置go env(前端开发同学不用配置)
  
  在命令行下执行下列命令
  
  ```
  go env -w GONOPROXY=git.longersec.com
  go env -w GOPRIVATE=git.longersec.com
  go env -w GOPROXY=https://goproxy.cn,direct
  ```

- 尝试clone 代码到本地

  ```
  git clone ssh://username@git.longersec.com:29418/common.git
  ```
  
  注意，使用ssh ,不用使用 http/https 方式，username替换成自己的gerrit用户名
  
- 初始化本地仓库的review 信息
  
  在本地project 目录下，执行 git review -s
  
  ```
  $ git review -s
  ssh://ponytp@git.longersec.com:29418/common.git did not work. Description: ponytp@git.longersec.com: Permission denied (publickey).
  fatal: Could not read from remote repository.  (默认情况会使用本机的登录名来连接gerrit,会产生错误，忽略即可)
  
  Please make sure you have the correct access rights
  and the repository exists.
  Could not connect to gerrit.
  Enter your gerrit username: bingma (这里手工输入gerrit的正确用户名)
  Trying again with ssh://bingma@git.longersec.com:29418/common.git
  Creating a git remote called 'gerrit' that maps to:
          ssh://bingma@git.longersec.com:29418/common.git
  
  This repository is now set up for use with git-review. You can set the
  default username for future repositories with:
    git config --global --add gitreview.username "bingma"
  
  ```
  
  也可以设置全局的gitreview.usernam配置:
  ```
  git config --global --add gitreview.username "bingma"
  ```
  
- 提交代码
  
  修改代码后commit（和正常的git操作一致，但不要执行git push） 然后执行 ```git review``` 提交代码:
  
  ```
  $ git status
  Changes not staged for commit:
    (use "git add/rm <file>..." to update what will be committed)
    (use "git restore <file>..." to discard changes in working directory)
          deleted:    cmd/bh_backend/config.go
          modified:   cmd/bh_backend/main.go
  
  $ git add .
  
  $ git commit -m "move Config to main.go"
  [master 38f82c4] move Config to main.go
   3 files changed, 18 insertions(+), 9 deletions(-)
   create mode 100644 cmd/bh_backend/bh_backend.log
   delete mode 100644 cmd/bh_backend/config.go
  
  $ git review
  remote:
  remote: Processing changes: refs: 1, new: 1
  remote: Processing changes: refs: 1, new: 1, done
  remote:
  remote: SUCCESS
  remote:
  remote:   https://git.longersec.com:8443/c/backend/+/61 move Config to main.go [NEW]
  remote:
  To ssh://git.longersec.com:29418/backend.git
   * [new branch]      HEAD -> refs/for/master
  
  ```
  
  代码提交后，在 gerrit --> changes --> open下面会出现一个新的提交，这个提交需要评审后才能合入到代码仓库。
  
- code review
  
    通知评审人，对提交做评审
  

type ParamTestConnection struct {

​    DeviceId  int64 `valid:"id,required"`

​    AccountId int64 `valid:"id,required"`

}





func TestConnection(sess *session.Session, param *dto.ParamTestConnection) {

​    logger.Debug("in TestConnection")

​    dbs := GetDBSession()



​    account, err := db.LoadOne[model.Account](dbs, t.DeviceAccount, param.AccountId)

​    if err != nil {

​        return nil, err

​    }



​    net.DialTimeout("tcp", "111", time.Duration(timeout)*time.Second)



}

  

  

  

  

  

  

