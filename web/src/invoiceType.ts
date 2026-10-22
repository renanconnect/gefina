export type IvoiceStatus = "paid" | "pending";

interface Customer {
    id: number;
    name: string;
    email: string;
  }

export interface Invoice {
  id: number;
  amount: number;
  status: IvoiceStatus;
  issuedDate: string;
  dueDate: string;
  customers: Customer;
}