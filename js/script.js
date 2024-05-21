// Tunggu hingga DOM siap
document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen dengan id logoutButton
    var logoutButton = document.getElementById('logoutButton');

    // Tambahkan event listener untuk click
    logoutButton.addEventListener('click', function(event) {
        // Tampilkan alert
        alert('You have clicked logout!');

        // Jika Anda ingin menghentikan navigasi setelah klik (misalnya untuk logout ajax)
        // event.preventDefault();
    });
});