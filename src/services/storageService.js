import Cookies from 'universal-cookie';

const storage = {};
const cookies = new Cookies();

// Cookies storage
storage.getCookieItem = (key) => {
  return cookies.get(key);
}

// Cookies storage
storage.getSessionItem = (key) => {
  return sessionStorage.getItem(key);
}


storage.setSessionItem = (key, value) => {
  return sessionStorage.setItem(key, value);
}

storage.setCookieItem = (key, value, expire, path = '/') => {
  return cookies.set(key, value, {'path': path, 'expires': expire});
}

storage.removeCookieItem = (key, path = '/') => {
  return cookies.remove(key, {path: path});
}

export default storage;