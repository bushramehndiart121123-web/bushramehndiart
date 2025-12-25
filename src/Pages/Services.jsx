
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import { WHATSAPP_NUMBER, EMAIL, INSTAGRAM_LINK, YOUTUBE_LINK, CALLING_NUMBER, ADDRESS ,urlWhatsapp} from "../constant";

export const services = [
  {
    id: 1,
    title: "Bridal Mehendi",
    bullets: [
      "Full hand bridal design",
      "Front & back full arms",
      "Feet bridal mehendi",
      "Customised bridal themes (Dulha–Dulhan, name initials, portraits)"
    ],
    img: "https://res.cloudinary.com/dmjbqor7r/image/upload/v1766246526/5_zbiruh.jpg",
    path: "/bridal-images"
  },
  {
    id: 2,
    title: "Engagement / Roka Mehendi",
    bullets: [
      "Elegant engagement patterns",
      "Minimal & stylish designs",
      "Personalized ring ceremony designs"
    ],
    img: "https://res.cloudinary.com/dmjbqor7r/image/upload/v1766338416/4_zoheue.jpg",
    path: "/engagement-roka-images"
  },
  {
    id: 3,
    title: "Sangeet / Wedding Guest Mehendi",
    bullets: [
      "Party guest mehendi",
      "Fast & simple designs for multiple guests",
      "Per-hand / per-person packages"
    ],
    img: "https://res.cloudinary.com/dmjbqor7r/image/upload/v1766338753/4_uborqh.jpg",
    path: "/sangeet-weddingguest-images"
  },
  {
    id: 4,
    title: "Arabic Mehendi",
    bullets: [
      "Arabic floral patterns",
      "Shaded designs",
      "Bold outline patterns"
    ],
    img: "https://res.cloudinary.com/draysylxa/image/upload/v1766246812/2_zrbl8d.jpg",
    path: "/arabic-images"
  },
  {
    id: 5,
    title: "Indian Traditional Mehendi",
    bullets: [
      "Peacock, mandala, dhol–shehnai patterns",
      "Rajasthani designs",
      "Detailed cultural patterns"
    ],
    img: "https://res.cloudinary.com/draysylxa/image/upload/v1766247740/6_sutyaa.jpg",
    path: "/indian-traditional-images"
  },
  {
    id: 6,
    title: "Indo–Arabic / Fusion Mehendi",
    bullets: [
      "Mix of Indian + Arabic",
      "Modern & trendy patterns"
    ],
    img: "https://res.cloudinary.com/draysylxa/image/upload/v1766247776/5_m7jzjg.jpg",
    path: "/indo-arabic-fusion-images"
  },
  {
    id: 7,
    title: "Portrait Mehendi",
    bullets: [
      "Bride/Groom portrait",
      "Customized faces or themes",
      "(High-skill premium service)"
    ],
    img: "https://res.cloudinary.com/draysylxa/image/upload/v1766247810/6_w305jz.jpg",
    path: "/portrait-images"
  },
  {
    id: 8,
    title: "Baby Shower / Godh Bharai Mehendi",
    bullets: [
      "Baby shower themed designs",
      "Minimal & cute patterns"
    ],
    img: "https://res.cloudinary.com/draysylxa/image/upload/v1766246864/5_ma2dyc.jpg",
    path: "/babyshower-godhbharai-images"
  },
  {
    id: 9,
    title: "Festival Mehendi",
    bullets: [
      "Karwa Chauth, Teej, Diwali, Eid, Navratri",
      "Festival-special packages"
    ],
    img: "https://res.cloudinary.com/ddnzc0ekd/image/upload/v1766415639/5_gtzjl1.jpg",
    path: "/festival-images"
  },
  {
    id: 10,
    title: "Customized Mehendi",
    bullets: [
      "Names, Initials, Dates",
      "Symbols, Couple story designs"
    ],
    img: "https://res.cloudinary.com/ddnzc0ekd/image/upload/v1766415628/6_jwp2bf.jpg",
    path: "/customized-images"
  },
  {
    id: 11,
    title: "Mehendi for Kids",
    bullets: [
      "Simple and cute patterns",
      "Fast application"
    ],
    img: "https://res.cloudinary.com/ddnzc0ekd/image/upload/v1766415659/6_svdqcc.jpg",
    path: "/mehendi-for-kids-images"
  },
  {
    id: 12,
    title: "Mehendi Classes & Workshops",
    bullets: [
      "Basic mehendi course",
      "Advance bridal mehendi course"
    ],
    img: "https://res.cloudinary.com/ddnzc0ekd/image/upload/v1766415784/6_zkbuo0.jpg",
    path: "/mehendi-classes-workshops-images"
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.45 } }),
  hover: { scale: 1.02, boxShadow: "0 12px 30px rgba(0,0,0,0.5)" },
};

export default function Services() {
    const navigate = useNavigate();
  return (
    <div className="services-root">
      <Container>
        <motion.h2
          className="services-title"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services — Luxury Mehendi Experiences
        </motion.h2>

        <p className="services-sub">
          we offer professional mehendi services anywhere across India — <strong>Pan India Services & Home Visits available.</strong>.
        </p>

        <div className="services-list">
          {services.map((s, idx) => (
            <motion.div
              className={`service-item ${idx % 2 === 0 ? "layout-normal" : "layout-reverse"}`}
              key={s.id}
              custom={idx}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              variants={cardVariants}
              whileHover="hover"
            >
              <Row className="align-items-center gx-4">
                <Col md={5} className="img-col">
                  <div className="service-img-wrap">
                    <img src={s.img} alt={s.title} loading="lazy" className="service-img" />
                  </div>
                </Col>

                <Col md={7} className="content-col">
                  <div className="service-content">
                    <h3 className="service-title">{s.title}</h3>
                    <ul className="service-bullets">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="service-bullet">
                          <span className="bullet-dot">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="service-cta">
<Button
  variant="gold"
  className="me-3"
  onClick={() => {
    const phoneNumber = WHATSAPP_NUMBER; 
    const message = `Hi, I am interested in your ${s.title} service. Please contact me.`;
    const urlWhatsapp = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  

    // Open WhatsApp
    window.open(urlWhatsapp, "_blank");

    
   
  }}
>
  Book Now
</Button>


                      <Button variant="outline-light" onClick={() => navigate(s.path)}>
                        View Photos
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </motion.div>
          ))}
        </div>

        <div className="services-note">
          <strong>Note:</strong> we have hygienic, professional & experienced artists, who can visit your house or travel anywhere in India- We reach you wherever the celebration is..
        </div>
      </Container>
    </div>
  );
}






























