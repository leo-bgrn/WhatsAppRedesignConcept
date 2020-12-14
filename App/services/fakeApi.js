import moment from 'moment';

export function getConversations() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: '0',
          isGroup: false,
          person: {
            displayName: 'Jordan Moran',
            profilPicture:
              'https://images.pexels.com/photos/1484795/pexels-photo-1484795.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            isConnected: true,
          },
          lastMessage: {
            message: "Bro, they're on 🔥🔥🔥",
            datetime: moment(moment().format('YYYY-MM-DD') + 'T16:34'),
          },
          messageNotSeen: 0,
        },
        {
          id: '1',
          isGroup: false,
          person: {
            displayName: 'Bae ❤️',
            profilPicture:
              'https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            isConnected: false,
          },
          lastMessage: {
            message: "Hey!!! Text me when you're back at home ☺️",
            datetime: moment(
              moment().subtract(1, 'd').format('YYYY-MM-DD') + 'T11:34',
            ),
          },
          messageNotSeen: 2,
        },
        {
          id: '2',
          isGroup: true,
          groupName: 'Work Group 👨‍💻',
          persons: [
            {
              displayName: 'Joshua Bailey',
              profilPicture:
                'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              isConnected: false,
            },
            {
              displayName: 'Cherly Sullivan',
              profilPicture:
                'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              isConnected: true,
            },
            {
              displayName: 'Martin Mason',
              profilPicture:
                'https://images.pexels.com/photos/5792673/pexels-photo-5792673.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
              isConnected: false,
            },
          ],
          lastMessage: {
            message:
              'The majestic Rocky Mountains are a major mountain range in western North America',
            from: 'Joshua Bailey',
            datetime: moment(moment().format('YYYY-MM-DD') + 'T09:34'),
          },
          messageNotSeen: 8,
        },
        {
          id: '3',
          isGroup: false,
          person: {
            displayName: 'Austin Chandler',
            profilPicture:
              'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            isConnected: true,
          },
          lastMessage: {
            message:
              'The Rocky Mountains, also known as the Rockies, are a major mountain range in western North America',
            datetime: moment(
              moment().subtract(5, 'days').format('YYYY-MM-DD') + 'T13:34',
            ),
          },
          messageNotSeen: 3,
        },
        {
          id: '4',
          isGroup: false,
          person: {
            displayName: 'Hannah Oliver',
            profilPicture:
              'https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            isConnected: false,
          },
          lastMessage: {
            message: 'See you',
            datetime: moment(
              moment().subtract(10, 'days').format('YYYY-MM-DD') + 'T13:34',
            ),
          },
          messageNotSeen: 0,
        },
      ]);
    }, 500);
  });
}

export function getStories() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          person: {
            displayName: 'Jordan',
            profilPicture:
              'https://images.pexels.com/photos/1484795/pexels-photo-1484795.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          },
          stories: [
            {
              datetime: moment(moment().format('YYYY-MM-DD') + 'T16:34'),
              image:
                'https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              seen: false,
            },
          ],
        },
        {
          person: {
            displayName: 'Bae',
            profilPicture:
              'https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          },
          stories: [
            {
              datetime: moment(moment().format('YYYY-MM-DD') + 'T11:34'),
              image:
                'https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              seen: true,
            },
            {
              datetime: moment(moment().format('YYYY-MM-DD') + 'T10:34'),
              image:
                'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              seen: false,
            },
          ],
        },
        {
          person: {
            displayName: 'Austin',
            profilPicture:
              'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          },
          stories: [
            {
              datetime: moment(
                moment().subtract(1, 'd').format('YYYY-MM-DD') + 'T11:34',
              ),
              image:
                'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              seen: true,
            },
          ],
        },
        {
          person: {
            displayName: 'Hannah',
            profilPicture:
              'https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          },
          stories: [
            {
              datetime: moment(
                moment().subtract(1, 'd').format('YYYY-MM-DD') + 'T10:34',
              ),
              image:
                'https://images.pexels.com/photos/2089799/pexels-photo-2089799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              seen: true,
            },
          ],
        },
      ]);
    }, 500);
  });
}

export function getCalls() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          person: {
            displayName: 'Jordan Moran',
            profilPicture:
              'https://images.pexels.com/photos/1484795/pexels-photo-1484795.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            isConnected: true,
          },
          datetime: moment(moment().format('YYYY-MM-DD') + 'T16:34'),
          type: 'CALL',
          missed: true,
        },
        {
          person: {
            displayName: 'Bae ❤️',
            profilPicture:
              'https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            isConnected: false,
          },
          datetime: moment(moment().format('YYYY-MM-DD') + 'T11:34'),
          type: 'VIDEO',
          missed: false,
        },
        {
          person: {
            displayName: 'Austin Chandler',
            profilPicture:
              'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            isConnected: true,
          },
          datetime: moment(
            moment().subtract(1, 'd').format('YYYY-MM-DD') + 'T10:34',
          ),
          type: 'CALL',
          missed: false,
        },
        {
          person: {
            displayName: 'Joshua Bailey',
            profilPicture:
              'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            isConnected: false,
          },
          datetime: moment(
            moment().subtract(1, 'd').format('YYYY-MM-DD') + 'T10:34',
          ),
          type: 'CALL',
          missed: false,
        },
      ]);
    });
  });
}

export function getConversationId(conversationId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (conversationId) {
        case '0':
        case '3':
        case '4':
          resolve({
            isGroup: false,
            person: {
              displayName: 'Jordan Moran',
              profilPicture:
                'https://images.pexels.com/photos/1484795/pexels-photo-1484795.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
              isConnected: true,
            },
            messages: [
              {
                messageId: '0',
                type: 'TEXT',
                message: "Bro, they're on 🔥🔥🔥",
                datetime: moment(moment().format('YYYY-MM-DD') + 'T16:34'),
                from: -1,
              },
              {
                messageId: '1',
                type: 'TEXT',
                message: 'Check them out 🔥🔥🔥',
                datetime: moment(moment().format('YYYY-MM-DD') + 'T15:34'),
                from: 0,
              },
              {
                messageId: '2',
                type: 'TEXT',
                message:
                  'Did u get a pair ?Did u get a pair ?Did u get a pair ?Did u get a pair ?Did u get a pair ?Did u get a pair ?Did u get a pair ?Did u get a pair ?',
                datetime: moment(moment().format('YYYY-MM-DD') + 'T11:34'),
                from: -1,
              },
            ],
          });
          break;
        case '1':
          resolve({
            isGroup: false,
            person: {
              displayName: 'Bae ❤️',
              profilPicture:
                'https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
              isConnected: false,
            },
            messages: [
              {
                messageId: '0',
                type: 'TEXT',
                message: "Hey!!! Text me when you're back at home ☺️",
                datetime: moment(moment().format('YYYY-MM-DD') + 'T11:34'),
                from: 0,
              },
              {
                messageId: '1',
                type: 'TEXT',
                message: 'Love u',
                datetime: moment(
                  moment().subtract(1, 'd').format('YYYY-MM-DD') + 'T20:33',
                ),
                from: 0,
              },
              {
                messageId: '2',
                type: 'TEXT',
                message: 'Bye, love u. See you tomorrow',
                datetime: moment(
                  moment().subtract(1, 'd').format('YYYY-MM-DD') + 'T20:34',
                ),
                from: -1,
              },
              {
                messageId: '3',
                type: 'TEXT',
                message: "Hey!!! Text me when you're back at home ☺️",
                datetime: moment(moment().format('YYYY-MM-DD') + 'T11:34'),
                from: 0,
              },
              {
                messageId: '4',
                type: 'TEXT',
                message: 'Love u',
                datetime: moment(
                  moment().subtract(1, 'd').format('YYYY-MM-DD') + 'T20:33',
                ),
                from: 0,
              },
              {
                messageId: '5',
                type: 'TEXT',
                message: 'Bye, love u. See you tomorrow',
                datetime: moment(
                  moment().subtract(1, 'd').format('YYYY-MM-DD') + 'T20:34',
                ),
                from: -1,
              },
              {
                messageId: '6',
                type: 'TEXT',
                message: "Hey!!! Text me when you're back at home ☺️",
                datetime: moment(moment().format('YYYY-MM-DD') + 'T11:34'),
                from: 0,
              },
              {
                messageId: '7',
                type: 'TEXT',
                message: 'Love u',
                datetime: moment(
                  moment().subtract(1, 'd').format('YYYY-MM-DD') + 'T20:33',
                ),
                from: 0,
              },
              {
                messageId: '8',
                type: 'TEXT',
                message: 'Bye, love u. See you tomorrow',
                datetime: moment(
                  moment().subtract(1, 'd').format('YYYY-MM-DD') + 'T20:34',
                ),
                from: -1,
              },
            ],
          });
          break;
        case '2':
          resolve({
            isGroup: true,
            groupName: 'Work Group 👨‍💻',
            persons: [
              {
                displayName: 'Joshua Bailey',
                profilPicture:
                  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                isConnected: false,
              },
              {
                displayName: 'Cherly Sullivan',
                profilPicture:
                  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                isConnected: true,
              },
              {
                displayName: 'Martin Mason',
                profilPicture:
                  'https://images.pexels.com/photos/5792673/pexels-photo-5792673.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                isConnected: false,
              },
            ],
            messages: [
              {
                messageId: '0',
                type: 'TEXT',
                message:
                  'The majestic Rocky Mountains are a major mountain range in western North America',
                datetime: moment(moment().format('YYYY-MM-DD') + 'T09:34'),
                from: 0,
              },
              {
                messageId: '1',
                type: 'TEXT',
                message:
                  'The majestic Rocky Mountains are a major mountain range in western North America',
                datetime: moment(moment().format('YYYY-MM-DD') + 'T09:34'),
                from: 1,
              },
              {
                messageId: '2',
                type: 'TEXT',
                message:
                  'The majestic Rocky Mountains are a major mountain range in western North America',
                datetime: moment(moment().format('YYYY-MM-DD') + 'T09:34'),
                from: -1,
              },
              {
                messageId: '3',
                type: 'TEXT',
                message:
                  'The majestic Rocky Mountains are a major mountain range in western North America',
                datetime: moment(moment().format('YYYY-MM-DD') + 'T09:34'),
                from: 2,
              },
            ],
          });
          break;
        default:
          resolve(null);
          break;
      }
    });
  });
}
