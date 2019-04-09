const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector('#instrument-info');
  const displayInstrument = new InstrumentInfoView(infoDiv);
  displayInstrument.bindEvents();

  const instrumentsData = new InstrumentFamilies(instrumentFamilyData);
  instrumentsData.bindEvents();


});
