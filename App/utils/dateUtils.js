import moment from 'moment';

export function datetimeToHumanizeDate(datetime) {
  return moment(datetime).calendar(null, {
    sameDay: 'HH:mm',
    lastDay: '[Yesterday]',
    lastWeek: 'ddd.',
    sameElse: 'DD MMM.',
  });
}
