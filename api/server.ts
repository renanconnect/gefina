import express from "express";
import InvoiceRouter from "./invoice.route.ts";

express();

const app = express();

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "OK" });
});
app.use("/api/invoices", InvoiceRouter);
app.use((_req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(3000);
