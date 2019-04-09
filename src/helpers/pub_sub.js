const PubSub = {
  publish: function(channel, payload){
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
    // console.log('publishing on channel:', channel);
  },

  subscribe: function(channel, callback){
    document.addEventListener(channel, callback);
        // console.log('listening on channel:', channel);
  }
}

module.exports = PubSub;
