import { Col, Container, Row } from "react-bootstrap";
import Image from 'next/image'

export default function AboutusDetail() {
    return(
        <section className="py-5 aboutus">
          <Container>
              <Row>
                <Col className="col-md-8 text-white">
                    <h1>About Us</h1>
                    <p>
                    Welcome to CLoApps, where innovation meets excellence in the realm of e-commerce and web platforms. Our company is dedicated to transforming the digital landscape with cutting-edge solutions that run seamlessly on the cloud.
                    </p>
                    <p>
                    With a strong focus on e-commerce, we create robust, scalable, and user-friendly platforms that empower businesses to thrive in the online marketplace. Our expertise extends to developing comprehensive web platforms that are not only functional but also optimized for performance and security.
                    </p>
                    <p>
                    Harnessing the power of cloud computing, we ensure that our solutions are reliable, flexible, and accessible from anywhere in the world. Our commitment to leveraging the latest technologies means that our clients benefit from high availability, reduced downtime, and cost-effective scalability.
                    </p>
                    <p>
                    At CloApps, we believe in building long-term partnerships with our clients. Our team of skilled professionals works closely with each client to understand their unique needs and deliver tailored solutions that drive success. Whether you&aposre looking to launch a new online store, enhance your existing web presence, or migrate to the cloud, we are here to support you every step of the way.
                    </p>
                    <p>
                    Join us in revolutionizing the future of e-commerce and web platforms. Let&aposs build something extraordinary together.
                    </p>
                </Col>
                <Col className="col-md-4">
                  <Image src="/images/ecommerceweb.jpg" alt="Ecommerse site" className="rounded-circle" width={380} height={380} />
                </Col>
              </Row>
          </Container>
        </section>
    )
}