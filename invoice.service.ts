const invoices = [
    { id: 1, amount: 100, status: 'paid', issuedDate: '07-10-2026', dueDate: '05-11-2026', customers:{
        name: 'John Doe',
        email: 'john.doe@example.com'
    }},
    { id: 2, amount: 200, status: 'unpaid', issuedDate: '07-10-2026', dueDate: '05-11-2026', customers:{
        name: 'Jane Smith',
        email: 'jane.smith@example.com'
    }},
    { id: 3, amount: 300, status: 'overdue', issuedDate: '07-10-2026', dueDate: '05-11-2026', customers:{
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com'
    }}
];

export function findAllInvoices() {
    return invoices;
}

export function findInvoiceById({ id }: { id: number; }) {
     return invoices.find(inv => inv.id === id);
}