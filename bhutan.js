/* =========================
   SMOOTH SCROLL
========================= */

function scrollSection(id){

    document.getElementById(id).scrollIntoView({
        behavior:'smooth'
    });

}

/* =========================
   FEEDBACK FORM
========================= */

const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', function(e){

    e.preventDefault();

    alert("Thank you for your feedback!");

    feedbackForm.reset();

});

/* =========================
   AI CHATBOT
========================= */

function sendMessage(){

    const input = document.getElementById('userInput');

    const chatBox = document.getElementById('chatBox');

    let text = input.value.trim();

    if(text === "") return;

    /* USER MESSAGE */

    let userMsg = document.createElement('div');

    userMsg.classList.add('user-message');

    userMsg.innerText = text;

    chatBox.appendChild(userMsg);

    /* CREATE BOT MESSAGE */

    let botMsg = document.createElement('div');

    botMsg.classList.add('bot-message');

    let reply = "";

    let userText = text.toLowerCase();

    /* =========================
       AI RESPONSES
    ========================= */

    if(
        userText.includes('hello') ||
        userText.includes('hi')
    ){

        reply = "Hello! Welcome to Discover Bhutan.";

    }

    else if(
        userText.includes('food')
    ){

        reply =
        "Bhutanese food includes Ema Datshi, Momos, Butter Tea and Red Rice.";

    }

    else if(
        userText.includes('momo')
    ){

        reply =
        "Momos are delicious dumplings loved all across Bhutan.";

    }

    else if(
        userText.includes('ema datshi')
    ){

        reply =
        "Ema Datshi is Bhutan’s famous spicy chili and cheese dish.";

    }

    else if(
        userText.includes('culture')
    ){

        reply =
        "Bhutanese culture is rich with festivals, monasteries and traditional arts.";

    }

    else if(
        userText.includes('festival')
    ){

        reply =
        "Bhutan celebrates colorful Tshechu festivals every year.";

    }

    else if(
        userText.includes('dress') ||
        userText.includes('clothes')
    ){

        reply =
        "Traditional Bhutanese clothes are Gho for men and Kira for women.";

    }

    else if(
        userText.includes('place') ||
        userText.includes('tourist')
    ){

        reply =
        "Popular places include Tiger Nest, Paro Valley and Punakha Dzong.";

    }

    else if(
        userText.includes('paro')
    ){

        reply =
        "Paro is one of Bhutan’s most beautiful valleys and home to Tiger Nest.";

    }

    else if(
        userText.includes('punakha')
    ){

        reply =
        "Punakha Dzong is one of the most famous monasteries in Bhutan.";

    }

    else if(
        userText.includes('hotel')
    ){

        reply =
        "You can search hotels using the hotel booking section.";

    }

    else if(
        userText.includes('flight')
    ){

        reply =
        "Flights to Bhutan are available through Paro International Airport.";

    }

    else if(
        userText.includes('weather')
    ){

        reply =
        "Bhutan usually has cool mountain weather with beautiful scenery.";

    }

    else if(
        userText.includes('capital')
    ){

        reply =
        "The capital city of Bhutan is Thimphu.";

    }

    else if(
        userText.includes('language')
    ){

        reply =
        "Dzongkha is the national language of Bhutan.";

    }

    else if(
        userText.includes('thank')
    ){

        reply =
        "You're welcome! Enjoy exploring Bhutan.";

    }

    else if(
        userText.includes('bye')
    ){

        reply =
        "Goodbye! Have a wonderful trip to Bhutan.";

    }

    else{

        reply =
        "Bhutan is known as the Land of Happiness with beautiful mountains, culture and tourism.";

    }

    /* =========================
       SHOW BOT MESSAGE
    ========================= */

    setTimeout(() => {

        botMsg.innerText = reply;

        chatBox.appendChild(botMsg);

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 500);

    /* CLEAR INPUT */

    input.value = "";

}

/* =========================
   ENTER KEY SUPPORT
========================= */

const userInput = document.getElementById('userInput');

userInput.addEventListener('keypress', function(e){

    if(e.key === 'Enter'){

        sendMessage();

    }

});

/* =========================
   NAVBAR BACKGROUND ON SCROLL
========================= */

window.addEventListener('scroll', function(){

    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 50){

        navbar.style.background = "rgba(0,0,0,0.9)";

    }

    else{

        navbar.style.background = "rgba(0,0,0,0.5)";

    }

});

/* =========================
   CARD HOVER EFFECT
========================= */

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

/* =========================
   BUTTON CLICK EFFECT
========================= */

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('click', () => {

        button.style.transform = "scale(0.95)";

        setTimeout(() => {

            button.style.transform = "scale(1)";

        }, 100);

    });

});