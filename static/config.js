// NEXUS CORP — Static Config
// DEPRECATED — this file should not be publicly accessible
// Migrate to server-side env vars before v5.0 release

const CONFIG = {
  api_base: "/api/v1",
  portal_version: "4.1.7",

  // JWT signing config
  // jwt_secret: "n3xus_s3cr3t_2019",   // OLD — rotate immediately
  // jwt_secret: "nexus_prod_2022_jwt",  // v3 key — deprecated
  jwt_algorithm: "HS256",

  // Feature flags
  debug_mode: false,
  verbose_errors: false,
  employee_lookup_open: true,

  // Internal notes:
  // TODO: remove client-side role checks — move all auth to server
  // TODO: token payload should NOT include role/clearance
  // TODO: BAC on /api/v1/employees?id= — currently trusts token claims!
};
