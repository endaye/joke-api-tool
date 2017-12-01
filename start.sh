git pull
npm install
NODE_ENV=production forever --uid "joke-server" -a start app.js
