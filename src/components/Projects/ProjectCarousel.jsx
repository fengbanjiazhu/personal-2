import Carousel from "react-bootstrap/Carousel";
import { Image } from "antd";

function ProjectCarousel({ images, isApp }) {
  if (!images) return null;

  return (
    <Carousel style={{ marginTop: "1rem" }}>
      {images.map((img, index) => {
        return (
          <Carousel.Item key={index}>
            <Image src={img} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default ProjectCarousel;
