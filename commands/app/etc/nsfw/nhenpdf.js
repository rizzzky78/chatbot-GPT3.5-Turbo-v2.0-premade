const Chatbot = require("@libs/controllers/user/data.handler");
const { fetchJson } = require("@libs/functions/myFunc");
const { lolHumanApikey } = require("../../../../config/settings").metaData;

/**
 * @type { import('@libs/builders/command').ICommand }
 */
module.exports = {
  aliases: ["nhentaipdf"],
  waitMessage: "Mohon tunggu sebentar...",
  callback: async ({ client, msg, args, prefix }) => {
    await Chatbot.getUserData(msg.senderNumber)
      .then(async (userData) => {
        if (!userData) {
          return client.sendMessage(msg.from, {
            text: `\n*Dear ${msg.pushName}*, Kamu belum terdaftar di database Bot\nKlik tombol dibawah untuk mendaftar.\n`,
            templateButtons: [
              {
                index: 1,
                quickReplyButton: {
                  displayText: "Daftar",
                  id: prefix + "register",
                },
              },
            ],
            viewOnce: true,
            mentions: [msg.sender],
          });
        } else if (userData) {
          await fetchJson(
            `https://api.lolhuman.xyz/api/nhentaipdf/${args[0]}?apikey=${lolHumanApikey}`
          ).then(async (data) => {
            return await msg
              .replyDocument(
                { url: data.result },
                "application/pdf",
                `${args[0]}.pdf`
              )
              .then(async () => {
                await Chatbot.updateUserLimit(
                  userData.userNumber,
                  userData.limit - 1
                ).then(() => msg.reply("Limit digunakan -1"));
              });
          });
        }
      })
      .catch((err) => {
        return msg.reply(JSON.stringify(new Error(err), null, 2));
      });
  },
};
