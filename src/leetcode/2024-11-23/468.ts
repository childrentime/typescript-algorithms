export function validIPAddress(queryIP: string): string {
  const isValid4 = (ip: string) => {
    const parts = ip.split('.');

    if (parts.length !== 4) {
      return false;
    }

    for (const part of parts) {
      if (!/^\d+$/.test(part)) {
        return false;
      }

      if (part.length === 0 || part.length > 3) {
        return false;
      }

      if (part.length > 1 && part[0] === '0') {
        return false;
      }

      if (Number(part) > 255) {
        return false;
      }
    }
    return true;
  };

  const isValid6 = (ip: string) => {
    const parts = ip.split(':');
    if (parts.length !== 8) {
      return false;
    }
    for (const part of parts) {
      if (part.length === 0 || part.length > 4) {
        return false;
      }

      if (!/^[0-9a-fA-F]+$/.test(part)) {
        return false;
      }
    }
    return true;
  };

  if (isValid4(queryIP)) {
    return 'IPv4';
  } else if (isValid6(queryIP)) {
    return 'IPv6';
  }
  return 'Neither';
}
