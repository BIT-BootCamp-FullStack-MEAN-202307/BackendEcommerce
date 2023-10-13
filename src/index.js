require( 'dotenv' ).config();   
const
    express = require( 'express' ),
    app = express(),
    PORT = process.env.PORT || 4000,  
    cors = require( 'cors' ),
    { dbConection } = require( './config/mongo.config' );

app.use( cors() );          // Implementacion de un Middleware en Express

dbConection();

/** Rutas */
app.use( '/api/auth', require( './routes/auth.routes' ) );          // http://localhost:4001/api/auth
app.use( '/api/products', require( './routes/product.routes' ) );   // http://localhost:4001/api/products


/** Lanza el servidor en: http://localhost:4001  */
app.listen( PORT, () => {
    console.log( `Servidor  lanzado... express en el puerto ${ PORT }` );
} );

