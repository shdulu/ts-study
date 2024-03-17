### 什么是 JWT?

JSON Web 令牌，是一个开放标准，它定义了一种**紧凑且自包含**的方式，用于在各方之间做为 JSON 对象安全地传输信息。由于此信息是经过数字签名的，因此可以被验证和信任。可以使用秘密（使用 HMAC 算法）或使用 RSA 或 ECDSA 的公用/专用密钥对对 JWT 进行签名。

通俗来说：JWT 就是通过 JSON 形式做为 web 应用中的令牌，用于在各方之间安全的将信息做为 JSON 对象传输，在数据传输的过程中还可以完成数据加密、签名等相关处理。

接下来我们来进行对比学习，在 JWT 之前，普遍是用传统的 session 来进行认证的。

### 传统的 Session 认证：

- Session 的作用：
  用于保存每个用户的专用信息;当用户访问时,服务器都会为每个用户分配唯一的 Session ID,而且当访问其他程序时可以从用户的 session 中取出该用户的数据为用户服务。

- Session 认证的缺点：

  1. 限制应用的扩展性：

     - 首先 http 协议本身是一种无状态的协议，而这就意味着如果用户向我们的应用提供了用户名和密码来进行用户认证，那么下一次请求时，用户还要再一次进行用户认证才行。

     - 因为根据 http 协议，我们并不能知道是哪个用户发出的请求，所以为了让我们的应用能识别是哪个用户发出的请求，我们只能在服务器存储一份用户登录的信息，这份登录信息会在响应时传递给浏览器，告诉其保存为 cookie,以便下次请求时发送给我们的应用，这样我们的应用就能识别请求来自哪个用户了,这就是传统的基于 session 认证。

     - 但是这种基于 session 的认证使应用本身很难得到扩展，当使用客户端进行登入，每个客户端都会在后端生成一个 Session ID 并且保存在服务器中，占用一定的内存，随着不同客户端用户的增加，服务器的开销会明显增大，从而限制应用的扩展性。

  2. session 是基于 cookie 进行用户识别的，cookie 如果被截获，用户很容易收到 **CSRF** 跨站请求伪造供给；

     如下图，在前后端分离的系统中，前端调用后端接口的时候，中间可能会经过很多的代理。而在前端的时候就开始携带 cookie，所以 cookie 就很容易被截获，从而拿着这个 cookie 登入，这就增大登入安全的风险性；

     ![请求链路图](https://mmbiz.qpic.cn/mmbiz_png/gPd0cicHqdDIlpBRShgm6CL7PI7CmRw90ZUrEFT77icuczq3atbhzOHVBN9ibYt5xlMIIviaicaCSicPlic2oGIypJH1A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

### 基于 JWT 认证

JWT 的认证方式完全是令牌的，而且是基于**客户端的存储，不是存储在服务端**的，这就很好的解决了基于传统 session 认证的内存占用问题。

和 session 相同的是都是由服务端进行认证，但是不同的是，存储是由客户端进行存储，也就是解决了 session 内存的问题。

![jwt认证流程](https://mmbiz.qpic.cn/mmbiz_png/gPd0cicHqdDIlpBRShgm6CL7PI7CmRw90T8utxS2smrIiaic1meXmibFp7wylHI9SwC28CksMNQwia69TGibUwBVJZdw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

### JWT 结构

<font color="#00dd00">包含了三个部分：</font>

1. Header (标头)
   通常有两部分组成：令牌类型（即 JWT）和所使用的签名算法，例如：HMAC、SHA256 或 RSA。使用 Base 64 编码组成 JWT 结构的第一部分（Base64 是一种编码，它是可以被翻译回原来的样子，并不是一种加密的过程）。

```json
{
    "alg" : HS256,   //签名算法
    "typ" : "JWT"    //令牌类型
}
```

2. Payload（有效载荷）
   令牌的第二部分是有效负载，它包含声明。声明是关于实体（通常是用户）和附加数据的语句。同样也是有 Base64 编码组成 JWT 结构的第二部分

```js
{
    "sub"  : "1234567890",   //账号
    "name" : "John Doe",     //用户名
    "admin":  true           //管理权限
}
```

注意：Payload 里面不要放用户的敏感信息，比如密码，因为在认证的过程中，还是会存在被截获的风险，虽然被截获，但是只能得到一些用户的一些简单的信息，并且就算被截获，也无法用截获的令牌去认证。

3. Signature（签名）
   前两个部分是用 Base64 编码的，前端可以通过解码知道里面的内容。要想创建签名部分，必须获得 Header 和 Payload 的编码，并且用 Header 中的签名算法，生成一个签名。

   而在登入时会有一个验签的过程，验签的过程就是为了保证 JWT 没有被篡改，不管是 Header、Payload，还是 Signature，一旦数据被修改，验签就不会通过。

   token 令牌就是一个字符串。JWT 通常格式：xxxxx.yyyyy.zzzzz Header.Payload.Signature

### Token 相对于 Cookie 的好处：

- 支持跨域访问：Cookie 是不允许垮域访问的，token 支持
- 无状态：token 无状态，session 是有状态的
- 去耦: 不需要绑定到一个特定的身份验证方案。Token 可以在任何地方生成，只要在你的 API 被调用的时候， 你可以进行 Token 生成调用即可
- 更适用于移动应用: Cookie 不支持手机端访问
- 性能: 在网络传输的过程中，性能更好
- 基于标准化: 你的 API 可以采用标准化的 JSON Web Token (JWT 这个).标准已经存在多个后端库（.NET, Ruby, Java,Python, PHP）和多家公司的支持（如：Firebase,Google, Microsoft）

### JWT 优势

- 内存占用小：由于 JSON 没有 XML 那么冗长，当它被编码时，它的大小也更小。
- 安全方面：JWT 可以使用 X.509 证书形式的公钥/私钥对进行签名。与签名 JSON 的简单性相比，使用 XML 数字签名签名在不引入隐藏的安全漏洞的情况下对 XML 进行签名是非常困难的。

参考文档：

[还分不清 Cookie、Session、Token、JWT？](https://mp.weixin.qq.com/s?__biz=MzI2OTQxMTM4OQ==&mid=2247521745&idx=4&sn=651afa24898ab9c3341150552121d84e&chksm=eae26083dd95e9952371995543f4bb5ae097c684f4fa773b42f0341982b3363f3d89f7b5f882)

[一文带你搞懂 JWT 常见概念 & 优缺点](https://zhuanlan.zhihu.com/p/530076389)


### JWT 原理

![JWT 原理](https://mmbiz.qpic.cn/mmbiz/QCu849YTaINNByhianvIbyv6ty0kZibaibDD4gMVPoWJ420z4XGJ18s7tBhiafzQqoR85ElAbwlRGjOicfg3PatfibTg/640?wx_fmt%3Dother%26wxfrom%3D5%26wx_lazy%3D1%26wx_co%3D1)

