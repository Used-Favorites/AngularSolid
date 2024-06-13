import { execSync } from "child_process";
import type { CapacitorConfig } from '@capacitor/cli';

import * as os from 'os';
const getIPAddress = (): string => {
  try {
    let command = "ipconfig getifaddr en0";
    if (os.platform() === 'win32') {
      command = `for /f "tokens=2 delims=:" %a in ('ipconfig ^| findstr /C:"IPv4"') do @echo %a`;
    }
    const ipAddress = execSync(command).toString().trim();
    return ipAddress;
  } catch (error) {
    console.error("Erro ao obter o endereço IP:", error);
    return "";
  }
};

const config: CapacitorConfig = {
  appId: 'com.angular.usedfavorites',
  appName: 'AngularFlare',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    url: `http://${getIPAddress()}:4200`,
    cleartext: true,
  },
};

export default config;
