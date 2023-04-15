"use-strict";

const collections = require("../Router");
const { IDMaker, DateMaker } = require("../../functions/myFunc");

/**
 *
 * @param {{userName: string, userNumber: string}} formData
 */
const createNewUser = async (formData) => {
  const { userName, userNumber } = formData;
  const formUser = {
    id: IDMaker(7),
    userName,
    userNumber,
    limit: 15,
    created: DateMaker(),
  };
  const Promise = await collections.userBot.insertOne(formUser);
  return { Promise, formUser };
};
/**
 *
 * @param {string} userNumber
 * @param {number} limitChanges
 * @returns
 */
const updateUserLimit = async (userNumber, limitChanges) => {
  return await collections.userBot.findOneAndUpdate(
    { userNumber },
    {
      $set: { limit: limitChanges },
    }
  );
};

const getUserData = async (userNumber) => {
  return await collections.userBot.findOne({ userNumber });
};

const getAllUserData = async () => {
  return await collections.userBot.find().toArray();
};

const Chatbot = {
  createNewUser,
  updateUserLimit,
  getUserData,
  getAllUserData,
};

module.exports = Chatbot;
