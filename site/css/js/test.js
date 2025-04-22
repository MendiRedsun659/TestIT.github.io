document.addEventListener('DOMContentLoaded', function() {
    // Таймер обратного отсчета (30 минут)
    let timeLeft = 30 * 60; // 30 минут в секундах
    const timer = document.getElementById('time');
    
    const countdown = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        timer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            submitTest();
        } else {
            timeLeft--;
        }
    }, 1000);

    // Обработка отправки теста
    const testForm = document.getElementById('oop-test');
    
    testForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitTest();
    });

    function submitTest() {
        clearInterval(countdown);
        
        // Проверка ответов (правильные ответы)
        const correctAnswers = {
            q1: 'b', // Инкапсуляция
            q2: 'c'  // Наследование
            // Добавьте больше правильных ответов
        };
        
        let score = 0;
        const totalQuestions = Object.keys(correctAnswers).length;
        
        // Проверка каждого вопроса
        for (const question in correctAnswers) {
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            
            if (selectedOption && selectedOption.value === correctAnswers[question]) {
                score++;
            }
        }
        
        // Сохранение результатов и переход на страницу результатов
        localStorage.setItem('oopTestScore', `${score}/${totalQuestions}`);
        window.location.href = 'results.html';
    }
});