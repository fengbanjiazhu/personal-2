import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function ProjectCarousel({ images }) {
  if (!images) return null;

  return (
    <Carousel>
      {images.map((img, index) => {
        return (
          <Carousel.Item key={index}>
            <Image src={img} fluid />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default ProjectCarousel;
