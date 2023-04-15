const Chatbot = require("@libs/controllers/user/data.handler");

/**
 * @type { import('@libs/builders/command').ICommand }
 */
module.exports = {
  aliases: ["register"],
  callback: async ({ client, msg}) => {
    await Chatbot.getUserData(msg.senderNumber).then(async (dataUser) => {
      if (!dataUser) {
        await Chatbot.createNewUser({
          userName: msg.pushName,
          userNumber: msg.senderNumber,
        }).then(({ Promise, formUser }) => {
          console.log(Promise);
          let texts =
            `*Register Berhasil!*\n\n` +
            `Nama: ${formUser.userName}\n` +
            `Nomor: ${formUser.userNumber}\n` +
            `Limit Awal: ${formUser.limit}\n` +
            `Terdaftar:\n${formUser.created}\n`;
          return msg.reply(texts);
        });
      } else if (dataUser) {
        return msg.reply("Already Registered!");
      }
    });
  },
};
