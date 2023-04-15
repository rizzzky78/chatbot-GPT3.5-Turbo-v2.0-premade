const { fetchJson } = require("../libs/functions/myFunc");

const { lolHumanApikey } = require("../config/settings").metaData;

const fetchData = async (link) => {
  return await fetchJson(
    `https://api.lolhuman.xyz/api/ytvideo?apikey=${lolHumanApikey}&url=${link}`
  )
    // .then(async (data) => {
    //   // await msg
    //   //   .replyImage(
    //   //     { url: data.result.thumbnail },
    //   //     `Title: ${data.result.title}\nDuration: ${data.result.duration}`
    //   //   )
    //   //   .then(async () => {
    //   //     await msg.replyVideo({ url: data.result.link.link });
    //   //   });
    // })
    .catch((e) => {
      return new Error(e);
    });
};

(async () => {
  const data = await fetchData("https://www.youtube.com/shorts/SIJirkP6d5A");
  console.log(data);
})();
