document.addEventListener('DOMContentLoaded', function() {
            
    // --- FITUR KALKULATOR ---
    const biayaInput = document.querySelector('.biaya-input');
    const semesterInput = document.querySelector('.semester-input');
    const textSemester = document.querySelector('.semester-val');
    const textTotal = document.querySelector('.total-biaya');

    function hitungBiaya() {
        const biaya = parseInt(biayaInput.value) || 0;
        const semester = parseInt(semesterInput.value) || 0;
        const total = biaya * semester;
        
        textSemester.textContent = semester;
        textTotal.textContent = total.toLocaleString('id-ID'); // Format ke Rupiah
    }

    if (biayaInput && semesterInput) {
        biayaInput.addEventListener('input', hitungBiaya);
        semesterInput.addEventListener('input', hitungBiaya);
    }


    // --- FITUR TOMBOL KIRIM FORM ---
    const tombolKirim = document.getElementById('btnKirim');

    if (tombolKirim) {
        tombolKirim.addEventListener('click', function() {
            // 1. Munculkan peringatan berhasil
            alert('Pendaftaran Mahasiswa Baru Berhasil Terkirim!');
            
            // 2. Kosongkan kembali inputan form
            const inputs = document.querySelectorAll('.modal-body input');
            inputs.forEach(input => input.value = '');
            const select = document.querySelector('.modal-body select');
            if (select) select.selectedIndex = 0;

            // 3. Tutup pop-up form otomatis (menggunakan fungsi Bootstrap)
            const modalElement = document.getElementById('modalPendaftaran');
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            if (modalInstance) {
                modalInstance.hide();
            }
        });
    }
});
