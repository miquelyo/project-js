// public/custom.js
document.addEventListener('DOMContentLoaded', function () {
  const whatsappInput = document.getElementById('whatsapp');

  whatsappInput.addEventListener('input', function (event) {
    // Hanya izinkan angka, hapus karakter selain angka
    const sanitizedValue = event.target.value.replace(/\D/g, '');
    event.target.value = sanitizedValue;
  });
});

function validateAndSubmit(formType) {
  // Example: Check if username is empty
  const username = document.getElementById('username').value;
  if (!username) {
    showErrorAlert('Masukkan Username');
    return;
  }

  // Example: Check if password is empty
  const password = document.getElementById('password').value;
  if (!password) {
    showErrorAlert('Password is required.');
    return;
  } else if (password.length < 8) {
    showErrorAlert('Password must be at least 8 characters long.');
    return;
  }

  // Example: Check if email is empty and valid
  const email = document.getElementById('email').value;
  if (!email) {
    showErrorAlert('Masukkan Email');
    return;
  } else if (!isValidEmail(email)) {
    showErrorAlert('Alamat Email Tidak Ada, Silahkan cek kembali');
    return;
  }

  // Example: Check if WhatsApp is empty and valid
  const whatsapp = document.getElementById('whatsapp').value;
  if (!whatsapp) {
    showErrorAlert('Masukkan Nomor Whatsapp');
    return;
  } else if (!isValidWhatsApp(whatsapp)) {
    showErrorAlert('Nomor Whatsapp Tidak Ditemukan');
    return;
  }

  // Example: Show success alert
  showSuccessAlert('Registration successful! Redirecting to login page...');
  setTimeout(function () {
    window.location.href = '/login'; // Ganti dengan URL halaman login Anda
  }, 2000);
}

function showErrorAlert(message) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: message,
    confirmButtonColor: '#d33',
    confirmButtonText: 'OK'
  });
}

function showSuccessAlert(message) {
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: message,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
  });
}

function isValidEmail(email) {
  // Add your email validation logic here
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}



