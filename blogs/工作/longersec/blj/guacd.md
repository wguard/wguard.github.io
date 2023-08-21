### guacd实现流程

#### guacd_create_proc

创建一个新的后台进程来处理给定的协议，返回一个允许与创建的进程通信和监视的结构。

在子进程中，此函数不返回-整个子进程只是简单地终止。

 @param 协议
 正在为其创建此进程的客户端的协议。
 @返回
 一个新分配的进程结构，指向文件描述符
特定于指定协议的后台进程，或者为NULL
 无法创建进程。

#### guacd_exec_proc

通过加载该协议的客户端插件，开始对给定进程的协议特定处理。此函数不返回。

它使用特定于协议的处理程序初始化进程，然后运行直到 guacd_proc 的 fd_socket 关闭，将沿 fd_socket 接收的任何文件描述符添加为新用户。

#### guac_client_load_plugin

dlopen的使用： https://www.cnblogs.com/david-wei0810/p/6743662.html

使用对应于命名协议的插件提供的初始化方法 guac_client。这将在给定协议的插件中自动调用 guac_client_init。请注意，在将第一个用户（“所有者”）添加到客户端之前，可能不会建立连接。

#### guac_client_init

Guac 客户端初始化

#### guac_client_add_user

调用连接方法（join_handler）

将给定用户添加到已连接用户的内部列表中。未来对存储在 guac_client 中的广播套接字的写入也将写入此用户。这个 guac_client 的连接处理程序将被称为。

**参数：** `client` -将用户添加到\的代理客户端。 `user` -要添加的用户。 `argc` -传递给新用户的参数数量。 `argv` -一个字符串数组，包含正在传递的参数值。

**返回：** 如果用户添加成功，则为零，如果用户无法加入连接，则为非零。



#### guac_user_start

启动新用户的输入、输出线程。此功能将一直阻塞，直到用户断开连接。如果错误阻止输入/输出线程启动，guac_user_stop() 将在给定用户上调用。

**参数：** `parser` -用于处理来自给定用户的所有输入的 guac_parser。 `user` -应该启动其关联 I/O 传输线程的用户\。 `usec_timeout` -在关闭连接并出现错误之前等待给定用户指令的微秒数\。

**返回：** 如果 I/O 线程成功启动并且用户已断开连接，则为零；如果 I/O 线程无法启动，则为非零。





guac_user_input_thread

处理所有用户输入的线程，为接收到的指令调用事件处理程序\。





#### guac_parser_read

从给定的 guac_socket connection\ 中读取一条指令。这可能会导致从 guac_socket 读取额外的数据，这些数据在内部存储在缓冲区中以供将来解析\。未来对 guac_parser_read() 的调用将在从 guac_socket\ 读取之前从内部缓冲区读取。内部缓冲区中的数据可以通过 guac_parser_shift()\ 删除并在其他地方使用。如果读取指令发生错误，则返回非零，并适当设置 guac_error。 *参数：** *`parser` -guac_parser 从\读取指令数据。 `socket`——要使用的 guac_socket 连接。 `usec_timeout` -放弃前等待的最大微秒数\。

*返回：** *如果在允许的时间内读取了一条指令，则为零，如果没有指令可以读取，则为非零。如果由于超时而无法完全读取指令，在这种情况下 guac_error 将设置为 GUAC_STATUS_INPUT_TIMEOUT 并且需要对 guac_parser_read() 进行额外调用。

```
./configure  --prefix=/opt/lsblj/server  --with-init-dir=/opt/lsblj/server --disable-kubernetes --enable-shared --with-openssl && make clean && make -j4 && make install  && killall guacd && /opt/lsblj/server/guacd stop && /opt/lsblj/server/guacd start -LDEBUG
```

