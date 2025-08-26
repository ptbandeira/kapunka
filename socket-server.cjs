const { createServer } = require('http');
const { Server } = require('socket.io');

const port = process.env.SOCKET_PORT || 3001;
const server = createServer();

const io = new Server(server, {
  path: '/api/socketio',
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('message', (msg) => {
    socket.emit('message', {
      text: `Echo: ${msg.text}`,
      senderId: 'system',
      timestamp: new Date().toISOString()
    });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });

  socket.emit('message', {
    text: 'Welcome to WebSocket Echo Server!',
    senderId: 'system',
    timestamp: new Date().toISOString()
  });
});

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}`);
});

