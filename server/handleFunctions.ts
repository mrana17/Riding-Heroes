import http from "http";

import { createOrderDoc, OrderDoc, readOrderDoc } from "./db";

export const handleGET = async (
  request: http.IncomingMessage,
  response: http.ServerResponse,
  surname: string
) => {
  const orderDoc = await readOrderDoc(surname);
  if (!orderDoc) {
    response.statusCode = 404;
    response.end();
    return;
  }
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(orderDoc));
};

export const handlePOST = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const orderDoc = await parseJSONBody<OrderDoc>(request);

  const isSuccessful = await createOrderDoc(orderDoc);
  if (!isSuccessful) {
    response.statusCode = 400;
    response.end();
    return;
  }

  response.statusCode = 201;
  response.end();
};

const parseJSONBody = <T>(request: http.IncomingMessage): Promise<T> => {
  return new Promise((resolve) => {
    let json = "";
    request.on("data", (chunk) => {
      json += chunk;
    });
    request.on("end", () => {
      const body = JSON.parse(json);
      resolve(body);
    });
  });
};
