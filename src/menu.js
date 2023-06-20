function createMenuContent() {
    const content = document.getElementById('content');
    
    content.innerHTML = 
        `<div id="menu">
            <h2>Menu</h2>
            <ul class="menu-list">
                <li>
                    <div class="item-info">
                        <h4>Tasty Salmon</h4>
                        <p class="item-desc">A really tasty salmon with a lot of freshness.</p>
                    </div>
                    <div id="item-img-1" class="item-img"></div>
                </li>
                <li>
                    <div class="item-info">
                        <h4>Crazy Lobster</h4>
                        <p class="item-desc">A crazy lobster with a lot of richness to it.</p>
                    </div>
                    <div id="item-img-2" class="item-img"></div>
                </li>
                <li>
                    <div class="item-info">
                        <h4>Prawn Bucket</h4>
                        <p class="item-desc">A bucket of prawns. What more could you want?</p>
                    </div>
                    <div id="item-img-3" class="item-img"></div>
                </li>
            </ul>
        </div>`
}

export { createMenuContent }