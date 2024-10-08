export const loadMessagesFromLocalStorage = () => {
  const messages = localStorage.getItem("messages");
  return messages ? JSON.parse(messages) : [];
};

export const saveMessageToLocalStorage = (message) => {
  const messages = loadMessagesFromLocalStorage();
  messages.push(message);
  localStorage.setItem("messages", JSON.stringify(messages));
};
