//Dark-mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}
//Searchbar active
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
        
        // Perform search logic
        if (searchInput !== '') {
            // Check for specific keywords and navigate accordingly
            switch (searchInput) {
                case 'home':
                    scrollToSection('home');
                    break;
                case 'book':
                    scrollToSection('book');
                    break;
                case 'packages':
                    scrollToSection('packages');
                    break;
                case 'services':
                    scrollToSection('services');
                    break;
                case 'gallery':
                    scrollToSection('gallery');
                    break;
                case 'about':
                    scrollToSection('about');
                    break;
                default:
                    alert('Section not found!');
            }
        } else {
            alert('Please enter a search query.');
        }
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            // Smooth scroll to the section
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
