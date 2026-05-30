const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'leads.json');
app.use(cors());
app.use(express.json());
function readLeads(){ try { return JSON.parse(fs.readFileSync(DATA_FILE,'utf8')); } catch(e){ return []; } }
function writeLeads(leads){ fs.writeFileSync(DATA_FILE, JSON.stringify(leads,null,2)); }
app.get('/api/leads', (req,res)=> res.json(readLeads()));
app.post('/api/leads', (req,res)=> { const leads = readLeads(); const lead = {...req.body, createdAt:req.body.createdAt || new Date().toISOString()}; leads.unshift(lead); writeLeads(leads); res.status(201).json({ok:true}); });
app.get('/', (req,res)=> res.send('Mayuresh Portfolio Leads API is running'));
app.listen(PORT, ()=> console.log(`Leads API running on http://localhost:${PORT}`));