import express from "express";
import InvoiceRouter from "./invoice.route.ts";
import { join } from "path";

const app = express();

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "OK" });
});
app.use("/api/invoices", InvoiceRouter);


app.use(express.static(join(import.meta.dirname, '..', 'web', 'dist')));

app.use((_req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(Number(process.env.PORT));