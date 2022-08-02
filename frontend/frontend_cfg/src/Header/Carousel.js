import React from "react";
import { Carousel } from "react-responsive-carousel";

const CarouselContainer = () => {
  return (
    <div
      style={{
        backgroundColor: "#2D283E",
        width: "100vw",
        paddingBottom: "50px",
      }}
    >
      <Carousel
        autoPlay
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        style={{ width: "600px" }}
      >
        <div>
          <img
            style={{ height: "300px", width: "500px" }}
            alt=""
            src="https://animalaidfoundationtrust.org/images/dog%20bank%20colony%20after%20edit%20new.jpg"
          />

          <p
            style={{
              width: "400px",
              textAlign: "center",
              margin: "auto",
              fontSize: "30px",
              marginTop: "25px",
              color: "#86C232",
            }}
          >
            Bound to the Pledge
          </p>
          <p
            style={{
              width: "400px",
              textAlign: "center",
              margin: "auto",
              marginTop: "10px",
              color: "white",
            }}
          >
            He had a really prolonged period of treatment,took weeks to get his
            leg into place,was rescued from bank colony,Hisar...
          </p>
          <a href="https://animalaidfoundationtrust.org/succesStories%20Page/successStoriesPage.html">
            <button
              style={{
                backgroundColor: "#82C232",
                color: "white",
                padding: "10px 20px 10px 20px",
                marginTop: "10px",
                borderRadius: "5px",
                fontSize: "20px",
              }}
            >
              View Story
            </button>
          </a>
        </div>
        <div>
          <img
            style={{ height: "300px", width: "500px" }}
            alt=""
            src="https://animalaidfoundationtrust.org/images/sec16-17%20after%20edit2.jpg"
          />
          <p
            style={{
              width: "400px",
              textAlign: "center",
              margin: "auto",
              fontSize: "30px",
              marginTop: "25px",
              color: "#86C232",
            }}
          >
            Stitched to Life
          </p>
          <p
            style={{
              width: "400px",
              textAlign: "center",
              margin: "auto",
              marginTop: "10px",
              color: "white",
            }}
          >
            He was one of the worst case that we had encountered,was rescued
            from sector 16-17 ,Hisar...
          </p>
          <a href="https://animalaidfoundationtrust.org/succesStories%20Page/successStoriesPage.html">
            <button
              style={{
                backgroundColor: "#82C232",
                color: "white",
                padding: "10px 20px 10px 20px",
                marginTop: "10px",
                borderRadius: "5px",
                fontSize: "20px",
              }}
            >
              View Story
            </button>
          </a>
        </div>
        <div>
          <img
            style={{ height: "300px", width: "500px" }}
            alt=""
            src="https://animalaidfoundationtrust.org/images/puppy%20after%20new.jpg"
          />
          <p
            style={{
              width: "400px",
              textAlign: "center",
              margin: "auto",
              fontSize: "30px",
              marginTop: "25px",
              color: "#86C232",
            }}
          >
            The Sweetest Little
          </p>
          <p
            style={{
              width: "400px",
              textAlign: "center",
              margin: "auto",
              marginTop: "10px",
              color: "white",
            }}
          >
            The most supportive little puppy we had ever come across ,was
            rescued from Bank Colony, Hisar...
          </p>
          <a href="https://animalaidfoundationtrust.org/succesStories%20Page/successStoriesPage.html">
            <button
              style={{
                backgroundColor: "#82C232",
                color: "white",
                padding: "10px 20px 10px 20px",
                marginTop: "10px",
                borderRadius: "5px",
                fontSize: "20px",
              }}
            >
              View Story
            </button>
          </a>
        </div>
        <div>
          <img
            style={{ height: "300px", width: "500px" }}
            alt=""
            src="https://animalaidfoundationtrust.org/images/cow%20after%20edit%20new.jpg"
          />
          <p
            style={{
              width: "400px",
              textAlign: "center",
              margin: "auto",
              fontSize: "30px",
              marginTop: "25px",
              color: "#86C232",
            }}
          >
            Rescuing our Mother
          </p>
          <p
            style={{
              width: "400px",
              textAlign: "center",
              margin: "auto",
              marginTop: "10px",
              color: "white",
            }}
          >
            She entangled herself in fence wires was rescued from Tosham Road,
            in from of AADHAR hospital, Hisar...
          </p>
          <a href="https://animalaidfoundationtrust.org/succesStories%20Page/successStoriesPage.html">
            <button
              style={{
                backgroundColor: "#82C232",
                color: "white",
                padding: "10px 20px 10px 20px",
                marginTop: "10px",
                borderRadius: "5px",
                fontSize: "20px",
              }}
            >
              View Story
            </button>
          </a>
        </div>
      </Carousel>
    </div>
  );
};
export default CarouselContainer;