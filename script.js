// =====================================
// OPEN INVITATION
// =====================================

function openInvitation(){

    const envelope = document.querySelector(".envelope");
    const letter = document.querySelector(".letter");
    const stitch = document.querySelector(".stitch");
    const bgm = document.getElementById("bgm");

    // supaya tidak bisa diklik berkali-kali
    envelope.style.pointerEvents = "none";

    // mulai musik
    bgm.play().catch(()=>{});

    // buka amplop
    envelope.classList.add("open");

    // surat mulai zoom
    setTimeout(()=>{

        letter.classList.add("zoom");

    },1500);

    // hilangkan halaman amplop
    setTimeout(()=>{

        const page = document.getElementById("envelope-page");

        page.style.opacity="0";

    },2400);

    // tampilkan halaman utama
    setTimeout(()=>{

        document.getElementById("envelope-page").style.display="none";

        const main=document.getElementById("main-content");

        main.style.display="block";

        setTimeout(()=>{

            main.classList.add("show");

        },100);

    },3200);

}

// =====================
// COUNTDOWN
// =====================

const eventDate = new Date("July 10, 2026 19:00:00").getTime();

const countdown = setInterval(function(){

    const now = new Date().getTime();

    const distance = eventDate-now;

    const day = Math.floor(distance/(1000*60*60*24));

    const hour = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minute = Math.floor((distance%(1000*60*60))/60000);

    const second = Math.floor((distance%(1000*60))/1000);

    const countdownDiv=document.getElementById("countdown");

    if(countdownDiv){

        countdownDiv.innerHTML=
        `
        <h2>${day} Days</h2>
        <h3>${hour} Hours ${minute} Minutes ${second} Seconds</h3>
        `;

    }

    if(distance<0){

        clearInterval(countdown);

        if(countdownDiv){

            countdownDiv.innerHTML=
            "<h2>🎉 Today is the Bridal Shower 🎉</h2>";

        }

    }

},1000);

// =====================
// GALLERY ANIMATION
// =====================

const images=document.querySelectorAll(".gallery-grid img");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-image");

        }

    });

},{
    threshold:.2
});

images.forEach(img=>observer.observe(img));

// =====================
// TIMELINE ANIMATION
// =====================

const items=document.querySelectorAll(".timeline-item");

const observer2=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-item");

        }

    });

},{
    threshold:.3
});

items.forEach(item=>observer2.observe(item));