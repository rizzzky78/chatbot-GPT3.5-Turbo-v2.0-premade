const moment = require("moment-timezone");
const axios = require("axios");
const BodyForm = require("form-data");
const lzString = require("lz-string");
const { existsSync, createReadStream } = require("fs");
const cryptoRandomString = require("crypto-random-string");

const Runtime = (seconds) => {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
/**
 * @param {number} num
 * @returns Crypto Random String Upper Case
 * @example
 * IDMaker(5) => "7DE5X"
 */
const IDMaker = (num) => {
  return cryptoRandomString(num).toUpperCase();
};
/**
 * Date Maker
 * @returns String
 * @example
 * Format: "Day" + "Month" + "Year" + "Local Time"
 * DateMaker() => String<"Senin 13 Maret 2023, 19:45:05 WIB">
 */
const DateMaker = () => {
  let makeDate = moment()
    .tz("Asia/Jakarta")
    .locale("id")
    .format("dddd D MMMM YYYY, H:mm:ss");
  return makeDate + " " + "WIB";
};
/**
 * Trim specified length from String
 * @param {string} str
 * @param {number} maxLength
 */
const trimString = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + "...";
  }
  return str;
};

/**
 * @param { string } url
 * @param { object } options
 * @example fetchJson("urls here")
 * Output:
 * fetchJson(URL) => Axios<AxiosResponse<Data>>
 */
const fetchJson = async (url, options) => {
  try {
    options ? options : {};
    const Response = await axios({
      method: "GET",
      url: url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
      },
      ...options,
    });
    if (Response.data.status === 200) {
      return Response.data;
    }
  } catch (err) {
    return new Error(String(err));
  }
};

module.exports = {
  Runtime,
  IDMaker,
  DateMaker,
  trimString,
  fetchJson
};
