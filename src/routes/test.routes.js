import Router from 'express';

const testRoutes = Router();

testRoutes.get("/test",(req,res) => {
    return res.status(200).json({respuesta:"Hola Mundo"});
});
export default testRoutes;