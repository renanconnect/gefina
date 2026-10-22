import { statusLabel } from "./utils.ts"
import { Invoice } from "./invoiceType.ts";

interface InvoiceRowProps {
    data: Invoice;
}

export default function InvoiceRow(props: InvoiceRowProps) {
    return <tr>
        <td>{props.data.customers.name}</td>
        <td>R$ {props.data.amount.toFixed(2)}</td>
        <td>{props.data.issuedDate}</td>
        <td>{props.data.dueDate}</td>
        <td>{statusLabel(props.data.status)}</td>
    </tr>
};