declare module "xss-clean" {
  const xss: () => import("express").RequestHandler;
  export default xss;
}
