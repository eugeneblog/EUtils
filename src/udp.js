const dgram = require("dgram");

class UdpClient {
  constructor(option = {}) {
    this.option = option;
    this.client = dgram.createSocket("udp4");
    this.bind();
    this.event_listen();
    this.event_message();
    this.event_close();
  }

  sendMsg(msg, targetIp) {
    const { port } = this.option;
    // msg 类型: string, Uint8Array, Buffer
    let message = Buffer.from(msg.buffer);
    this.client.send(
      message,
      0,
      message.length,
      port,
      targetIp,
      (err, bytes) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`客户端发送了 ${bytes} 字节数据`);
      }
    );
  }

  close(fn) {
    this.client.close(fn);
  }

  bind() {
    const { port, ip, brodcast } = this.option;
    this.client.bind(port, ip, () => {
      console.log(`socket已经绑定在 ${port}:${ip}`);
      this.client.setBroadcast(brodcast);
    });
  }

  event_listen() {
    this.client.on("listening", () => {
      const address = this.client.address();
      console.log(`服务器监听 ${address.address}:${address.port}`);
    });
  }

  event_message() {
    this.client.on("message", (msg, rinfo) => {
      // 接收的数据做个转换
      let data = Buffer.from(msg, "ascii").toString("hex");
      console.log(`接收到来自${rinfo.address}:${rinfo.port}数据: ${data}`);
      if (!data) {
        return;
      }
    });
  }

  event_close() {
    this.client.on("close", () => {
      console.log(`已关闭socket连接, 并已经停止监听消息`);
    });
  }
}

const udp_client = new UdpClient({
  ip: "0.0.0.0",
  port: 47808,
  brodcast: true
});

let msgArr = new Uint8Array([
  0x81,
  0x0b,
  0x00,
  0x0c,
  0x01,
  0x20,
  0xff,
  0xff,
  0x00,
  0xff,
  0x10,
  0x08
]);
let message = Buffer.from(msgArr.buffer);

udp_client.sendMsg(message, '192.168.255.255');

module.exports = {
  UdpClient
};
