module.exports = {
  apps: [
    {
      name: 'app1',
      cwd: './',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3001',
      exec_mode: 'cluster',
      instances: 0,
      autorestart: true,
      listen_timeout: 50000,
      kill_timeout: 5000,
    },
  ],
};
