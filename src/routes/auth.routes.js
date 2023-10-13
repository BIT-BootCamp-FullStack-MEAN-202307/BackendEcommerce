/** Routas del modulo de Autenticacion */
const { Router } = require( 'express' );

const router = Router();

// http://localhost:4001/api/auth/
router.get( '/', ( req, res ) => {
    res.json({
        user: 'DrPapito',
        id: 'ioif78045ugny784',
        email: 'dr@papito.co'
    });
});

module.exports = router;