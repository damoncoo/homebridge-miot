const LightDevice = require('../LightDevice.js');
const Constants = require('../../../constants/Constants.js');
const PropFormat = require('../../../constants/PropFormat.js');
const PropUnit = require('../../../constants/PropUnit.js');
const PropAccess = require('../../../constants/PropAccess.js');


class PhilipsLightSpread1 extends LightDevice {
    constructor(miotDevice, name, logger) {
        super(miotDevice, name, logger);
    }


    /*----------========== DEVICE INFO ==========----------*/

    getDeviceName() {
        return 'Xiaomi Philips Zhirui Spread';
    }

    getMiotSpecUrl() {
        return 'https://miot-spec.org/miot-spec-v2/instance?type=urn:miot-spec-v2:device:light:0000A001:philips-sread1:1';
    }


    /*----------========== CONFIG ==========----------*/

    requiresMiCloud() {
        return false;
    }


    /*----------========== METADATA ==========----------*/

    initDeviceServices() {
        this.createServiceByString(JSON.stringify({
            "siid": 2,
            "type": "urn:miot-spec-v2:service:device-information:00007801:philips-sread1:1",
            "description": "Light"
        }));
    }

    initDeviceProperties() {
        this.addPropertyByString('light:on', JSON.stringify({
            "siid": 2,
            "piid": 1,
            "type": "urn:miot-spec-v2:property:on:00000006:philips-sread1:1",
            "description": "Switch Status",
            "format": "bool",
            "access": ["read", "write", "notify"]
        }));
        this.addPropertyByString('light:brightness', JSON.stringify({
            "siid": 2,
            "piid": 2,
            "type": "urn:miot-spec-v2:property:brightness:0000000D:philips-sread1:1",
            "description": "Brightness",
            "format": "uint8",
            "access": ["read", "write", "notify"],
            "unit": "percentage",
            "valueRange": [1, 100, 1]
        })); 
    }

    initDeviceActions() {
        //no actions
    }

    initDeviceEvents() {
        //no events
    }


    /*----------========== VALUES OVERRIDES ==========----------*/


    /*----------========== PROPERTY OVERRIDES ==========----------*/


    /*----------========== ACTION OVERRIDES ==========----------*/


    /*----------========== OVERRIDES ==========----------*/


}

module.exports = PhilipsLightSpread1;