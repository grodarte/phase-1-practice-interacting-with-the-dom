// See the timer increment every second once the page has loaded.
const counter = document.getElementById("counter")
let countInterval

function autoCounter(){
    counter.innerText ++
}

function startTimer() {
    countInterval = setInterval(autoCounter, 1000)
}

document.addEventListener("DOMContentLoaded", startTimer)

// Manually increment and decrement the counter using the plus and minus buttons.
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")

function countUp(){
    counter.innerText ++
}

function countDown(){
    counter.innerText --
}

plus.addEventListener("click", countUp)
minus.addEventListener("click", countDown)

// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
const heart = document.getElementById("heart")
const likes = document.querySelector(".likes")
const likesDisplayed = {}

function likeNumber(likedNum){
    if (likesDisplayed[likedNum]){
        likesDisplayed[likedNum] ++
        updateLikesDisplay(likedNum)
    } else {
        likesDisplayed[likedNum] = 1
        createLikesDisplay(likedNum)
    }
}

function createLikesDisplay(likedNum){
    const li = document.createElement("li")
    li.id = `${likedNum}`
    li.innerText = `${likedNum} has been liked ${likesDisplayed[likedNum]} time`
    likes.appendChild(li)
}

function updateLikesDisplay(likedNum){
    const updateNum = document.getElementById(`${likedNum}`)
    updateNum.innerText = `${likedNum} has been liked ${likesDisplayed[likedNum]} times`
}


heart.addEventListener("click", () => likeNumber(counter.innerText))


// Pause the counter, which should: 1) pause 2) disable all buttons 3) switch button label from pause to resume
//Click the "resume" button to restart the counter and re-enable the buttons.

const pause = document.getElementById("pause")
const otherButtons = document.querySelectorAll("button:not(#pause)")

function disableButtons(){
    otherButtons.forEach(button => button.disabled = true)
}
function enableButtons(){
    otherButtons.forEach(button => button.disabled = false)
}

function stopTimer(){
    clearInterval(countInterval)
}
function resumeTimer(){
    startTimer()
}

function pauseActions(){
    if(pause.innerText === "pause"){
        pause.innerText = "resume"
        stopTimer()
        disableButtons()

    } else if (pause.innerText === "resume"){
        pause.innerText = "pause"
        resumeTimer()
        enableButtons()

    }
}

pause.addEventListener("click", pauseActions)

// Leave comments on my gameplay, such as: "Wow, what a fun game this is."
const form = document.getElementById("comment-form")

function logComments(comment){
    const p = document.createElement("p")
    p.innerText = comment
    document.getElementById("list").appendChild(p)
}

form.addEventListener("submit", e => {
    e.preventDefault()
    logComments(e.target["comment-input"].value)
    form.reset()
})