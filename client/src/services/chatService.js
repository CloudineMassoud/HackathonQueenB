import api from "./api";

export default async function sendUserInput(message) {
  const res = await api.post("/api/chat/message", { message });

  return res.data;
}
