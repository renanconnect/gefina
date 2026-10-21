import {Router} from 'express';
import { findAllInvoices, findInvoiceById } from './invoice.service.ts';

const router = Router();

router.get('/api/invoices', (req, res) => {
    const invoices = findAllInvoices();
    res.status(200).json(invoices);
});

router.get('/api/invoices/:id', (req, res) => {
    const invoiceId = Number(req.params.id);
    const invoice = findInvoiceById({ id: invoiceId });
    if (!invoice) {
        return res.status(404).json({ error: 'Invoice not found' });
    }
    res.status(200).json(invoice);
    return invoice;
});

export default router;