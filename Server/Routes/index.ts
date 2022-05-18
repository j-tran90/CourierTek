import express from 'express';

const router = express.Router();
export default router;

import {DisplayContactPage, DisplayFeaturePage, DisplayHomePage, DisplayPricePage, DisplayPrivacyPage} from '../Controller/index'

router.get('/', DisplayHomePage); 
router.get('/feature', DisplayFeaturePage); 
router.get('/price', DisplayPricePage); 
router.get('/contact', DisplayContactPage); 
router.get('/privacy', DisplayPrivacyPage); 

module.exports = router;
