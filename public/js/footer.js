const createFooter = () => {

    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="img/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirt</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trouser</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>

                </ul>

                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">t-shirt</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trouser</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>

                </ul>
            </div>
        </div>
        <p class="footer-title"> about company</p>
        <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet at dolorum vel voluptas nobis
            aperiam possimus, enim consequatur quas nostrum facere voluptate quis ipsam perferendis tenetur omnis
            laudantium officiis architecto laboriosam optio necessitatibus. Vero est iusto facilis adipisci rem
            eveniet amet, delectus magni nemo eius. Quis, adipisci fugit aut facere nisi repellat blanditiis
            quisquam quo asperiores rem sit autem amet quaerat aliquid eaque maxime? Unde neque dolor doloremque!
            Cupiditate officiis ipsum a eius distinctio exercitationem nam iure, vitae itaque facilis dolores odio
            nisi vel. Dolorem, quisquam. Tempora minus reiciendis odio omnis dolore natus et vel possimus
            doloremque. Veritatis, nam impedit!</p>
        <p class="info">support emails-help@clothing.com, cusromersupport@clothing.com</p>
        <p class="info">telephone- 180 00 00 01</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & conditions</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();