    // Memastikan seluruh HTML selesai dimuat sebelum menjalankan Script
        document.addEventListener('DOMContentLoaded', function() {
            
            // --- FITUR MODAL ---
            const modal = document.querySelector('.modal-overlay');
            const btnOpen = document.querySelector('.show-form-btn');
            const btnClose = document.querySelector('.close-form-btn');

            // Fungsi Buka Form
            btnOpen.addEventListener('click', function() {
                modal.style.display = 'flex';
            });

            // Fungsi Tutup Form
            btnClose.addEventListener('click', function() {
                modal.style.display = 'none';
            });


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
                textTotal.textContent = total.toLocaleString('id-ID'); // Format angka ke Rupiah
            }

            // Panggil fungsi hitung otomatis setiap kali user mengetik
            biayaInput.addEventListener('input', hitungBiaya);
            semesterInput.addEventListener('input', hitungBiaya);
        });