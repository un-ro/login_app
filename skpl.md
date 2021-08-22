# Dokumen Spesifikasi Kebutuhan Autentikasi pada Aplikasi Web

## Pengantar
1. **Tujuan Aplikasi:**  
Pengguna dapat **mengakses isi dari halaman aplikasi web** setelah **login** dan dapat **menutup akses setelah logout**.

2. Sasaran Pengguna:  
Semua pengguna atau masyarakat umum yang sudah memiliki hak akses dalam website.

## Kebutuhan Pengguna
1. Deskripsi Umum Aplikasi:  
Autentikasi dari sebuah halaman website adalah hal yang penting. Kita harus mengetahui elemen apa saja yang dibutuhkan untuk masuk ke halaman website seperti email, password, dan tombol login.  
Ketika pengguna berhasil melakukan autentikasi dengan memasukkan email dan password dengan benar, maka ia dapat mengakses konten website yang ada di dalamnya. Sedangkan jika pengguna tidak berhasil melakukan proses autentikasi, pengguna tidak dapat mengakses konten yang ada dan harus memeriksa kembali apakah email dan password yang dimasukkan sudah benar.  
Supaya lebih aman, ketika pengguna selesai mengakses konten website, ia dapat melakukan proses logout dengan menekan tombol logout yang ada di dalam halaman website tersebut. Setelah logout, pengguna akan keluar dari konten halaman website dan harus melakukan autentikasi kembali untuk bisa masuk.

2. Kegunaan Aplikasi:
- Pengguna dapat masuk (login) untuk mengakses konten yang ada di halaman website.
- Aplikasi dapat memeriksa penulisan format email di dalam form pengisian email.
- Pengguna dapat memasukkan password dengan aman karena antarmuka form password tersamarkan visibility-nya.
- Pengguna dapat keluar (logout) dari halaman konten website dengan menekan tombol logout.

## Spesifikasi Kebutuhan Sistem
1. Kebutuhan Fungsional
- Sistem menyediakan form login yang berisi email dan password yang harus diisi pengguna. Kemudian di sana juga terdapat tombol login. Ketika tombol tersebut ditekan, pengguna yang sudah melengkapi email dan password dengan benar dapat mengakses konten halaman website.
- Pengguna dapat keluar dari konten halaman website dengan menekan tombol logout.

2. Kebutuhan Non Fungsional
- Ketika pengguna memasukkan email di dalam form email, sistem dapat memeriksa apakah inputan tersebut sudah sesuai dengan struktur email yang benar. Jika tidak sesuai, pengguna diberi pengingat bahwa belum mengisi form email dengan benar.
- Ketika pengguna memasukkan password di dalam form password, sistem dapat menyembunyikan setiap huruf yang diketikkan. Sehingga, pengguna akan merasa aman ketika mengetik passwordnya di tempat umum sekalipun.

3. Antarmuka Pengguna (User interface)
- Perangkat lunak frontend: HTML dan CSS
- Perangkat lunak backend: JavaScript

4. Antarmuka perangkat keras (Hardware interface)  
Komputer atau ponsel cerdas dengan browser yang sudah terinstal di dalamnya.

## Rencana Pengembangan Sistem:
Dalam pengembangan sistem ke depannya, pengembang software akan menambahkan fitur sebagai berikut:

- Sistem harus bisa menyediakan fitur pengguna untuk logout.