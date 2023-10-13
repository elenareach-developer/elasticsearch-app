
const express = require('express');
const router = express.Router();



const { searchAsYouType, getStation, getStationByIdFID, createOrUpdateStation, getStationListWithSort } = require("../controllers/stationController")

router.get('/search', searchAsYouType)


router.get('/', getStation);

router.post('/create', createOrUpdateStation);

router.get('/:fid', getStationByIdFID)

router.post('/', getStationListWithSort)




module.exports = router