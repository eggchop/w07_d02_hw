const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument:selected-instrument-ready', (evt) => {
    const instrument = evt.detail;
    this.render(instrument);
  });
};

InstrumentInfoView.prototype.render = function(instrument){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `Instrument: ${instrument.name}`;
  const infoParagraph2 = document.createElement('p');
  infoParagraph2.textContent = `Description: ${instrument.description}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
  this.container.appendChild(infoParagraph2);
};

module.exports = InstrumentInfoView;
