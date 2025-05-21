document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    menuButton.addEventListener('click', function() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });
    
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const recoveryForm = document.getElementById('recoveryForm');
    const errorModal = document.getElementById('errorModal');
    const closeModal = document.getElementById('closeModal');
    
    recoveryForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        errorModal.style.display = 'flex';
    });
    
    closeModal.addEventListener('click', function() {
        errorModal.style.display = 'none';
    });
    errorModal.addEventListener('click', function(e) {
        if (e.target === errorModal) {
            errorModal.style.display = 'none';
        }
    });
});