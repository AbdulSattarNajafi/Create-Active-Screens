/**
 * 
 * UI Related Functions
 */
function ui_related_functions() {
    
    //Main menu navigation
    //Component Navigation
    cmp_navigations();

    
/**
 * END: UI Related Functions
 */
}

/**
 * Default settings for app open screen
 */
function default_loads() {
    load_component('create_offer');
}

/**
 * Navigations Related Scripts
 */

 //--------- MAIN NAVIGATION (COMPONENT NAVIGATION)
function cmp_navigations() {
    $('#app_header .cmp_nav .nav_link').click(function(e) {
        e.stopPropagation();
        const cmp_target = $(this).attr('cmp_target');
        if(typeof cmp_target !== typeof undefined && cmp_target !== false){
            load_component(cmp_target);
        }

        $('#app_header .cmp_nav .nav_link').removeClass('active_link');
        $('#app_header .cmp_nav .nav_link').addClass('normal_link');
        $(this).addClass('active_link'); 
        $(this).removeClass('normal_link'); 
    });
}
//Toggle Navbar
function toggleNavbar() {
    const toggleBtn = document.querySelector('#toggle_btn');
    const closeBtn = document.querySelector('#close_btn');

    const createBtn = document.querySelector('#create_btn');
    const activeBtn = document.querySelector('#active_btn');
    const screensBtn = document.querySelector('#screens_btn');

    const navContainer = document.querySelector('.cmp_nav');
    const navHeader = document.querySelector('#nav_heading');
    toggleBtn.addEventListener('click', () => {
        navContainer.classList.add('show_cmp_nav');
    });
    closeBtn.addEventListener('click', () => {
        navContainer.classList.remove('show_cmp_nav');
    });
    //EveentListener for Nav Links
    createBtn.addEventListener('click', () => {
        navHeader.textContent = 'Create Offer';
        navContainer.classList.remove('show_cmp_nav');
    });

    activeBtn.addEventListener('click', () => {
        navHeader.textContent = 'Active Offer';
        navContainer.classList.remove('show_cmp_nav');
    });

    screensBtn.addEventListener('click', () => {
        navHeader.textContent = 'Screens';
        navContainer.classList.remove('show_cmp_nav');
    });
};
toggleNavbar(); 
/**
 *  On document load complete
 */
jQuery(function($){
    ui_related_functions();

    default_loads(); 
});