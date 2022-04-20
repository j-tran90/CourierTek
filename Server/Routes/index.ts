import express from 'express';

const router = express.Router();
export default router;

import {DisplayHomePage} from '../Controller/index'

/* GET home page. */
router.get('/', DisplayHomePage); 

module.exports = router;
