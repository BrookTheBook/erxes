import schedule from 'node-schedule';
import { _ } from 'underscore';
import moment from 'moment';
import { sendEmail } from './data/utils';
import { Conversations, Brands, Customers, Users, Messages } from './db/models';

export const sendMessageEmail = async () => {
  // new or open conversations
  const conversations = await Conversations.newOrOpenConversation();

  for (let conversation of conversations) {
    const customer = await Customers.findOne({ _id: conversation.customerId });
    const brand = await Brands.findOne({ _id: conversation.brandId });

    if (!customer || !customer.email) {
      return;
    }
    if (!brand) {
      return;
    }

    // user's last non answered question
    const question = (await Messages.getNonAsnweredMessage(conversation._id)) || {};

    question.createdAt = moment(question.createdAt).format('DD MMM YY, HH:mm');

    // generate admin unread answers
    const answers = [];

    const adminMessages = await Messages.getAdminMessages(conversation._id);

    for (let message of adminMessages) {
      const answer = message;

      // add user object to answer
      answer.user = await Users.findOne({ _id: message.userId });
      answer.createdAt = moment(answer.createdAt).format('DD MMM YY, HH:mm');
      answers.push(answer);
    }

    if (answers.length < 1) {
      return;
    }

    // template data
    const data = { customer, question, answers, brand };

    // add user's signature
    const user = await Users.findOne({ _id: answers[0].userId });

    if (user && user.emailSignatures) {
      const signature = await _.find(user.emailSignatures, s => brand._id === s.brandId);

      if (signature) {
        data.signature = signature.signature;
      }
    }

    // send email
    sendEmail({
      to: customer.email,
      subject: `Reply from "${brand.name}"`,
      template: {
        name: 'conversationCron',
        isCustom: true,
        data,
      },
    });

    // mark sent messages as read
    Messages.markSentAsReadMessages(conversation._id);
  }
};

/**
* *    *    *    *    *    *
* ┬    ┬    ┬    ┬    ┬    ┬
* │    │    │    │    │    |
* │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
* │    │    │    │    └───── month (1 - 12)
* │    │    │    └────────── day of month (1 - 31)
* │    │    └─────────────── hour (0 - 23)
* │    └──────────────────── minute (0 - 59)
* └───────────────────────── second (0 - 59, OPTIONAL)
*/
// every 10 minutes
schedule.scheduleJob('*/10 * * * * *', function() {
  sendMessageEmail();
});
