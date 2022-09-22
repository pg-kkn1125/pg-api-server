const uWs = new WebSocket("ws://localhost:5001/uws");
const board = document.querySelector("#board");
const box = document.querySelector(".box");
const btn = document.querySelector("#btn");

uWs.onopen = (e) => {
  console.log(e);
  box.classList.add("active");
};
uWs.onmessage = (e) => {
  if (e.data instanceof Blob) {
    const reader = new FileReader();
    reader.readAsBinaryString(e.data);
    reader.onload = () => {
      // 해석된 데이터 받음
      console.log(reader.result);
      board.innerHTML = reader.result;
    };
  } else {
    board.innerHTML = e.data;
  }
};
uWs.onclose = (e) => {
  console.log(e);
};
uWs.onerror = (e) => {
  console.log(e);
  box.classList.remove("active");
};

const handleSendServer = () => {
  const data = {
    name: "kimson",
    age: 25,
    gender: 1,
  };

  const jsonData = JSON.stringify(data);
  const binaryData = jsonData
    .split("")
    .map((json) => json.charCodeAt(0).toString(2));
  const encoder = new TextEncoder();
  const encodedBinaryData = encoder.encode(binaryData);
  console.log(encodedBinaryData);
  uWs.send(encodedBinaryData);
};

btn.addEventListener("click", handleSendServer);
