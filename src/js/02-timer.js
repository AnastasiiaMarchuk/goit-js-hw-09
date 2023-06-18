import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startButton: document.querySelector('[data-start]'),
  leftDays: document.querySelector('[data-days]'),
  leftHours: document.querySelector('[data-hours]'),
  leftMinutes: document.querySelector('[data-minutes]'),
  leftSeconds: document.querySelector('[data-seconds]'),
};

refs.startButton.addEventListener('click', runTimer);
refs.startButton.classList.add('start-button');
refs.startButton.disabled = true;
let timerId = null;


function runTimer() {
    
    const selectedDate = getDate.selectedDates[0];
  
    timerId = setInterval(() => {
      const currentDate = new Date();
      const leftTime = selectedDate - currentDate;
      refs.startButton.disabled = true;
  
      if (leftTime < 0) {
        clearInterval(timerId);
        return;
      }
      countLeftTime(convertMs(leftTime));
    }, 1000);
  }

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    
    const currentDate = new Date();

    if (selectedDates[0] < currentDate) {
      refs.startButton.disabled = true;
        Notify.failure('🤷‍♀️ Please choose a date in the future', {
        timeout: 3000,
        width: '400px',
        borderRadius: '50px',
        clickToClose: true,
        position: 'center-top',
        fontSize: '20px',   
      });
    } else {
      refs.startButton.disabled = false;
      Notify.success('👌 Click on "Start"', {
        timeout: 3000,
        width: '400px',
        borderRadius: '50px',
        clickToClose: true,
        position: 'center-top',
        fontSize: '20px',
    });
    refs.startButton.classList.add('hover')
     };
  },
};

const getDate = flatpickr('#datetime-picker', options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function countLeftTime({ days, hours, minutes, seconds }) {
    refs.leftDays.textContent = addLeadingZero(days);
    refs.leftHours.textContent = addLeadingZero(hours);
    refs.leftMinutes.textContent = addLeadingZero(minutes);
    refs.leftSeconds.textContent = addLeadingZero(seconds);
  }

