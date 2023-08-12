const bgpView = require('../utils/bgpview')

module.exports = () => {
  return bgpView(["12989", "18607", "20446", "33438"])
}
