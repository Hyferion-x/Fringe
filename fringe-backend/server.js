require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const rt = require('file-stream-rotator');
const session = require('express-session');
const passport = require('./config/passport');

// Force model registration
require('./models/ContactMessage');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'fringe_secret',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// **Import routes**
const home = require('./routes/home');
const users = require('./routes/users');
const auth = require('./routes/auth');
const bookings = require('./routes/bookings');
const ticketOrders = require('./routes/ticketOrders');
const events = require('./routes/events');
const paymentsRouter = require('./routes/payments');
const notifications = require('./routes/notifications');
const shopOrders = require('./routes/shopOrders');
const merchandise = require('./routes/merchandise');
const cartRoutes = require('./routes/cart');
const contactMessages = require('./routes/contactMessages');

const port = process.env.PORT || 5001;
const { MONGO_URL } = process.env;

// **Generating Logs Middleware and Rotating Logs Daily**
const fileWriter = rt.getStream({ filename: 'middlewares/Logs/Error logs/errors.log', frequency: 'daily', verbose: true });
const successWriter = rt.getStream({ filename: 'middlewares/Logs/Success logs/success.log', frequency: 'daily', verbose: true });

// **Separate success and error request logging**
const skipSuccess = (req, res) => res.statusCode < 400;
const skipError = (req, res) => res.statusCode >= 400;

// **Error logging**
app.use(morgan('combined', { skip: skipSuccess, stream: fileWriter }));

// **Success logging**
app.use(morgan('combined', { skip: skipError, stream: successWriter }));

// **Database Connection**
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Database connection error:', err));

// **Routes**
app.use('/', home);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/bookings', bookings);
app.use('/api/ticketOrders', ticketOrders);
app.use('/api/events', events);
app.use('/api/payments', paymentsRouter);
app.use('/api/notifications', notifications);
app.use('/api/shopOrders', shopOrders);
app.use('/api/merchandise', merchandise);
app.use('/api/cart', cartRoutes);
app.use('/api/contactMessages', contactMessages);

// **Start server**
app.listen(port, () => {
  console.log(`🚀 Server is running on port: ${port}`);
  
});
