const host = import.meta.env.PUBLIC_WS_HOST;

const wsUrl = `wss://${host}`;

const getWsConnection = () => {
  return new WebSocket(wsUrl);
};

export default getWsConnection;
