const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(" .chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler=document.querySelector(".chatbot-toggler");
const chatbotCloseBtn=document.querySelector(".close-btn");

let userMessage;
const API_KEY = "AIzaSyDQMneo83__0RRVlzLqxecr8NwU27W_hrw";
const inputIniHeight=chatInput.scrollHeight;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `
                <span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent=message;
    return chatLi;
}

const generateResponse = () => {
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;
    const incomingChatLi = chatbox.querySelector(".chat.incoming:last-child");
    if (!incomingChatLi) {
        console.error("Incoming chat placeholder ('thinking...') not found.");
        return;
    }
    const messageElement = incomingChatLi.querySelector("p");
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{
                role: "user",
                parts: [{ text: userMessage }]
            }]
        }),
    };
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        // console.log(data);
        messageElement.textContent = data.candidates[0].content.parts[0].text;
    }).catch((error) => {
        // console.log(error);
        messageElement.classList.add("error");
        messageElement.textContent = "Oops!  Something went wrong. Plaese try again."
    }).finally(()=>    chatbox.scrollTo(0,chatbox.scrollHeight));
}


const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatInput.value="";
    chatInput.style.height=`${inputIniHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0,chatbox.scrollHeight);
    // console.log(userMessage);

    setTimeout(() => {
        const incomingChatLi = createChatLi("thinking...", "incoming")
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0,chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600)
    // generateResponse();
}

chatInput.addEventListener("input",()=>{
    chatInput.style.height=`${inputIniHeight}px`;
    chatInput.style.height=`${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown",(e)=>{
    if(e.key === "Enter" && !e.shiftKey ){
        e.preventDefault();
        handleChat();
    } 
});

sendChatBtn.addEventListener("click", handleChat);

chatbotToggler.addEventListener("click",()=>{
    document.body.classList.toggle("show-chatbot");
});
chatbotCloseBtn.addEventListener("click",()=>{
    document.body.classList.remove("show-chatbot");
});