const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(instruments) {
  this.instruments = instruments;
};

InstrumentFamilies.prototype.bindEvents = function(){
PubSub.publish('Instruments:ready', this.instruments);


  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishInstrumentDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishInstrumentDetail = function(instrumentIndex){
  const selectedInstrument = this.instruments[instrumentIndex];
  PubSub.publish('Instrument:selected-instrument-ready', selectedInstrument)
};

module.exports = InstrumentFamilies;
