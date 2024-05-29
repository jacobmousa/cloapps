export default function TopHeader(){
    return(
        <div className="navbar text-light bg-dark d-none d-lg-block">
            <div className="container" id="cloapps_nav_top">
                <div>
                    <i className="fa fa-envelope mx-2"></i>
                    <a href="mailto:info@cloapps.com" className="text-light fs-sm-1 navbar-brand">info@cloapps.com</a>
                    <i className="fa fa-phone mx-2"></i>
                    <a href="tel:972-52-5759236" className="text-light fs-sm-1 navbar-brand">972-52-5759236</a>
                </div>
                <div>
                    <div>
                        <a className="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored">
                            <i className="fab fa-facebook-f fa-sm fa-fw me-2"></i>
                        </a>
                        <a className="text-light" href="https://www.instagram.com/" target="_blank">
                            <i className="fab fa-instagram fa-sm fa-fw me-2"></i>
                        </a>
                        <a className="text-light" href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                        <a className="text-light" href="https://www.linkedin.com/" target="_blank">
                            <i className="fab fa-linkedin fa-sm fa-fw"></i></a>
                    </div>
                </div>
            </div>
    </div>
    );
}