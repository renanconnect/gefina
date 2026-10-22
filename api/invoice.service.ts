type IvoiceStatus = "paid" | "pending";

interface Invoice {
  id: number;
  amount: number;
  status: IvoiceStatus;
  issuedDate: string;
  dueDate: string;
  customers: {
    id: number;
    name: string;
    email: string;
  };
}

const invoices: Invoice[] = [
  {
    id: 1,
    amount: 100,
    status: "paid",
    issuedDate: "2026-10-07",
    dueDate: "2026-11-05",
    customers: {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com"
    }
  },
  {
    id: 2,
    amount: 200,
    status: "pending",
    issuedDate: "07-10-2026",
    dueDate: "05-11-2026",
    customers: {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com"
    }
  },
  {
    id: 3,
    amount: 300,
    status: "paid",
    issuedDate: "07-10-2026",
    dueDate: "05-11-2026",
    customers: {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com"
    }
  }
];

export function findAllInvoices() {
  return invoices;
}

export function findInvoiceById({ id }: { id: number }) {
  return invoices.find((inv) => inv.id === id);
}
