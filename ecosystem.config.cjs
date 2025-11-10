module.exports = {
  apps: [{
    name: "vite-react-app",
    script: "serve - build", // or "server.js" if using Express
    args: "-s build -l 8080", // arguments for 'serve'
    env: {
      NODE_ENV: "production",
      PORT: 8080,
    },
  }],
};