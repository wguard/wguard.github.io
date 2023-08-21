### git源码安装

**安装依赖**

```
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel asciidoc
yum install gcc perl-ExtUtils-MakeMaker
```

**卸载git**

```
yum remove git
```

**下载git压缩包**

```
wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.32.0.tar.xz
```

**编译**

```
make prefix=/usr/local/git all
```

**安装**

```
make prefix=/usr/local/git install
```

**配置环境变量**

```
vi  /etc/profile

export GIT_HOME=/usr/local/git/bin
export PATH=$GIT_HOME:$PATH
```

