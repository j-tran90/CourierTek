import express from 'express';

const router = express.Router();
export default router;

import {DisplayContactPage, DisplayHomePage} from '../Controller/index'

/* GET home page. */
router.get('/', DisplayHomePage); 

/* GET contact page. */
router.get('/contact', DisplayContactPage); 

module.exports = router;
