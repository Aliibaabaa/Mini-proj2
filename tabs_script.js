let tabs = document.querySelectorAll('.tabs_toggle'),
    contents = document.querySelectorAll('.tabs_content');

    tabs.forEach((tab, index) =>{
        tab.addEventListener('click', ()=> {
            contents.forEach((content) => {
                content.classList.remove('is-active');
            });
            tabs.forEach((tab) => {
                tab.classList.remove('is-active');
            });


            contents[index].classList.add('is-active');
            tabs[index].classList.add('is-active');
        })
    })

     // Get the modal
 var modalparent = document.getElementsByClassName("modal_multi");

 // Get the button that opens the modal
 var modal_btn_multi = document.getElementsByClassName("change-btn");

 // Get the <span> element that closes the modal
 var span_close_multi = document.getElementsByClassName("closes");

 // When the user clicks the button, open the modal
 function setDataIndex() {

     for (i = 0; i < modal_btn_multi.length; i++)
     {
         modal_btn_multi[i].setAttribute('data-index', i);
         modalparent[i].setAttribute('data-index', i);
         span_close_multi[i].setAttribute('data-index', i);
     }
 }



 for (i = 0; i < modal_btn_multi.length; i++)
 {
     modal_btn_multi[i].onclick = function() {
         var ElementIndex = this.getAttribute('data-index');
         modalparent[ElementIndex].style.display = "block";
     };

     // When the user clicks on <span> (x), close the modal
     span_close_multi[i].onclick = function() {
         var ElementIndex = this.getAttribute('data-index');
         modalparent[ElementIndex].style.display = "none";
     };

 }

 window.onload = function() {

     setDataIndex();
 };

 window.onclick = function(event) {
     if (event.target === modalparent[event.target.getAttribute('data-index')]) {
         modalparent[event.target.getAttribute('data-index')].style.display = "none";
     }
   }



/**to display list of games */
const easyMwrapper = document.getElementById('EasyMwrapper')

easyLevel.onclick = function easyLevel() {
        easyMwrapper.style.visibility = "visible";

        const easyLevel = document.getElementById('easyLevel');

        easyLevel.style.backgroundColor = "#ebd13c";
        easyLevel.style.fontWeight = "bold";
        easyLevel.style.textTransform = " uppercase";
        easyLevel.style.color = "white";
        easyLevel.style.borderStyle = "dotted";
        easyLevel.style.borderWidth = "1px";
        easyLevel.style.borderColor = "#f2e38f";
    }


// function easyLevel(evt, levelName) {
//     var i, wrapContent, navlinks;
    
//     wrapContent = document.getElementsByClassName("EasyMwrapper");
//     for (i = 0; i < wrapContent.length; i++) {
//         wrapContent[i].style.visibility="hidden";
//     }

//     var navlinks = document.getElementsByClassName("nav-link")
//     for (i = 0; i < navlinks.length; i++) {
//         navlinks[i].className = navlinks[i].className.replace(" active", "");
//     }
//     document.getElementById(levelName ).style.visibility = "visible";
//     evt.currentTarget.className += " active";
//   }

