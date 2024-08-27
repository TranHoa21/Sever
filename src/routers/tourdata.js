import { Router } from 'express';
import express from 'express';

import uploadCloud from '../middleware/cloudinary.js'

import * as controllers from '../controllers/index.js'


const router = Router();

router.use(express.json());

router.post('/', uploadCloud.fields([
    { name: 'file', maxCount: 1 },
    { name: 'file_in_day', maxCount: 1 }
]), controllers.createTourData);
router.get('/:tourName', controllers.getTourDataByNameTour);







export default router;