const LeshiLightWy0b01 = require('./devices/leshi.light.wy0b01.js');

const allDevices = [LeshiLightWy0b01];


class LightFactory {

  static getDeviceClassForModel(deviceModel) {
    let deviceFactoryClass = null;
    deviceFactoryClass = allDevices.find(device => device.getDeviceModel() === deviceModel);
    return deviceFactoryClass;
  }

}

module.exports = LightFactory;