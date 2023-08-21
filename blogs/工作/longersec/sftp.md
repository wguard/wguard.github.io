## SFTP协议

> [文档地址](https://datatracker.ietf.org/doc/html/draft-ietf-secsh-filexfer-13)

#### 4. 基本数据格式

通过安全连接传输的数据包为以下的格式

```html
uint32           length
byte             type
uint32           request-id
... type specific fields ...
```

##### length

长度是