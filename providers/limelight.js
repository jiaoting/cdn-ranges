const bgpView = require('../utils/bgpview')

module.exports = () => {
  return bgpView(["22822", "23059", "26506","38622", "55429"])
}
