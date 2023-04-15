const Chatbot = require("@libs/controllers/user/data.handler");

/**
 * @type { import('@libs/builders/command').ICommand }
 */
module.exports = {
  aliases: ["myprofile"],
  callback: async ({ client, msg }) => {
    await Chatbot.getUserData(msg.senderNumber).then((userData) => {
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
        return msg.reply(JSON.stringify(userData, null, 2));
      }
    });
  },
};
