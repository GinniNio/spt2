const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.get('/health', (req, res) => {
    res.json({
        status: '✅ Server running successfully',
        timestamp: new Date().toISOString(),
        port: 3001,
        frontendUrl: 'http://127.0.0.1:5500'
    });
});

app.get('/scrape', (req, res) => {
    console.log('📊 Scrape request received from:', req.get('origin'));
    const mockMatches = [
        {
            match: 'Arsenal vs Chelsea',
            time: '15:00',
            markets: {
                "1": 2.10,
                "X": 3.40,
                "2": 3.20,
                "1X": 1.35,
                "12": 1.25,
                "X2": 1.80,
                "Over 2.5": 1.75,
                "Under 2.5": 2.05
            }
        },
        {
            match: 'Liverpool vs Manchester City',
            time: '17:30',
            markets: {
                "1": 2.80,
                "X": 3.10,
                "2": 2.45,
                "1X": 1.50,
                "12": 1.35,
                "X2": 1.40,
                "Over 2.5": 1.60,
                "Under 2.5": 2.25
            }
        },
        {
            match: 'Real Madrid vs Barcelona',
            time: '20:00',
            markets: {
                "1": 2.50,
                "X": 3.20,
                "2": 2.90,
                "1X": 1.45,
                "12": 1.30,
                "X2": 1.70,
                "Over 2.5": 1.65,
                "Under 2.5": 2.15
            }
        }
    ];

    res.json({
        success: true,
        matches: mockMatches,
        timestamp: new Date().toISOString(),
        source: 'mock-testing-data',
        message: '🎯 Mock data loaded successfully'
    });
});

app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ success: false, error: err.message });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, '127.0.0.1', () => {
    console.log('🚀 Backend server started successfully!');
    console.log(`📍 Server URL: http://127.0.0.1:${PORT}`);
    console.log(`🔗 Frontend URL: http://127.0.0.1:5500`);
    console.log(`✅ Health check: http://127.0.0.1:${PORT}/health`);
    console.log(`📊 Test scraper: http://127.0.0.1:${PORT}/scrape`);
    console.log('');
    console.log('💡 Ready to receive requests from your betting pipeline!');
});
