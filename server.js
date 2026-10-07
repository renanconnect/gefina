import express from 'express';
express();
const app = express();
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

app.listen(3000);