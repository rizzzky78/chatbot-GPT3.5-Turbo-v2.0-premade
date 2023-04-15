const Chatbot = require("@libs/controllers/user/data.handler");

const { lolHumanApikey } = require("../../../../config/settings").metaData;

/**
 * @type { import('@libs/builders/command').ICommand }
 */
module.exports = {
  aliases: ["lewd", "getlewd"],
  category: "NSFW MENU",
  description: "Get Random / Select Lewd Pictures",
  waitMessage: "Mohon tunggu sebentar...",
  cooldown: 5 * 1000,
  callback: async ({ client, msg, args, prefix }) => {
    await Chatbot.getUserData(msg.senderNumber).then(async (userData) => {
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
        let rowsLewd = [];
        let sections = [
          {
            title: "Lewd Picture".toUpperCase(),
            rows: rowsLewd,
          },
        ];

        if (!args[0]) {
          let dataLewd = lewdContainer.map(
            (val) => ({
              title: val.title[0].toUpperCase() + val.title.substring(1),
              rowId: `${prefix}getlewd ${val.cmd}`,
            }),
            {}
          );
          rowsLewd.push(...dataLewd);

          return client.sendMessage(msg.from, {
            title: "Lewd Menu Selector",
            text: "Tinggal pilih menunya ler",
            footer: "Julius Pedo",
            buttonText: "List Lewd",
            sections,
            viewOnce: true,
          });
        }

        if (args[0] && args[1]) {
          if (args[0] === "random/nsfw") {
            let urlsImagesA = `https://api.lolhuman.xyz/api/random/nsfw/${args[1]}?apikey=${lolHumanApikey}`;
            return await client
              .sendMessage(msg.from, {
                caption: `*${args[1]}*\n\nKetuk tombol di bawah untuk membuka Lewd Menu / me-request gambar lewd secara acak.`,
                footer: "Lewd Teross",
                image: { url: urlsImagesA },
                templateButtons: [
                  {
                    index: 1,
                    quickReplyButton: {
                      displayText: "Lewd Menu",
                      id: prefix + "lewd",
                    },
                  },
                  {
                    index: 2,
                    quickReplyButton: {
                      displayText: "Random Lewd",
                      id: prefix + "lewd random1",
                    },
                  },
                ],
                viewOnce: true,
                mentions: [msg.sender],
              })
              .then(async () => {
                await Chatbot.updateUserLimit(
                  userData.userNumber,
                  userData.limit - 1
                ).then(() => msg.reply("Limit digunakan -1"));
              })
              .catch((err) => {
                console.error(err);
                return msg.reply("Error");
              });
          }
          if (args[0] === "random2") {
            let urlsImagesB = `https://api.lolhuman.xyz/api/random2/${args[1]}?apikey=${lolHumanApikey}`;
            return await client
              .sendMessage(msg.from, {
                caption: `*${args[1]}*\n\nKetuk tombol di bawah untuk membuka Lewd Menu / me-request gambar lewd secara acak.`,
                footer: "Lewd Teross",
                image: { url: urlsImagesB },
                templateButtons: [
                  {
                    index: 1,
                    quickReplyButton: {
                      displayText: "Lewd Menu",
                      id: prefix + "lewd",
                    },
                  },
                  {
                    index: 2,
                    quickReplyButton: {
                      displayText: "Random Lewd",
                      id: prefix + "lewd random1",
                    },
                  },
                ],
                viewOnce: true,
                mentions: [msg.sender],
              })
              .then(async () => {
                await Chatbot.updateUserLimit(
                  userData.userNumber,
                  userData.limit - 1
                ).then(() => msg.reply("Limit digunakan -1"));
              })
              .catch((err) => {
                console.error(err);
                return msg.reply("Error");
              });
          }
        }

        let selectedLinks = "";
        let selects = "";

        if (args[0] === "random1") {
          selects = Lewd.typeA[Math.floor(Math.random() * Lewd.typeA.length)];
          selectedLinks = `https://api.lolhuman.xyz/api/random/nsfw/${selects}?apikey=${lolHumanApikey}`;
          return await client
            .sendMessage(msg.from, {
              caption: `*${selects}*\n\nKetuk tombol di bawah untuk me-request gambar lewd secara acak.`,
              footer: "Lewd Teross",
              image: { url: selectedLinks },
              templateButtons: [
                {
                  index: 1,
                  quickReplyButton: {
                    displayText: "Random Lewd 1",
                    id: prefix + "lewd random1",
                  },
                },
                {
                  index: 2,
                  quickReplyButton: {
                    displayText: "Random Lewd 2",
                    id: prefix + "lewd random2",
                  },
                },
              ],
              viewOnce: true,
              mentions: [msg.sender],
            })
            .then(async () => {
              await Chatbot.updateUserLimit(
                userData.userNumber,
                userData.limit - 1
              ).then(() => msg.reply("Limit digunakan -1"));
            })
            .catch((err) => {
              console.error(err);
              return msg.reply("Error");
            });
        }

        if (args[0] === "random2") {
          selects = Lewd.typeB[Math.floor(Math.random() * Lewd.typeB.length)];
          selectedLinks = `https://api.lolhuman.xyz/api/random2/${selects}?apikey=${lolHumanApikey}`;
          return await client
            .sendMessage(msg.from, {
              caption: `*${selects}*\n\nKetuk tombol di bawah untuk me-request gambar lewd secara acak.`,
              footer: "Lewd Teross",
              image: { url: selectedLinks },
              templateButtons: [
                {
                  index: 1,
                  quickReplyButton: {
                    displayText: "Random Lewd 1",
                    id: prefix + "lewd random1",
                  },
                },
                {
                  index: 2,
                  quickReplyButton: {
                    displayText: "Random Lewd 2",
                    id: prefix + "lewd random2",
                  },
                },
              ],
              viewOnce: true,
              mentions: [msg.sender],
            })
            .then(async () => {
              await Chatbot.updateUserLimit(
                userData.userNumber,
                userData.limit - 1
              ).then(() => msg.reply("Limit digunakan -1"));
            })
            .catch((err) => {
              console.error(err);
              return msg.reply("Error");
            });
        }
      }
    });
  },
};

const lewdContainer = [
  {
    title: "ahegao",
    cmd: "random/nsfw ahegao",
  },
  {
    title: "armpits",
    cmd: "random/nsfw armpits",
  },
  {
    title: "booty",
    cmd: "random/nsfw booty",
  },
  {
    title: "feets",
    cmd: "random/nsfw feets",
  },
  {
    title: "thighss",
    cmd: "random/nsfw thighss",
  },
  {
    title: "bigtiddies",
    cmd: "random/nsfw bigtiddies",
  },
  {
    title: "ecchi",
    cmd: "random/nsfw ecchi",
  },
  {
    title: "ero",
    cmd: "random/nsfw ero",
  },
  {
    title: "trap",
    cmd: "random/nsfw trap",
  },
  {
    title: "waifu",
    cmd: "random/nsfw waifu",
  },
  {
    title: "yaoi",
    cmd: "random/nsfw yaoi",
  },
  {
    title: "erofeet",
    cmd: "random/nsfw erofeet",
  },
  {
    title: "hentai",
    cmd: "random/nsfw hentai",
  },
  {
    title: "hentaifemdom",
    cmd: "random/nsfw hentaifemdom",
  },
  {
    title: "hololewd",
    cmd: "random/nsfw hololewd",
  },
  {
    title: "lewdanimegirls",
    cmd: "random/nsfw lewdanimegirls",
  },
  {
    title: "milf",
    cmd: "random/nsfw milf",
  },
  {
    title: "neko",
    cmd: "random/nsfw neko",
  },
  {
    title: "sideoppai",
    cmd: "random/nsfw sideoppai",
  },
  {
    title: "anal",
    cmd: "random2 anal",
  },
  {
    title: "bj",
    cmd: "random2 bj",
  },
  {
    title: "blowjob",
    cmd: "random2 blowjob",
  },
  {
    title: "classic",
    cmd: "random2 classic",
  },
  {
    title: "cum",
    cmd: "random2 cum",
  },
  {
    title: "erokemo",
    cmd: "random2 erokemo",
  },
  {
    title: "eroyuri",
    cmd: "random2 eroyuri",
  },
  {
    title: "feetg",
    cmd: "random2 feetg",
  },
  {
    title: "femdom",
    cmd: "random2 femdom",
  },
  {
    title: "futanari",
    cmd: "random2 futanari",
  },
  {
    title: "random_hentai_gif",
    cmd: "random2 random_hentai_gif",
  },
  {
    title: "holoero",
    cmd: "random2 holoero",
  },
  {
    title: "keta",
    cmd: "random2 keta",
  },
  {
    title: "kuni",
    cmd: "random2 kuni",
  },
  {
    title: "lewd",
    cmd: "random2 lewd",
  },
  {
    title: "lewdk",
    cmd: "random2 lewdk",
  },
  {
    title: "lewdkemo",
    cmd: "random2 lewdkemo",
  },
  {
    title: "nsfw_neko_gif",
    cmd: "random2 nsfw_neko_gif",
  },
  {
    title: "pussy",
    cmd: "random2 pussy",
  },
  {
    title: "solo",
    cmd: "random2 solo",
  },
  {
    title: "tits",
    cmd: "random2 tits",
  },
  {
    title: "yuri",
    cmd: "random2 yuri",
  },
];

const Lewd = {
  typeA: [
    "ahegao",
    "armpits",
    "booty",
    "feets",
    "thighss",
    "bigtiddies",
    "ecchi",
    "ero",
    "trap",
    "waifu",
    "yaoi",
    "erofeet",
    "hentai",
    "hentaifemdom",
    "hololewd",
    "lewdanimegirls",
    "milf",
    "neko",
    "sideoppai",
  ],
  typeB: [
    "anal",
    "bj",
    "blowjob",
    "classic",
    "cum",
    "erokemo",
    "eroyuri",
    "feetg",
    "femdom",
    "futanari",
    "random_hentai_gif",
    "holoero",
    "keta",
    "kuni",
    "lewd",
    "lewdk",
    "lewdkemo",
    "nsfw_neko_gif",
    "pussy",
    "solo",
    "tits",
    "yuri",
  ],
};
