import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';
import specialRoutes from './routes/special.routes';
import routes from './routes';

dotenv.config();
const port = process.env.PORT || 3001;

// initializations
const app = express();

// settings
app.set('port', port); 

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize()); // need to initialize passport
passport.use(passportMiddleware)

// routes
app.get('/', (req, res) => {
    res.send(`the api is at http://localhost:${port}`);
});

app.use(authRoutes);
app.use(specialRoutes);
app.use('/', routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
  
  

export default app;