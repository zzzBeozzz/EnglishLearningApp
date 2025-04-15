const clips = [
    {
        word: "two peas in a pod",
        videoSrc: "video1.mp4", 
        question: "What does 'two peas in a pod' mean in this context?",
        options: [
            "a) Very similar or close",
            "b) Very different",
            "c) Always arguing",
            "d) Never together"
        ],
        correctAnswer: "a",
        definition: "'Two peas in a pod' means two people who are very similar or very close, often spending a lot of time together."
    },
    {
        word: "wussing out",
        videoSrc: "video2.mp4", 
        question: "What does 'wussing out' mean in this context?",
        options: [
            "a) Being brave",
            "b) Backing out due to fear",
            "c) Winning a competition",
            "d) Helping a friend"
        ],
        correctAnswer: "b",
        definition: "'Wussing out' means to back out of something due to fear or lack of courage."
    },
    {
        word: "made a pact",
        videoSrc: "video3.mp4", 
        question: "What does 'made a pact' mean in this context?",
        options: [
            "a) Broke a promise",
            "b) Made a secret plan",
            "c) Formed an agreement",
            "d) Ended a friendship"
        ],
        correctAnswer: "c",
        definition: "'Made a pact' means to form an agreement or promise with someone."
    },
    {
        word: "coveted",
        videoSrc: "video4.mp4", 
        question: "What does 'coveted' mean in this context?",
        options: [
            "a) Ignored",
            "b) Strongly desired",
            "c) Given away",
            "d) Hidden"
        ],
        correctAnswer: "b",
        definition: "'Coveted' means something that is strongly desired or wished for."
    },
    {
        word: "throwing me to the wolves",
        videoSrc: "video5.mp4", 
        question: "What does 'throwing me to the wolves' mean in this context?",
        options: [
            "a) Protecting me",
            "b) Leaving me in a dangerous situation",
            "c) Teaching me to hunt",
            "d) Inviting me to a party"
        ],
        correctAnswer: "b",
        definition: "'Throwing me to the wolves' means leaving someone in a difficult or dangerous situation without support."
    },
    {
        word: "cold feet",
        videoSrc: "video6.mp4", 
        question: "What does 'cold feet' mean in this context?",
        options: [
            "a) Feeling nervous and backing out",
            "b) Having a cold illness",
            "c) Being very confident",
            "d) Running away quickly"
        ],
        correctAnswer: "a",
        definition: "'Cold feet' means feeling nervous or hesitant about something, often leading to backing out."
    },
    {
        word: "making quite a splash",
        videoSrc: "video7.mp4", 
        question: "What does 'making quite a splash' mean in this context?",
        options: [
            "a) Swimming in a pool",
            "b) Causing a mess",
            "c) Creating a big impact",
            "d) Being very quiet"
        ],
        correctAnswer: "c",
        definition: "'Making quite a splash' means creating a significant impact or impression."
    },
    {
        word: "pop over",
        videoSrc: "video8.mp4", 
        question: "What does 'pop over' mean in this context?",
        options: [
            "a) Explode suddenly",
            "b) Visit quickly",
            "c) Cook a meal",
            "d) Leave forever"
        ],
        correctAnswer: "b",
        definition: "'Pop over' means to visit someone briefly or quickly."
    },
    {
        word: "offering to give me the dough",
        videoSrc: "video9.mp4", 
        question: "What does 'offering to give me the dough' mean in this context?",
        options: [
            "a) Offering to bake bread",
            "b) Offering to give me money",
            "c) Offering to teach me cooking",
            "d) Offering to lend me a book"
        ],
        correctAnswer: "b",
        definition: "'Offering to give me the dough' means offering to give money ('dough' is slang for money)."
    },
    {
        word: "coinkydink",
        videoSrc: "video10.mp4", 
        question: "What does 'coinkydink' mean in this context?",
        options: [
            "a) A planned event",
            "b) A coincidence",
            "c) A type of candy",
            "d) A secret code"
        ],
        correctAnswer: "b",
        definition: "'Coinkydink' is a playful way of saying 'coincidence,' meaning an unexpected event happening by chance."
    }
];

let currentClipIndex = 0;

function loadClip(index) {
    const clip = clips[index];
    document.getElementById("highlightedWord").textContent = clip.word;
    document.getElementById("videoSource").src = clip.videoSrc;
    document.getElementById("videoPlayer").load(); // Reload the video player with the new source
    document.getElementById("definitionSection").style.display = "none";

    document.getElementById("question").textContent = clip.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    clip.options.forEach((option, i) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = String.fromCharCode(97 + i);
        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + option));
        optionsDiv.appendChild(label);
        optionsDiv.appendChild(document.createElement("br"));
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    const definitionSection = document.getElementById("definitionSection");
    const definitionText = document.getElementById("definition");

    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = clips[currentClipIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
        definitionText.textContent = clips[currentClipIndex].definition;
        definitionSection.classList.add("correct");
        definitionSection.style.display = "block";
        alert("Correct! Great job! 🎉");

        // Move to the next clip after a short delay
        setTimeout(() => {
            nextClip();
        }, 10000); // 10-second delay to allow the user to read the definition
    } else {
        alert("Incorrect. Try again! 😊");
    }
}

function previousClip() {
    if (currentClipIndex > 0) {
        currentClipIndex--;
        loadClip(currentClipIndex);
    }
}

function nextClip() {
    if (currentClipIndex < clips.length - 1) {
        currentClipIndex++;
        loadClip(currentClipIndex);
    } else {
        alert("You've completed all the lessons for Modern Family! 🎉 Returning to the sitcom selection page...");
        setTimeout(() => {
            window.location.href = "index.html"; // Redirect back to the feature page
        }, 10000); // 10-second delay before redirecting
    }
}

function loopClip() {
    const video = document.getElementById("videoPlayer");
    video.loop = !video.loop;
    alert(video.loop ? "Looping enabled 🔄" : "Looping disabled ⏹️");
}

// Initialize the first clip
loadClip(currentClipIndex);