import React from 'react';
import image1 from '../images/image1.jpg'; // Import the image

function About() {
  return (
    <section id="about">
      <div className="content"> {/* Use className instead of class */}
        <h2>About Us</h2>
        <p>At Yashoda Vruddhashram, we are dedicated to providing compassionate care and a nurturing environment for the elderly, ensuring their dignity and well-being.</p>
        <p>We believe in fostering a sense of community and belonging, where seniors can engage in meaningful activities and social interactions. With a focus on holistic care, we strive to enhance the quality of life for each resident, addressing their physical, emotional, and spiritual needs.</p>
        <p>Our experienced staff members are committed to creating a supportive and safe environment, where residents feel valued and respected. Through personalized care plans and regular assessments, we tailor our services to meet the unique needs of each individual.</p>
        <p>In addition to our residential care services, we also offer a range of recreational and therapeutic activities to promote physical health and mental well-being. </p>
        <p>With our warm and welcoming atmosphere, we strive to create a home away from home for our residents, where they can live with independence, dignity, and joy.</p>
      </div>
      <div className="image-container"> {/* Use className instead of class */}
      <img src={image1} alt="Description of the image" />

      </div>
    </section>
  );
}

export default About;
