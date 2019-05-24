// ! Collapsible currently assigns an eventlistener to all instances of collapsible section
// ! Instead, find a way to call one function

const collapsible = document.querySelectorAll('.collapsible');

collapsible.forEach((section) => {

    const collapsibleHeader = section.querySelector('.collapsible__header');
    const collapsibleBody = section.querySelector('.collapsible__body');
    let collapsibleState = false;

    collapsibleHeader.addEventListener('click', () => {
        (collapsibleState) ? collapsibleBody.classList.remove('active') : collapsibleBody.classList.add('active');
        collapsibleState = !collapsibleState;
    });

});

