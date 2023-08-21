### 1. 开启保活

```java

new Thread(()->{
                while (true){
                    try {
                        Thread.sleep(6000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }

                    Buffer buffer = session.createBuffer(SshConstants.SSH_MSG_GLOBAL_REQUEST);
                    buffer.putString(Constants.KEEP_ALIVE_MSG);
                    buffer.putBoolean(true); // want-reply
                    // For once use session.request() instead of session.writePacket() to make the request.
                    try {
                        session.request(Constants.KEEP_ALIVE_MSG, buffer, 10000);
                    } catch (IOException e) {
                        e.printStackTrace();
                        return;
                    }

                    Buffer serverKeepAliveBuffer = term.getServerSession().getSession().createBuffer(SshConstants.SSH_MSG_GLOBAL_REQUEST);
                    serverKeepAliveBuffer.putString(Constants.KEEP_ALIVE_MSG);
                    serverKeepAliveBuffer.putBoolean(true);
                    try {
                        term.getServerSession().getSession().request(Constants.KEEP_ALIVE_MSG,serverKeepAliveBuffer,10000);
                    }catch (Exception e){
                        e.printStackTrace();
                        return;
                    }
                    serverKeepAliveBuffer.clear();
                }
            }).start();


    public static final String KEEP_ALIVE_MSG = "keepalive@openssh.com";


scp -P 12288 cLogin-2.0.war  root@192.168.1.110:/opt/lsblj/tomcat/webapps/cLogin.war

mvn package -DskipTests -P dist,release,rpm-prepare,rpm -Drat.skip=true -Dmaven.javadoc.skip=true

```

```
ps -ef
```

