const NetworkSpeed = require('network-speed')

const testNetworkSpeed = new NetworkSpeed()

async function getDownloadSpeed() {
    const baseurl = 'https://eu.httpbin.org/stream-bytes/500000';
    const fileSizeInBytes = 500000;
    const speed = await testNetworkSpeed.checkDownloadSpeed(baseurl, fileSizeInBytes);
    console.log(speed);
  }

getDownloadSpeed()