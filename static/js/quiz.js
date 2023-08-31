// Question List
var question = [{ "question" : "Quelle entreprise a développé le système d'exploitation Windows ?",
                    "reponse" : ["Apple", "Microsoft", "Google"],
                    "correct" : "Microsoft"},
                { "question" : "Quel langage de programmation est souvent utilisé pour créer des applications mobiles Android ?",
                    "reponse" : ["Swift", "Java", "C#"],
                    "correct" : "Java"},
                { "question" : "Quelle est la fonction principale d'un serveur web ?",
                    "reponse" : ["Gérer les e-mails", "Stocker des données", "Fournir des pages web"],
                    "correct" : "Fournir des pages web"},
                { "question" : "Qu'est-ce que le \"cloud computing\" ?",
                    "reponse" : ["Un type de jeu vidéo", "Un modèle de partage de fichiers", "La livraison de services informatiques via Internet"],
                    "correct" : "La livraison de services informatiques via Internet"},
                { "question" : "Quelle est l'unité de base de la mémoire informatique ?",
                    "reponse" : ["Byte", "Bit", "Megabyte"],
                    "correct" : "Byte"},
                { "question" : "Quelle est la différence entre le logiciel libre et le logiciel open source ?",
                    "reponse" : ["Aucune différence", "Le logiciel libre peut être modifié, le logiciel open source ne peut pas", "Le logiciel libre met l'accent sur la liberté, tandis que le logiciel open source met l'accent sur l'accès au code source"], 
                    "correct" : "Le logiciel libre met l'accent sur la liberté, tandis que le logiciel open source met l'accent sur l'accès au code source"},
                { "question" : "Qu'est-ce qu'un algorithme ?",
                    "reponse" : ["Un type d'ordinateur", "Une séquence d'instructions pour résoudre un problème", "Un outil de design graphique"],
                    "correct" : "Une séquence d'instructions pour résoudre un problème"},
                { "question" : "Quelle technologie permet aux ordinateurs de fonctionner en simulant le comportement du cerveau humain ?",
                    "reponse" : ["Intelligence artificielle", "Réalité virtuelle", "Réseau de neurones artificiels"],
                    "correct" : "Réseau de neurones artificiels"},
                { "question" : "Quelle est la fonction du protocole HTTPS ?",
                    "reponse" : ["Protéger les ordinateurs contre les virus", "Crypter les communications entre un navigateur et un site web", "Accélérer la vitesse de navigation"],
                    "correct" : "Crypter les communications entre un navigateur et un site web"}
                ];


// Variables
var score = 0;
var currentQuestion = 0;

// buttons
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');



// At the loading of the page, load the first question
window.onload = function() {
    loadQuestion();
    alert("Bienvenue sur le quiz !\n\nVous allez devoir répondre à 9 questions.\n\nBonne chance !");
}


// When the user click on an answer
answer1.addEventListener('click', function() {
    answer('answer1');
});
answer2.addEventListener('click', function() {
    answer('answer2');
});
answer3.addEventListener('click', function() {
    answer('answer3');
});



// Load the question and the answers
function loadQuestion() {

    // Display the score
    document.getElementById("score").innerHTML = "Score : " + score + " / " + question.length;

    // Display the progress
    document.getElementById("progress").innerHTML = "Question " + (currentQuestion + 1) + " / " + question.length;

    // Display the question number
    document.getElementById("questionNumber").innerHTML = "Question " + (currentQuestion + 1) + " / " + question.length;

    // Display the question
    var questionText = document.getElementById("question");
    questionText.innerHTML = question[currentQuestion].question;

    // Init the buttons
    document.getElementById("answer1").disabled = false;
    document.getElementById("answer2").disabled = false;
    document.getElementById("answer3").disabled = false;
    document.getElementById("answer1").className = "button";
    document.getElementById("answer2").className = "button";
    document.getElementById("answer3").className = "button";

    // Display the answers
    var answer1 = document.getElementById("answer1");
    answer1.innerHTML = question[currentQuestion].reponse[0];
    var answer2 = document.getElementById("answer2");
    answer2.innerHTML = question[currentQuestion].reponse[1];
    var answer3 = document.getElementById("answer3");
    answer3.innerHTML = question[currentQuestion].reponse[2];


    // hide the divResult
    document.getElementById("divResult").style.display = "none";


    // block the next button
    document.getElementById("next").disabled = true;
}



// when the user click on an answer
function answer(id) {
    // Get the answer
    var answer = document.getElementById(id).innerHTML;

    // Check if the answer is correct
    if (answer == question[currentQuestion].correct) {
        // Increment the score
        score++;
        // Change the class css of the answer
        document.getElementById(id).className = "button btn-success";


        document.getElementById("divResult").style.display = "block";
        document.getElementById("divResult").innerHTML = "Correct !";
    } else {
        // Change the class css of the answer
        document.getElementById(id).className = "button btn-wrong";

        document.getElementById("divResult").style.display = "block";
        // Display the result and give the correct answer
        document.getElementById("divResult").innerHTML = "Incorrect ! La bonne réponse était : " + question[currentQuestion].correct;
    }

    // Disable the button
    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
    document.getElementById("answer3").disabled = true;

    // Display the next button
    document.getElementById("next").disabled = false;
}


// When the user click on the next button
document.getElementById("next").addEventListener("click", function() {
    // Increment the currentQuestion
    currentQuestion++;

    // Check if the quiz is finished
    if (currentQuestion == question.length) {
        // Display the score
        document.getElementById("score").innerHTML = "Score : " + score + " / " + question.length;

        // Display the progress
        document.getElementById("progress").innerHTML = "Question " + (currentQuestion) + " / " + question.length;

        // Display the question number
        document.getElementById("questionNumber").innerHTML = "Question " + (currentQuestion) + " / " + question.length;

        // Display the question
        var questionText = document.getElementById("question");
        questionText.innerHTML = "Quiz terminé !";

        // Hide the answers
        document.getElementById("answer1").style.display = "none";
        document.getElementById("answer2").style.display = "none";
        document.getElementById("answer3").style.display = "none";

        // Hide the divResult
        document.getElementById("divResult").style.display = "none";

        // Hide the next button
        document.getElementById("next").style.display = "none";

        // Display the restart button
        document.getElementById("restart").style.display = "block";

    } else {
        // Load the next question
        loadQuestion();
    }
});
