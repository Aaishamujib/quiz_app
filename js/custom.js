// Initial load 
window.onload = (event) => {
    timer();
    questionInit(0);
};


// Question button Action 
function radioBtnSelect(event) {
    let val = event.currentTarget.value;
    document.getElementById("answerBtn").setAttribute("attr-val", val);
}

// Questions Array 
const questions = [
    {
        question: " HTML is stand for _________",
        option: [
            "Hyper Text Markup Language",
            "Holistick Technical Method Library",
            "Hyper Tax Makes Line",
            "None of these"],
        answer: 0
    },
    {
        question: " HTML is a subset of ______",
        option: [
            "SGMD",
            "SGML",
            "SGMH",
            "None of the above"],
        answer: 1
    },
    {
        question: " ALL HTML tags are enclosed in what?",
        option: [
            " # and #",
            " ? and !",
            " < and >",
            " { and }"],
        answer: 2
    },
    {
        question: " To create HTML page, you need _____",
        option: [
            " Web browser",
            " text editor",
            " Both [A] and [B]",
            " None of the above"],
        answer: 2
    },
    {
        question: " <a> and </a> are the tags used for ______",
        option: [
            " Adding image",
            " Aligning text",
            " Audio-voiced text",
            " Adding links to your page"],
        answer: 3
    },
    {
        question: " To add a plain color background to your web page, use which of the following?",
        option: [
            '<body bgcolor= â€œ36,24,35â€>',
            '<body color= â€œ# FF000â€>',
            '<body bgcolor= â€œ# FF000â€>',
            'All of the above'],
        answer: 2
    },
    {
        question: " The BODY tag is usually used after ______",
        option: [
            " HTML tag",
            " EM tag",
            " TITLE tag",
            " HEAD tag"],
        answer: 3
    },
    {
        question: " Choose the correct HTML tag to make a text italic",
        option: [
            " <i>",
            " <italic>",
            " <it>",
            " <il>"],
        answer: 0
    },
    {
        question: " What does the <br> tag add to your webpage?",
        option: [
            " Long break",
            " Paragraph break",
            " Line break",
            " None of the above"],
        answer: 2
    },
    {
        question: " Adding a border to your image helps the visitor to recognize it as what?",
        option: [
            " A frame",
            " A link",
            " A picture",
            " None of the above"],
        answer: 1
    },
];

// results array 
var result = 0;

// Integrate Questions with option 
function questionInit(page = 0) {
    document.getElementById("answerBtn").setAttribute("attr-val", "");
    if (page < questions.length) {
        document.getElementById("question").innerHTML = encodeSpecialCharacter(questions[page].question);
        document.getElementById("answerBtn").setAttribute("attr-page", page);
        for (let i = 0; i < document.querySelectorAll(".answer").length; i++) {
            document.querySelectorAll(".answer")[i].checked = false;
            document.querySelectorAll(".answer")[i].value = encodeSpecialCharacter(questions[page].option[i]);
            document.querySelectorAll(".answer_label")[i].innerHTML = encodeSpecialCharacter(questions[page].option[i]);

        }
    }
    else {
        clearInterval();
        document.getElementById("resultDiv").classList.remove("hidediv");
        document.getElementById("quesDiv").classList.add("hidediv");
        document.getElementById("showresult").innerHTML = "Result " + result + " out of " + questions.length + "<br>Total Time : " + fullTime;
    }
}

// on submit answer 
document.getElementById("answerBtn").addEventListener("click", function (event) {
    let pageNo = event.currentTarget.getAttribute("attr-page");
    let tmpVal = event.currentTarget.getAttribute("attr-val");
    if (tmpVal == "" || tmpVal == undefined) {
        alert("you have to select the option");
        return;
    }
    if (pageNo < questions.length) {

        let index = questions[pageNo].answer;
        if (encodeSpecialCharacter(questions[pageNo].option[index]) == tmpVal) {
            result++;
        }
        questionInit(++pageNo);
    }

});

var min = 0;
var sec = 0;
min.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
var fullTime = "";
// Timer function 
function timer() {
    setInterval(function () {
        sec++;
        if (sec > 59) {
            min++;
            sec = 0;
        }
        fullTime = min.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + " : " + sec.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        document.getElementById("timer").innerHTML = fullTime;
    }, 1000);
}


//encode characters
function encodeSpecialCharacter(str) {
    return str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}