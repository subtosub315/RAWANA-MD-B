const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined? "gzMwWLzS#F5TZ2U1McNRzAS9m64kpHUaaL_586Hry279ATCkIfAU":process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "mongodb://mongo:tYnFKXhcIPcKTDFWMNfLHlvmDqblxJQk@gondola.proxy.rlwy.net:46137",
GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDzyQ7tnQkquWX8bc1y9TE0auCHbC_QQO8",
tokenm: process.env.GITHUB_TOKEN || "false",
repo: process.env.GITHUB_REPO || "RAWANA-MD",
}; 
