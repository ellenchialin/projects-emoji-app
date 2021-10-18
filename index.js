// Render the emojis as <span> tags in the emojisContainer <div>

// Hints: Use either createElement(), textContent, and append()
// or innerHTML and a template string

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const inputEmoji = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

// render the updated myEmojis array in the browser
function renderEmojis() {
    emojiContainer.innerHTML = "" // clear the container first
    for (let i = 0; i < myEmojis.length; i++) {
        // create a span to hold emojis
        const emoji = document.createElement('span')
        
        // render on the page
        emoji.textContent = myEmojis[i]
    
        // append the span to the container
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener("click", function() {
    if (inputEmoji.value) {
        myEmojis.push(inputEmoji.value)
        inputEmoji.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (inputEmoji.value) {
        myEmojis.unshift(inputEmoji.value)
        inputEmoji.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
        myEmojis.pop()
        renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})