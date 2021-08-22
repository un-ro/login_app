/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

const buttonLogoutElement = document.querySelector('#buttonLogout');

buttonLogoutElement.addEventListener('click', function() {
    /* Comment : Menambahkan fungsionalitas untuk kembali ke halaman login */
    goToLogin();  
});
