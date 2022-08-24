// import { FiCheck } from "react-icons/fi";
import Image from "../../Images/img1.jpg";
import "./AboutInfo.scss";

const AboutInfo = () => {
  return (
    <section className="about py-5">
      <div className="container">
        <h1 className="fw-bold mb-4 text-center">About Us</h1>
        <div className="row">
          <div className="col-10 col-md-6 mx-auto mb-4 align-self-center">
            <h4 className="about__title">Who We Are?</h4>
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
              tellus ante. Nam suscipit urna risus, fermentum commodo ipsum
              porta id. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Enim incidunt veritatis vero molestiae, ea a veniam ipsam
              qui adipisci, vitae obcaecati natus fuga praesentium iusto. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
              eum!
            </p>
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              imperdiet libero id nisi euismod, sed porta est consectetur.
              Vestibulum auctor felis eget orci semper vestibulum. Pellentesque
              ultricies nibh gravida, accumsan libero luctus, molestie nunc.
            </p>
          </div>
          <div className="col-8 col-md-4 mx-auto align-self-md-center">
            <img src={Image} alt="about us" className="about__image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
