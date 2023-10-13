/** Routas del modulo de Productos */
const { Router } = require( 'express' );

const router = Router();

/** Definidas las rutas del modulo de productos */
// http://localhost:4001/api/products/
router.get( '/', ( req, res ) => {
    res.json({
        products: [ 
            { nombre: 'Naranjas', precio: 14 },
            { nombre: 'Manzanas', precio: 7 }
        ]
    });
});

module.exports = router;