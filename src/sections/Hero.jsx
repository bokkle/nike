import { arrowRight } from "../assets/icons";
import Button from '../components/Button';

const Hero = () => {
  return (
    <section
      id="home"
      className="max-container flex min-h-screen w-full flex-col 
  justify-center gap-10 xl:flex-row"
    >
      <div
        className="max-xl:padding-x relative flex w-full flex-col items-start justify-center
      pt-28 xl:w-2/5"
      >
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span> Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality, comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
      </div>
    </section>
  );
};

export default Hero;
