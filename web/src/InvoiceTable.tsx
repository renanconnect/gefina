import InvoiceRow from "./InvoiceRow.tsx";
import { Invoice } from "./invoiceType.ts";

interface InvoicetableProps {
    datas: Invoice[];
}
export default function InvoiceTable(props: InvoicetableProps) {
    return <table>
        <thead>
            <th>Cliente</th>
            <th>Valor</th>
            <th>Emissão</th>
            <th>Vencimento</th>
            <th>Status</th>
        </thead>
        <tbody>
            {props.datas.map((invoice) => {
                return <InvoiceRow 
                key={invoice.id} 
                data={invoice} 
                />
            })}
        </tbody>
    </table>
};