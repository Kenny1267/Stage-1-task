document.addEventListener('DOMContentLoaded', function () {
  // Slack Name
  const slackUserNameElement = document.getElementById('slackUserName');
  slackUserNameElement.textContent = 'Mr_man';

  // Current Day of the Week
  const currentDayOfTheWeekElement = document.getElementById(
    'currentDayOfTheWeek'
  );
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  currentDayOfTheWeekElement.textContent = daysOfWeek[dayIndex];

  // Current UTC Time
  const currentUTCTimeElement = document.getElementById('currentUTCTime');
  function addZero(x, n) {
    while (x.toString().length < n) {
      x = '0' + x;
    }
    return x;
  }
  const d = new Date();
  let h = addZero(d.getUTCHours(), 2);
  let m = addZero(d.getUTCMinutes(), 2);
  let s = addZero(d.getUTCSeconds(), 2);
  let ms = addZero(d.getUTCMilliseconds(), 3);
  let time = h + ':' + m + ':' + s + ':' + ms;
  currentUTCTimeElement.textContent = time;

  // Track
  const myTrackElement = document.getElementById('myTrack');
  myTrackElement.textContent = 'Frontend';

  // GitHub URL
  const githubURLElement = document.getElementById('githubURL');
  githubURLElement.href = 'https://github.com/Kenny1267/Stage-1-HNG.git';
});
