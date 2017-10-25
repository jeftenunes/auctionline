'use strict';
module.exports = () => {
  const AuctionStatus = Object.freeze({
    Started: { description: 'Started' },
    Finished: { description: 'Finished' }
  });

  return AuctionStatus;
};