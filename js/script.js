document.addEventListener('DOMContentLoaded', function() {
	updateTime();
	setInterval(updateTime, 1000);
  
	const startButton = document.getElementById('start-button');
	const startMenuContent = document.querySelector('.start-menu-content');
  
	startButton.addEventListener('click', function() {
	  startMenuContent.style.display = (startMenuContent.style.display === 'block') ? 'none' : 'block';
	});
  
	document.addEventListener('click', function(event) {
	  if (!event.target.matches('#start-button')) {
		startMenuContent.style.display = 'none';
	  }
	});
  });
  
  function updateTime() {
	const clockElement = document.getElementById('clock');
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const timeString = `${hours}:${minutes} ${hours < 12 ? 'AM' : 'PM'}`;
	clockElement.innerText = timeString;
  }
  