import express from 'express';

const router  = express.Router();

router.get("/perfil",auth,getProfile);


export default router;
