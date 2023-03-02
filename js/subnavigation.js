// Get elements
const panelButtons = document.querySelectorAll('.panel-trigger');
const panels = document.querySelectorAll('.panel');
const closeButtons = document.querySelectorAll('.close-panel');

// Add click event listeners to panel buttons
panelButtons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    // Get the panel to show based on the data-panel attribute
    const panelToShow = document.getElementById(this.dataset.panel);
    // Hide all panels
    panels.forEach(function(panel) {
      panel.classList.remove('panel-open');
    });
    // Show the panel we want to show
    panelToShow.classList.add('panel-open');
    // Add close button click event listener
    const closeButton = panelToShow.querySelector('.close-panel');
    closeButton.addEventListener('click', function() {
      panelToShow.classList.remove('panel-open');
    });
  });
});
