<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Welcome to Chat-Bot</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet"
        href="http://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0">
    <script src="script.js" defer></script>
</head>

<body >
    <button class=" chatbot-toggler">
        <span class="material-symbols-outlined comment-icon">mode_comment</span>
        <span class="material-symbols-outlined close-icon">close</span>
    </button>
    <div class="chatbot">
        <header>
            <h2>Chatbot</h2>
            <span class=" close-btn material-symbols-outlined">close</span>
        </header>
        <ul class="chatbox">
            <li class="chat incoming">
                <span class="material-symbols-outlined">smart_toy</span>
                <p >Hii there...<br> How can i help you today?</p>
            </li>
            <!-- <li class="chat outgoing">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> -->
        </ul>
        <div class="chat-input">
            <textarea placeholder="Enter a message..." required></textarea>
            <span class="material-symbols-outlined" id="send-btn">send</span>
        </div>
    </div>
</body>

</html>
