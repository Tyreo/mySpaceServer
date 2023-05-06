const crypto = require("crypto");
const secret = Buffer.from(crypto.randomBytes(32));
const algorithm = "aes-256-cbc";
const iv = crypto.randomBytes(16);

function encode(id) {
  const encoder = crypto.createCipheriv(algorithm, secret, iv);
  const str = [id, Date.now(), "syreoSpace"].join("|");
  let encrypted = encoder.update(str, "utf8", "hex");
  encrypted += encoder.final("hex");
  return encrypted;
}

function decode(str) {
  const decoder = crypto.createDecipheriv(algorithm, secret, iv);
  let decoded = decoder.update(str, "hex", "utf8");
  decoded += decoder.final("utf8");
  const arr = decoded.split("|");
  return {
    id: arr[0],
    timespan: parseInt(arr[1]),
  };
}

function encodeErCode() {
  return encode(Math.random());
}

module.exports = {
  encode,
  decode,
  encodeErCode,
};
