let test = document.querySelector('#test');

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function (event) {
    // highlight the mouseover target
    const target = event.target
    const init = target.style.background;
    console.log(init)
    target.addEventListener("mouseout", function (event) {
        event.target.style.background = "rgba(0,0,0,1)"
        console.log(init)
    })

    // // reset the color after a short delay
    // setTimeout(function () {
    //     event.target.style.background = init;
    // }, 500);
}, false);