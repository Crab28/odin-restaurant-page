function createHomeContent() {
    const content = document.getElementById('content');
    content.innerHTML = 
        `<div id="banner">
            <h1 class="desktop-hero">
                Fish Splatter!
                <br>
                Various Fresh Seafood!
            </h1>
            <div class="mobile-hero">
                <h1>fish</h1>
                <h1>fish!</h1>
            </div>
            </div>
        <div class="content-body">
            <h3>Fish Splatter is Great!</h3>
            <p>We serve all kinds of seafood, with freshness backing it up!</p>
            <p>Come give us a visit! It's something you will definitely not regret! Enjoy a wide range of seafood dishes!</p>
        </div>`;
}

export { createHomeContent }