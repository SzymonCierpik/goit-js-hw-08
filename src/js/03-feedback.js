import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const formState = JSON.parse(localStorage.getItem('feedback-form-state'));
if (formState) {
  emailInput.value = formState.email;
  messageInput.value = formState.message;
}

const onFormInput = () => {
  const object = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(object));
};

form.addEventListener('input', throttle(onFormInput, 500));

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Form submitted:', {
    email: emailInput.value,
    message: messageInput.value,
  });
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
