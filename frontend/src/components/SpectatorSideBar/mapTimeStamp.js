export default (timeStamp) => {
  let mappedTimeStamp = '';
  const [date, time, suffix] = timeStamp.split(' ');
  const [month, day, year] = date.split('/');
  const [hr, min, sec] = time.split(':');
  const currentDate = new Date(
    new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
    }),
  );
  const commentDate = suffix === 'PM'
    ? new Date(year.replace(',', ''), Number(month) - 1, day, Number(hr) + 12, min, sec)
    : new Date(year.replace(',', ''), Number(month) - 1, day, hr, min, sec);
  const diff = currentDate - commentDate;
  const timeStampObj = {
    second: diff / 1000,
    minute: diff / 1000 / 60,
    hour: diff / 1000 / 60 / 60,
    day: diff / 1000 / 60 / 60 / 24,
    week: diff / 1000 / 60 / 60 / 24 / 7,
    month: diff / 1000 / 60 / 60 / 24 / 7 / 4,
    year: diff / 1000 / 60 / 60 / 24 / 7 / 4 / 12,
  };
  Object.keys(timeStampObj).forEach((key) => {
    const value = Math.floor(timeStampObj[key]);
    if (value === 1) {
      mappedTimeStamp = `${value} ${key} ago`;
    } else if (value > 1) {
      mappedTimeStamp = `${value} ${key}s ago`;
    }
  });
  return mappedTimeStamp;
};
