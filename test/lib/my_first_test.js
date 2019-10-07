var paymentApi = require('payment-api')
var assert = require('assert')

module.exports = {
    apiIsNotNull: function() {
        assert(paymentApi, "paymentApi should not be null")
    }
}
