const { lolHumanApikey } = require("../../../../../config/settings").metaData;
const { fetchJson } = require("@libs/functions/myFunc");

/**
 * @type { import('@libs/builders/command').ICommand }
 */
module.exports = {
  aliases: ["ytv", "ytvideo"],
  category: "youtube",
  description: "Youtube video downloader.",
  waitMessage: true,
  minArgs: 1,
  expectedArgs: "<link>",
  example: "{prefix}{command} https://www.youtube.com/watch?v=eZskFo64rs8",
  callback: async ({ msg, args }) => {
    await fetchJson(
      `https://api.lolhuman.xyz/api/ytvideo?apikey=${lolHumanApikey}&url=${args[0]}`
    )
      .then(async (data) => {
        console.log(data);
        await msg
          .replyImage(
            { url: data.result.thumbnail },
            `Title: ${data.result.title}\nDuration: ${data.result.duration}`
          )
          .then(async () => {
            await msg.replyVideo(
              { url: data.result.link.link },
              `Title: ${data.result.title}\nDuration: ${data.result.duration}`
            );
          });
      })
      .catch((e) => {
        return msg.reply(new Error(e));
      });
  },
};
