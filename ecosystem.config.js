module.exports = {
  apps: [{
    name: "meat-api",
    script: "./dist/main.js",
    instances: 1,
    exec_mode: "cluster",
    watch: true,
    merge_logs:true,
    env: {
      SERVER_PORT: 5000,
      DB_URL: "mongodb://localhost/meat-api",
      NODE_ENV: "development"
    },
    env_production: {
      SERVER_PORT: 5001,
      NODE_ENV: "production"
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}
