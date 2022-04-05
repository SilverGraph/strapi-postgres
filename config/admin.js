module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd76d0317b7c8acdb874a3efb08197edd'),
  },
});
