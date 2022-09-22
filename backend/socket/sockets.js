const uWs = require("uWebSockets.js");
const { findAll } = require("./api/test");

uWs
  .App({})
  .ws("/uws", {
    idleTimeout: 32,
    maxBackpressure: 1024,
    maxPayloadLength: 512,
    compression: uWs.DEDICATED_COMPRESSOR_3KB,
    open: (ws, req) => {
      // console.log(ws);
      // console.log(req);
      console.log("open success");
      ws.send("start");
    },
    message: (ws, message, isBinary) => {
      if (isBinary) {
        const decoder = new TextDecoder();
        const decodedText = decoder.decode(message);
        const parsedData = decodedText
          .split(",")
          .map((bi) => String.fromCharCode(parseInt(Number(bi), 2)))
          .join("");

        console.log(parsedData);
        ws.send(parsedData, isBinary);
      } else {
        ws.send(message, isBinary);
      }
    },
    drain: (ws) => {
      console.log("WebSocket backpressure: ", ws.getBufferedAmount());
    },
    close: (ws, code, message) => {
      // console.log(ws);
      // console.log(code);
      // console.log(message);
      console.log("WebSocket closed");
    },
  })
  .get("/uws/api/users", (res, req) => {
    console.log(res);
    findAll(req, res);
    res.writeStatus(200).writeHEader("test", "yes").end("Hello there!");
  })
  .listen(5001, (socket) => {
    if (socket) {
      console.log("server listening on ws://localhost:5001");
    }
  });
