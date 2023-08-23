import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/hi", (req: Request, resp: Response) => {
  console.log("serving /hi ...");
  const respJson = {
    msg: "Hello from the server!!",
  };
  resp.json(respJson);
});

const port = 3000;
app.listen(port, () => {
  console.log(`App server listening on PORT ${port}`);
});
