function createContactContent() {
    const content = document.getElementById('content');
    
    content.innerHTML = 
        `<div id="contact">
            <h2>Contact</h2>
            <div class="contact-items">
                <div class="contact-item">
                    <h4>Fish Splatter Contact Details</h4>
                    <h6>Chef's Number: 000 000 0000</h6>
                    <h6>Manager's Number: 000 000 0000</h6>
                    <h6>Company Email: fakefishsplatter@gmail.com</h6>
                </div>
                <div class="contact-item">
                    <h4>Fish Splatter Locations</h4>
                    <h6>Upside Hill - Lighthouse Bay</h6>
                    <h6>Three Hills Down - Fisherman's Bay</h6>
                    <h6>Sunny Hill Side - Fishter's Port</h6>
                </div>
            </div>
        </div>`
}

export { createContactContent }