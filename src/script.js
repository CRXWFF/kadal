document.addEventListener('DOMContentLoaded', function() {
  // Toggle sidebar menu items
  const enrolledButton = document.querySelector('.sidebar-section-header');
  const classItems = document.querySelectorAll('.class-item');
  
  let isCollapsed = false;
  
  enrolledButton.addEventListener('click', function() {
    isCollapsed = !isCollapsed;
    
    classItems.forEach(item => {
      if (isCollapsed) {
        item.style.display = 'none';
      } else {
        item.style.display = 'flex';
      }
    });
    
    // Toggle caret icon
    const caret = enrolledButton.querySelector('i:first-child');
    if (caret) {
      if (isCollapsed) {
        caret.classList.remove('fa-caret-down');
        caret.classList.add('fa-caret-right');
      } else {
        caret.classList.remove('fa-caret-right');
        caret.classList.add('fa-caret-down');
      }
    }
  });
  
  // Tab navigation
  const tabItems = document.querySelectorAll('.tab-item');
  
  tabItems.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all tabs
      tabItems.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
    });
  });
  
  // Announcement input focus effect
  const announcementInput = document.querySelector('.announcement-input input');
  
  if (announcementInput) {
    announcementInput.addEventListener('focus', function() {
      this.parentElement.style.boxShadow = '0 1px 2px rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15)';
    });
    
    announcementInput.addEventListener('blur', function() {
      this.parentElement.style.boxShadow = '';
    });
  }
});