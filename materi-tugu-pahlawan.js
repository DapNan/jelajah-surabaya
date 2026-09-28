const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const audioStatus = document.getElementById("audioStatus");

const answers = document.querySelectorAll(".answer");
const feedback = document.getElementById("answerFeedback");


/* =========================
   AUDIO
========================= */

playButton.addEventListener("click", function () {

    if (audio.paused) {

        audio.play();

        playButton.textContent = "❚❚";
        audioStatus.textContent = "Sedang diputar...";

    } else {

        audio.pause();

        playButton.textContent = "▶";
        audioStatus.textContent = "Audio dijeda";

    }

});


audio.addEventListener("ended", function () {

    playButton.textContent = "▶";
    audioStatus.textContent = "Audio selesai";

});


/* =========================
   AKTIVITAS
========================= */

answers.forEach((answer, index) => {

    answer.addEventListener("click", function () {

        /* Reset */

        answers.forEach(item => {
            item.classList.remove("correct");
            item.classList.remove("wrong");
        });


        /*
        Jawaban benar adalah pilihan kedua
        index = 1
        */

        if (index === 1) {

            answer.classList.add("correct");

            feedback.className =
                "answer-feedback show correct-feedback";

            feedback.textContent =
                "✓ Benar! Tugu Pahlawan menjadi salah satu pengingat perjuangan dan pengorbanan para pahlawan di Surabaya.";

        } else {

            answer.classList.add("wrong");

            feedback.className =
                "answer-feedback show wrong-feedback";

            feedback.textContent =
                "Coba lagi. Baca kembali bagian materi tentang makna Tugu Pahlawan.";

        }

    });

});