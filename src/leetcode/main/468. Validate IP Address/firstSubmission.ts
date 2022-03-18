export function validIPAddress(queryIP: string): string {
  const ip4 = queryIP.split('.');
  const ip6 = queryIP.split(':');

  let regIP4 = /^0$|^([1-9]\d{0,2})$/;
  let regIP6 = /^[0-9a-fA-F]{1,4}$/;
  if (ip4.length === 4) {
    if (ip4.every(item => regIP4.test(item) && Number(item) < 256)) {
      return 'IPv4';
    }
  } else if (ip6.length === 8) {
    if (ip6.every(item => regIP6.test(item))) {
      return 'IPv6';
    }
  }

  return 'Neither';
}
