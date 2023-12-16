let timer;
  let timeRemaining = 0;

  function setInitialTime() {
    const initialTimeInput = document.getElementById("initialTime");
    const userInputTime = parseTimeString(initialTimeInput.value);
    
    if (userInputTime !== null) {
      timeRemaining = userInputTime;
      updateTimerDisplay();
    } else {
      alert("Please enter a valid time format (e.g., 1m 30s).");
    }
  }

  function parseTimeString(timeString) {
    const match = timeString.match(/(\d+)m?\s?(\d+)s?/);
    
    if (match) {
      const minutes = parseInt(match[1], 10) || 0;
      const seconds = parseInt(match[2], 10) || 0;
      return minutes * 60 + seconds;
    }
    
    return null;
  }

  function startTimer() {
    timer = setInterval(updateTimer, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  function resetTimer() {
    stopTimer();
    timeRemaining = 0;
    document.getElementById("initialTime").value = "";
    updateTimerDisplay();
  }

  function updateTimer() {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateTimerDisplay();
    } else {
      stopTimer();
      alert("Countdown complete!");
    }
  }

  function updateTimerDisplay() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    const formattedTime = padNumber(hours) + ":" + padNumber(minutes) + ":" + padNumber(seconds);
    document.getElementById("timer").innerText = formattedTime;
  }

  function padNumber(number) {
    return (number < 10 ? "0" : "") + number;
  }