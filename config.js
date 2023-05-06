const env = process.env;
const appKey = env.APP_KET || "wx6b517b4a377fd250";
const appSecret = env.APP_SECRET || "241d646622058f1e71ce6a6967b90a7f";
const nodeEnv = env.NODE_ENV;
let db = {
  name: "mongodb://127.0.0.1:27017/syreo",
  user: "",
  password: "",
};
if (nodeEnv === "production") {
  db = {
    name: "mongodb://127.0.0.1:27017/syreo",
    user: "",
    password: "",
  };
}

module.exports = {
  appKey,
  appSecret,
  db,
};
