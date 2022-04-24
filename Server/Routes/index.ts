import express from 'express';

const router = express.Router();
export default router;

import {DisplayContactPage, DisplayFeaturePage, DisplayHomePage, DisplayPricePage} from '../Controller/index'

router.get('/', DisplayHomePage); 
router.get('/feature', DisplayFeaturePage); 
router.get('/price', DisplayPricePage); 
router.get('/contact', DisplayContactPage); 

module.exports = router;
