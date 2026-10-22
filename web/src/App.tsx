import {Invoice} from './invoiceType.ts';

import InvoiceTable from './InvoiceTable.tsx';

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
                issuedDate: "2026-10-07",
                dueDate: "2026-11-05",
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
                issuedDate: "2026-10-07",
                dueDate: "2026-12-05",
                customers: {
                    id: 3,
                    name: "Bob Johnson",
                    email: "bob.johnson@example.com"
                }
            }
        ];

export default function App() {
    return <>
        <h1>Faturas</h1>
        <InvoiceTable datas={invoices} />
    </>;
}