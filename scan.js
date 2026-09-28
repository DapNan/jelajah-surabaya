const camera = document.getElementById("camera");
const scanButton = document.getElementById("scanButton");
const cameraMessage = document.getElementById("cameraMessage");

const arModal = document.getElementById("arModal");
const closeArModal = document.getElementById("closeArModal");

let cameraStream = null;


/* =========================
   AKTIFKAN KAMERA
========================= */

async function startCamera() {

    try {

        cameraStream = await navigator.mediaDevices.getUserMedia({

            video: {
                facingMode: {
                    ideal: "environment"
                }
            },

            audio: false

        });

        camera.srcObject = cameraStream;

        cameraMessage.textContent =
            "Kamera siap. Arahkan ke penanda Tugu Pahlawan.";

    }

    catch (error) {

        console.error(error);

        cameraMessage.textContent =
            "Kamera tidak dapat diakses. Izinkan akses kamera pada browser.";

    }

}


/* =========================
   SCAN
========================= */

scanButton.addEventListener("click", function () {

    /*
       Untuk prototype:
       tombol Scan dianggap berhasil
       mendeteksi marker Tugu Pahlawan.
    */

    arModal.classList.add("show");


    /* Matikan kamera */

    if (cameraStream) {

        cameraStream.getTracks().forEach(track => {
            track.stop();
        });

    }

});


/* =========================
   TUTUP MODAL
========================= */

closeArModal.addEventListener("click", function () {

    arModal.classList.remove("show");

    startCamera();

});


/* Klik area luar modal */

arModal.addEventListener("click", function(event) {

    if (event.target === arModal) {

        arModal.classList.remove("show");

        startCamera();

    }

});


/* =========================
   MULAI
========================= */

startCamera();