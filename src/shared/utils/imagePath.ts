const basePath = process.env.NODE_ENV === "production" ? "/dsmbc" : "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
