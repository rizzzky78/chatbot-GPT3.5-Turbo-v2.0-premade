import collections from "./Router"

interface UserData {
  userID: string;
  userNumber: string;
  userName: string;
  token: number;
  totalUsage: number;
  sessionChat: { role: string; content: string }[];
  dataChat: { key: string; user: string; assistant: string; timeStamp: string }[];
}

const getUserData = async (userNumber: string): Promise<UserData> => {
  const userData = await collections.userData.findOne({ userNumber });
  const { userID, userName, token, totalUsage, sessionChat, dataChat } = userData;
  return {
    userID, // string
    userNumber, // string
    userName, // string
    token, // number
    totalUsage, // number
    sessionChat, // [{role: string, content: string}]
    dataChat, // [{key: string, user: string, assistant: string, timeStamp: string}]
  };
};
