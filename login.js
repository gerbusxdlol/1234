export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        
        // Prosty warunek logowania (w prawdziwej aplikacji sprawdzaj dane w bazie)
        if (username === 'admin' && password === 'admin123') {
            return res.status(200).json({ success: true });
        } else {
            return res.status(401).json({ success: false });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}
