import Image from 'next/image';
export default function OurServices(){
    return(

        <section className="container py-5">
        <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
                <h1 className="h1">Our Services</h1>
                <p>Our company specializes in developing cutting-edge web applications for e-commerce, ensuring seamless shopping experiences for customers. Additionally, we excel in crafting mobile apps that complement these web platforms, providing users with convenient, on-the-go access to their favorite brands and products.
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-4 p-5 mt-3">
                <a href="#">
                  <Image src="/images/WebApplication.jpg" alt="Web Application"  className="rounded-circle img-fluid border" width={330} height={330} />
                </a>
                <h5 className="text-center mt-3 mb-3">Web Application</h5>
                {/*<p className="text-center"><a className="btn btn-success">Go Shop</a></p>*/}
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
                <a href="#">
                    <Image src="/images/MobileApplication.jpg" alt="Mobile Application"  className="rounded-circle img-fluid border" width={330} height={330} />
                </a>
                <h2 className="h5 text-center mt-3 mb-3">Mobile Application</h2>
               {/* <p className="text-center"><a className="btn btn-success">Go Shop</a></p>*/}
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
                <a href="#">
                    <Image src="/images/eCommerce.jpg" alt="E-Commerce"  className="rounded-circle img-fluid border" width={330} height={330} />
                </a>
                <h2 className="h5 text-center mt-3 mb-3">E-Commerce</h2>
                {/*<p className="text-center"><a className="btn btn-success">Go Shop</a></p>*/}
            </div>
        </div>
    </section>
    ) 
}