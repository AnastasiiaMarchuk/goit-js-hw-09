import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(event) {
  event.preventDefault();

    let delay = Number(form.elements.delay.value);
    const step = Number(form.elements.step.value);
    const amount = Number(form.elements.amount.value);

    for (let position = 1; position <= amount; position += 1) {
        createPromise(position, delay)
        .then(({ position, delay }) => {
          setTimeout(() => {
              Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { useIcon: false });
            }, delay);
          })
        .catch(({ position, delay }) => {
            setTimeout(() => {
              Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { useIcon: false });
            }, delay);
          });
      delay += step;
    }
    }

