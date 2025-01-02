function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.getElementById("openBtn").style.display = "none"; // پنهان کردن دکمه باز کردن سایدبار
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("openBtn").style.display = "block"; // نمایش دکمه باز کردن سایدبار
}

function sendMessage() {
    var message = document.getElementById("messageInput").value;
    if (message) {
        var chatBox = document.getElementById("chatBox");
        var messageDiv = document.createElement("div");
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        document.getElementById("messageInput").value = "";
        chatBox.scrollTop = chatBox.scrollHeight; // اسکرول به انتهای چت
    }
}
