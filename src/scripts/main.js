'use strict';

const pushNotification = (coordinates, titleText, descriptionText, type) => {
  const { top, right } = coordinates;

  // Tworzymy element powiadomienia
  const notification = document.createElement('div');
  notification.classList.add('notification', type);

  // Ustawiamy tylko wymagane style top i right
  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;

  // Tworzymy tytuł
  const title = document.createElement('h2');
  title.classList.add('title');
  title.textContent = titleText;

  // Tworzymy opis
  const description = document.createElement('p');
  description.textContent = descriptionText;

  // Dodajemy tytuł i opis do powiadomienia
  notification.appendChild(title);
  notification.appendChild(description);

  // Dodajemy powiadomienie do body
  document.body.appendChild(notification);

  // Ukrywamy powiadomienie po 2 sekundach
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

// Wywołania powiadomień
pushNotification(
  { top: 10, right: 10 },
  'Title of Success message',
  'Message example.\n Notification should contain title and description.',
  'success',
);

pushNotification(
  { top: 150, right: 10 },
  'Title of Error message',
  'Message example.\n Notification should contain title and description.',
  'error',
);

pushNotification(
  { top: 290, right: 10 },
  'Title of Warning message',
  'Message example.\n Notification should contain title and description.',
  'warning',
);

