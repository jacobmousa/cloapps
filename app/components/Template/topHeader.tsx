export default function TopHeader(){
    return(
        <div className="navbar text-light bg-dark d-none d-lg-block">
            <div className="container" id="cloapps_nav_top">
                <div>
                    <i className="fa fa-envelope mx-2"></i>
                    <a href="mailto:jamesmoses7@gmail.com" className="text-light fs-sm-1 navbar-brand">info@cloapps.com</a>
                    <i className="fa fa-phone mx-2"></i>
                    <a href="tel:972-54-2879744" className="text-light fs-sm-1 navbar-brand">972-54-2879744</a>
                </div>
                <div>
                    <div>
                        <a className="text-light" href="#">
                            <i className="fab fa-facebook-f fa-sm fa-fw me-2"></i>
                        </a>
                        <a className="text-light" href="#">
                            <i className="fab fa-instagram fa-sm fa-fw me-2"></i>
                        </a>
                        <a className="text-light" href="#">
                            <i className="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                        <a className="text-light" href="#">
                            <i className="fab fa-linkedin fa-sm fa-fw"></i></a>
                    </div>
                </div>
            </div>
    </div>
    );
}