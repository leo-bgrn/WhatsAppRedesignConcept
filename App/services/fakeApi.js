import moment from 'moment';

export function getConversations() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
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
              //'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
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
              seen: false,
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