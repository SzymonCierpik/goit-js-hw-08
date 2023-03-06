const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormStateToLocalStorage = () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
};

const loadFormStateFromLocalStorage = () => {
  const formState = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formState) {
    emailInput.value = formState.email || '';
    messageInput.value = formState.message || '';
  }
};

const resetFormState = () => {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
};

const saveFormStateToLocalStorageThrottled = _.throttle(
  saveFormStateToLocalStorage,
  500
);
emailInput.addEventListener('input', saveFormStateToLocalStorageThrottled);
messageInput.addEventListener('input', saveFormStateToLocalStorageThrottled);

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Form submitted:', {
    email: emailInput.value,
    message: messageInput.value,
  });
});
