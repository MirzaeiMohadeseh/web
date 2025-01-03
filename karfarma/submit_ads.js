function handleDecisionSubmit(event, messageId) {
    event.preventDefault(); // جلوگیری از ارسال فرم پیش‌فرض

    // دریافت گزینه انتخاب شده
    var selectedDecision = event.target.elements['decision'].value;

    // نمایش پیام و گزینه انتخاب شده
    var messageDiv = document.getElementById(messageId);
    messageDiv.innerHTML = `"${selectedDecision}" ثبت شد`;

    // حذف گزینه‌های تایید و رد کردن و دکمه ثبت
    event.target.style.display = 'none';
}
