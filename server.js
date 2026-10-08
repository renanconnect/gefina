import express from 'express';
express();

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
const app = express();
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.get('/api/invoices', (req, res) => {
    res.status(200).json(invoices);
});

app.get('/api/invoices/:id', (req, res) => {
    const invoiceId = parseInt(req.params.id);
    const invoice = invoices.find(inv => inv.id === invoiceId);
    if (!invoice) {
        return res.status(404).json({ error: 'Invoice not found' });
    }
    res.status(200).json(invoice);
});

app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

app.listen(3000);