import { Dimensions, Platform } from 'react-native';

export const getDeviceInfo = () => {
  const OS = Platform.OS;
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
  const BENCHMARK = 540; /* devices with width below 540 is considered as phones
                            and above 540 is considered as tablets */
  const effectiveWidth = WIDTH < HEIGHT ? WIDTH : HEIGHT; //considering potrait and landscape mode
  let device = {};
  device.width = WIDTH;
  device.height = HEIGHT;
  device.os = OS;
  device.highestDimension = WIDTH > HEIGHT ? WIDTH : HEIGHT;
  device.lowestDimension = effectiveWidth;

  if (OS == "ios") {
    device.type = effectiveWidth < BENCHMARK ? "iosMobile" : "iosTablet";
  } else if (OS == "android") {
    device.type = effectiveWidth < BENCHMARK ? "androidMobile" : "androidTablet";
  }
  return device;
}
