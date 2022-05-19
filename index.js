function featuresDropFunction() {
    document.getElementById("featuresDropDown").classList.toggle("show-features");
}
window.onclick = function(event) {
    if (!event.target.matches('.features-icon img')) {
        let dropdowns = document.getElementsByClassName("features-dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-features')) {
                openDropdown.classList.remove('show-features');
            }
        }
    }
}

function companyDropFunction(){
    document.getElementById("companyDropDown").classList.toggle("show-company");
}
window.onclick = function (event) {
    if (!event.target.matches('.company-icon img')){
        let compdrops = document.getElementsByClassName("company-dropdown-content");
        let i;
        for(i = 0; i < compdrops.length; i++){
            let showDropdown = compdrops[i];
            if(showDropdown.classList.contains('show-company')){
                showDropdown.classList.remove('show-company');
            }
        }
    }
}

// function mobileDropFunction(){
//     document.getElementById("mobileMenuExpanded").classList.toggle("show-mobile-expanded");
// }
// window.onclick = function (event){
//     if(!event.target.matches('.mobile-menu-icon img')){
//         let mobiledrops = document.getElementsByClassName("mobile-menu-content");
//         let i;
//         for(i = 0; i < mobileDrops.length; i++){
//             let showMobileExpended = mobileDrops[i];
//             if(showMobileExpended.classList.contains('show-mobile-expanded')){
//                 showMobileExpended.classList.remove('show-mobile-expanded');
//             }
//         }
//     }
// }

/* Set the width of the side navigation to 250px */
function mobileDropFunction() {
    document.getElementById("mobileMenuExpanded");
}
window.onclick = function (event) {
    if (!event.target.matches('.mobile-menu-icon img')){
        let compdrops = document.getElementsByClassName("mobile-menu-content");
        let i;
        for(i = 0; i < compdrops.length; i++){
            let showDropdown = compdrops[i];
            if(showDropdown.classList.contains('show-mobile-expanded')){
                showDropdown.classList.remove('show-mobile-expanded');
            }
        }
    }
}


// /* Set the width of the side navigation to 0 */
// function closeMobileDrop() {
//     document.getElementById("mobileMenuExpanded").style.width = "0";
// }