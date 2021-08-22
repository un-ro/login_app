/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** 
 * Membuat variabel untuk form Login
 * @constant {HTMLElement}
 */
const loginFormElement = document.querySelector('#loginForm');
/** 
 * Membuat variabel untuk Input Email
 * @constant {HTMLElement}
 */
const inputEmailElement = document.querySelector('#inputEmail');
/** 
 * Membuat variabel untuk Input Password
 * @constant {HTMLElement}
 */
const inputPasswordElement = document.querySelector('#inputPassword');

/**
 * Membuat variabel expectedEmail untuk check input email saat login
 * @constant {string}
 */
const expectedEmail = 'admin@dicoding.com';
/**
 * Membuat variabel expectedPassword untuk check input password saat login
 * @constant {string}
 */
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
   * Membuat variabel untuk menyimpan nilai email yang user inputkan
   * @constant {string}
   */
  const email = inputEmailElement.value;
  /**
   * Membuat variabel untuk menyimpan nilai email yang user inputkan
   * @constant {string}
   */
  const password = inputPasswordElement.value;
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
