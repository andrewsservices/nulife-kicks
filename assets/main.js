{
    //reveal-in from the top
    const revealElements = document.querySelectorAll(".reveal-in")
    if (revealElements) {
        revealElements.forEach((el) => ScrollReveal().reveal(el, { delay: 400, origin: "bottom", distance: "30px" }))
    }
}

{
    //reveal-in from the top
    const revealElements = document.querySelectorAll(".reveal-in-slow")
    if (revealElements) {
        revealElements.forEach((el) => ScrollReveal().reveal(el, { delay: 2000, origin: "bottom", distance: "30px" }))
    }
}

{
    //reveal-in from the top
    const revealElements = document.querySelectorAll(".reveal-in-top")
    if (revealElements) {
        revealElements.forEach((el) => ScrollReveal().reveal(el, { delay: 400, origin: "top", distance: "30px" }))
    }
}
{
    //reveal-in from the bottom
    const revealElements = document.querySelectorAll(".reveal-in-bottom")
    if (revealElements) {
        revealElements.forEach((el) => ScrollReveal().reveal(el, { delay: 400, origin: "bottom", distance: "30px" }))
    }
}
{
    //reveal-in from the left
    const revealElements = document.querySelectorAll(".reveal-in-left")
    if (revealElements) {
        revealElements.forEach((el) => ScrollReveal().reveal(el, { delay: 400, origin: "left", distance: "30px" }))
    }
}
{
    //reveal-in from the right
    const revealElements = document.querySelectorAll(".reveal-in-right")
    if (revealElements) {
        revealElements.forEach((el) => ScrollReveal().reveal(el, { delay: 400, origin: "right", distance: "30px" }))
    }
}

{
    //reveal-in from the top
    const revealElements = document.querySelectorAll(".reveal-in-slower")
    if (revealElements) {
        revealElements.forEach((el) => ScrollReveal().reveal(el, { delay: 2500, origin: "bottom", distance: "30px" }))
    }
}

{
    // homepage scroll animation
    const triggerElement1 = document.querySelector("#trigger-element-1")
    const dirtyShoe1 = document.querySelector("#dirty-shoe-1")
    const dirtyShoe2 = document.querySelector("#dirty-shoe-2")
    const dirtyShoeCricle = document.querySelector("#dirty-shoe-circle-1")
    const dirtyShoeBorder = document.querySelector("#dirty-shoe-circle-border-1")
    const nuAntidote = document.querySelector("#nu-antidote")
    const nuCricle = document.querySelector("#nu-antidote-circle")
    const nuBorder = document.querySelector("#nu-antidote-circle-border")
    const item1 = document.querySelector("#item-1")
    const item2 = document.querySelector("#item-2")
    const item3 = document.querySelector("#item-3")
    const cleanShoes = document.querySelector("#clean-sneakers")
    const cleanCircle = document.querySelector("#clean-circle")
    const wrapper = document.querySelector(".homepage-wrapper")
    const table = document.querySelector(".product-comparison-container")
    const video = document.querySelector(".video")
    if (triggerElement1) {
        const controller = new ScrollMagic.Controller()

        const pinFirstItem = new ScrollMagic.Scene({
            triggerElement: triggerElement1,
            duration: 1200,
        })
            .setPin(item1)
            .setTween(item1, 0.1, { y: "-200px" })

        const dropDirtyShoe = new ScrollMagic.Scene({
            triggerElement: triggerElement1,
        }).setTween(dirtyShoe1, 0.75, { top: "32px", scale: 1.1, opacity: 1 })

        const dropDirtyShoe2 = new ScrollMagic.Scene({
            triggerElement: triggerElement1,
        }).setTween(dirtyShoe2, 1.25, { top: "-60px", scale: .95, opacity: 1, transform: "rotateZ(10deg)", filter: "brightness(.75)" })

        const expandCircle = new ScrollMagic.Scene({
            triggerElement: triggerElement1,
        }).setTween(dirtyShoeCricle, 1, { width: "350px", height: "350px", opacity: 1 })

        const expandBorder = new ScrollMagic.Scene({
            triggerElement: triggerElement1,
        }).setTween(dirtyShoeBorder, 0.5, { width: "380px", height: "380px", opacity: 1 })

        const removeFirstRow = new ScrollMagic.Scene({
            triggerElement: item2,
        }).setTween(item1, 0.5, { scale: 0.8, opacity: 0 })

        const pinSecondItem = new ScrollMagic.Scene({
            triggerElement: item2,
            duration: 1200,
        })
            .setPin(item2)
            .setTween(item2, 0.1, { y: "-200px" })

        const showItem2 = new ScrollMagic.Scene({
            triggerElement: item2,
        }).setTween(item2, 0.5, { opacity: 1 })

        const expandNuCircle = new ScrollMagic.Scene({
            triggerElement: item2,
        }).setTween(nuCricle, 1, { width: "350px", height: "350px", opacity: 1 })

        const expandNuCircleBorder = new ScrollMagic.Scene({
            triggerElement: item2,
        }).setTween(nuBorder, 0.5, { width: "380px", height: "380px", opacity: 1 })

        const moveBottle = new ScrollMagic.Scene({
            triggerElement: item2,
        }).setTween(nuAntidote, 1, { left: 0, opacity: 1, scale: 1 })

        const pinThirdItem = new ScrollMagic.Scene({
            triggerElement: item3,
            duration: 800,
        }).setPin(item3)

        const showItem3 = new ScrollMagic.Scene({
            triggerElement: item3,
        }).setTween(item3, 0.5, { opacity: 1 })

        const dropCleanShoes = new ScrollMagic.Scene({
            triggerElement: item3,
        }).setTween(cleanShoes, 1, { opacity: 1, bottom: "270px" })

        const expandCleanCircle = new ScrollMagic.Scene({
            triggerElement: item3,
        }).setTween(cleanCircle, 1, { opacity: 1, width: "3000px", height: "3000px" })

        const whiteBackground = new ScrollMagic.Scene({
            triggerElement: item3,
        }).setTween(wrapper, 1, { background: "#fff" })

        // pinThirdItem.on("end", () => {
        //     table.classList.add("show")
        // })

        const blackBackground = new ScrollMagic.Scene({
            triggerElement: video,
        }).setTween(wrapper, 1, { background: "#000" })

        const fadeInTrustUs = new ScrollMagic.Scene({
            triggerElement: video,
        }).setTween(video, 1, { opacity: 1 })

        controller.addScene([fadeInTrustUs, whiteBackground, expandCleanCircle, dropCleanShoes, showItem3, dropDirtyShoe, dropDirtyShoe2, expandCircle, expandBorder, removeFirstRow, showItem2, expandNuCircle, expandNuCircleBorder, moveBottle])
    }
}

{
    var swiper = new Swiper(".mySwiper1",{
        autoplay: {
            delay: 5000,
        },
        
        disableOnInteraction: true,

        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    })
}
{
    var swiper = new Swiper(".mySwiper2",{
        slidesPerView: 1,
        breakpoints: {
            1100: {
                slidesPerView: 4,
                spaceBetween: 10,
            }
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
          },
    })
}
