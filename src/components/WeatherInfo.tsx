import { useEffect, useState } from "react";
import Datetime from "./Datetime";
import getWsConnection from "@utils/getWsConnection";

export default function WeatherInfo() {
  const [data, setData] = useState<{
    temperature: number;
    humidity: number;
    timestamp: string;
  } | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    const ws = getWsConnection();

    ws.onopen = () => {
      setIsConnected(true);
    };

    ws.onmessage = event => {
      const parsed = JSON.parse(event.data);
      setData(parsed);
    };

    ws.onerror = err => {
      console.error("WebSocket error:", err);
    };

    return () => ws.close();
  }, []);

  return (
    <main className="mx-auto w-full max-w-3xl px-4 pb-12">
      <h1 className="font-semibold text-skin-accent mb-4">Live Sensor Data</h1>
      {data && isConnected ? (
        <div className="p-4 border rounded-lg shadow-md flex flex-col items-center justify-center">
          <p className="text-skin-base">
            🌡 Temperature:{" "}
            <span className="font-semibold">{data.temperature}°C</span>
          </p>
          <p className="text-skin-base">
            💧 Humidity: <span className="font-semibold">{data.humidity}%</span>
          </p>
          <Datetime
            pubDatetime={data.timestamp}
            modDatetime={data.timestamp}
            size="sm"
            className="text-sm"
          />
        </div>
      ) : (
        <p className="text-lg text-skin-base">
          Connection Status:{" "}
          <span
            className={`font-semibold ${isConnected ? "text-green-500" : "text-red-500"}`}
          >
            {isConnected ? "Connected" : "Disconnected"}
          </span>
        </p>
      )}
    </main>
  );
}
