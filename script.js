let score = 0;
let errors = 0;

function startApp() {
    document.querySelector('.hero-section').style.display = 'none';
    document.getElementById('app-container').style.display = 'block';
    renderActivity();
}

function renderActivity() {
    const container = document.getElementById('activity-card');
    container.innerHTML = `
        <h2>Select the correct animal</h2>
        <div style="display:grid; gap: 15px; margin-top: 20px;">
            <button class="btn-start" onclick="verify(true)">Cat</button>
            <button class="btn-start" onclick="verify(false)">Dog</button>
        </div>
        <div id="feedback" style="margin-top:20px;"></div>
    `;
}

function verify(isCorrect) {
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        score += 10;
        feedback.innerText = "Correct!";
        feedback.style.color = "green";
        setTimeout(showFinal, 1000);
    } else {
        errors += 1;
        feedback.innerText = "Try again!";
        feedback.style.color = "red";
    }
}

function showFinal() {
    document.getElementById('activity-card').innerHTML = `
        <h2>Final Result</h2>
        <p>Score: ${score}/10</p>
        <p>Errors: ${errors}</p>
        <button class="btn-start" onclick="location.reload()">Restart</button>
    `;
}
