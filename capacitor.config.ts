import type { CapacitorConfig } from '@capacitor/cli';

import { execSync } from 'child_process';

import * as os from 'os';
const getIPAddress = (): string => {
  try {
    let command = 'ifconfig getifaddr en0';
    if (os.platform() === 'win32') {
      command = `for /f "tokens=2 delims=:" %a in ('ipconfig ^| findstr /C:"IPv4"') do @echo %a`;
    }
    const ipAddress = execSync(command).toString().trim();
    console.log('Endereço IP:', ipAddress);
    return ipAddress;
  } catch (error) {
    console.error('Erro ao obter o endereço IP:', error);
    return '';
  }
};

const config: CapacitorConfig = {
  appId: 'com.angular.solid',
  appName: 'AngularSolid',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: `http://${getIPAddress()}:8100`,
    cleartext: true,
  },
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '300',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '3000',
    },
  },
};

export default config;
