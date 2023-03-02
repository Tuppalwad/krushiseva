import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import IMG1 from "../Assets/Images/gandul_khat.jpeg";
import IMG2 from "../Assets/Images/bed_img2.jpg";
import IMG3 from "../Assets/Images/company.jpg";
import Gandul_pani from "../Assets/Images/gandul_pani.jpeg";
import Gandul from "../Assets/Images/gandul.jpeg";
import Myvideo from "../Assets/Images/Vid1.mp4";
import Footer from "./Footer";
import "../Style/about.css";
import Imgs1 from "../Assets/Images/cardImg-1.jpg";
import IMG11 from "../Assets/Images/product.webp";
import IMG22 from "../Assets/Images/bed_img2.jpg";
import "../Style/style.css";
import "../Style/contact.css";

import IMG33 from "../Assets/Images/bed_img1.jpg";

function Home() {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 400) : text}
        <span onClick={toggleReadMore} className="read-or-hide ">
          {isReadMore ? (
            <button
              className="btn btn-success btn-sm"
              style={{ marginLeft: "20px", marginTop: "7px" }}
            >
              Read More
            </button>
          ) : (
            <button
              className="btn btn-success btn-sm"
              style={{ marginLeft: "20px", marginTop: "10px" }}
            >
              Show Less
            </button>
          )}
        </span>
      </p>
    );
  };

  const [navbar, setNavbar] = useState(false);
  const [navmenu, setnavmenu] = useState("whistes");
  const [navbg, setnavbg] = useState("bg-dark");
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
      setnavmenu("blacks");
      setnavbg("bg-light");
    } else {
      setNavbar(false);
      setnavmenu("whistes");
      setnavbg("bg-dark");
    }
  };
  window.addEventListener("scroll", changeBackground);

  const Home = useRef(null);
  const About = useRef(null);
  const Contact = useRef(null);

  const GotoHome = () => {
    window.scrollTo({
      top: Home.current.offsetTop,
      behavior: "smooth",
    });
  };
  const GotoAbout = () => {
    window.scrollTo({
      top: About.current.offsetTop,
      behavior: "smooth",
    });
  };
  const GotoContact = () => {
    window.scrollTo({
      top: Contact.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <nav
        className={
          navbar
            ? "navbar navbar-expand-lg  bg-light fixed-top "
            : "navbar navbar-expand-lg  fixed-top margintop"
        }
      >
        <div className="container">
          <Link className="navbar-brand" id={navmenu} onClick={GotoHome} to="/">
            Navbar
          </Link>
          <div className="phone_number_in_phone_mode" id={navmenu}>
            <i className="fa fa-phone" id={navmenu}>
              {" "}
              +91
              <span style={{ fontSize: "20px", marginLeft: "6px" }}>
                55555555
              </span>
            </i>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <i className="fa-solid fa-bars" id={navmenu}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" id={navbg}>
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={GotoHome}
                  id={navmenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  id={navmenu}
                  onClick={GotoAbout}
                  to="/"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  id={navmenu}
                  onClick={GotoContact}
                  to="/"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " id={navmenu} to="/">
                  Service
                </Link>
              </li>
            </ul>
            <div className="phone_number_in_Desktop" id={navmenu}>
              <i className="fa fa-phone" id={navmenu}>
                {" "}
                +91
                <span style={{ fontSize: "20px", marginLeft: "6px" }}>
                  55555555
                </span>
              </i>
            </div>
          </div>
        </div>
      </nav>
      {/* the image slider for home page is here */}

      <div
        className=" carousel slide"
        data-ride="carousel"
        id="carouselExampleIndicators"
        ref={Home}
      >
        <ol className="carousel-indicators">
          <li
            className="active"
            data-slide-to="0"
            data-target="#carouselExampleIndicators"
          ></li>
          <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
          <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
        </ol>
        <div
          id="carouselExampleDark"
          className="carousel carousel-light slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div
              className="carousel-item active  home_page"
              data-bs-interval="4000"
            >
              <img src={IMG1} className="d-block  home_page w-100 " alt="..." />
              <div className="carousel-caption  d-md-block">
                {/* <h1 className="home_title">#WeLoveSnack</h1> */}
              </div>
            </div>
            <div className="carousel-item home_page" data-bs-interval="3000">
              <img
                src={IMG2}
                className="d-block  home_page w-100  "
                alt="..."
              />
              <div className="carousel-caption  d-md-block">
                {/* <h1 className="home_title demo">#MeakingFoodHelthy</h1> */}
              </div>
            </div>
            <div className="carousel-item home_page" data-bs-interval="3000">
              <img src={IMG3} className="d-block home_page w-100 " alt="..." />
              <div className="carousel-caption  ">
                {/* <h1 className="home_title">#FormToFork</h1> */}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>

      {/* the image slider for home page is here */}

      {/* the heading text section is here */}

      <h3
        style={{
          textAlign: "center",
          paddingTop: "3rem",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "#1d7b2c",
          height: "200px",
          width: "100%",
        }}
      >
        <div className="content" style={{ padding: "0rem" }}>
          <h1 style={{ fontWeight: "700" }}>कृषीसेवा गांडूळ खत निर्मिती</h1> |
          शेतकऱ्यांसाठी घेवून येत आहे. कमी खर्चात घरच्या घरी गांडूळखत निर्मिती
          प्रकल्प{" "}
        </div>
      </h3>

      {/* the heading text section is here */}

      {/* the about section is here */}
      <section>
        <h1
          className="card-title "
          style={{
            fontWeight: "bold",
            textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
            color: "#514f4f",
            textAlign: "center",
            paddingTop: "29px",
          }}
        >
          गांडूळ खताचे प्लास्टिक बेड
        </h1>

        {/* slider for product is here  */}

        <div className="container-fluid py-2">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner s-hight">
              <div class="carousel-item product_slider_img  active">
                <img src={IMG11} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item  product_slider_img">
                <img src={IMG22} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item  product_slider_img">
                <img src={IMG33} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div>
          <div className="container-fluid prodcutDetails">
            <div className="row">
              <div className="col-lg-12">
                <div className="card-body text-center">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    <br />
                    <b style={{ fontWeight: "800" }}>HDPE Vermi Bed-</b>
                    <ReadMore>
                      ची लांबी 12 फुट रुंदी 4 फुट व उंची 2 फुट (12x42) अशी असते.
                      त्याच्या/बेडच्या बाजूला नेहमी हवा खेळती राहण्याकरिता व
                      ओलावा टिकून राहण्या करिता NET WINDOW ची व्यवस्था केली आहे.
                      त्याच्या सर्व बाजू उंच व गुळगुळीत असल्यामुळे त्यावर साप,
                      उंदीर, मुंगी येऊ शकत नाही. परिणामी गांडूळांना कळल्याही
                      धोका संभवत नाही. असा हा HDPE Vermi Bed आपण अत्यंत कमी
                      जागेत कमी वेळात सहज उभारू शकतो. तसेच तो Mooveable
                      असल्यामुळे दुसऱ्या ठिकाणीने आण करता येते. HOPE Vermi Bed
                      मध्ये सुरुवातीला 75 से 90 दिवसात 1 ते 1.5 मे टन गांडूळ खत,
                      25 से 30 ली. व्हर्मी वॉश 8 ते 10 कि. गांडूळ कल्चर आपणास
                      मिळते. नंतर प्रत्येक 60 दिवसांत 1 मे. टन गांडूळ खत मिळवता
                      येतोय. असे वर्षाकाठी पाच ते सहावेळा म्हणजेच 6 मे. टन
                      गांडूळ खत एका बेड पासून मिळतो.
                    </ReadMore>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* the details about product section is here */}

      <section>
        <div>
          <div className="container-fluid prodcutDetails">
            <div className="row">
              <div className="col-lg-4">
                <h1
                  className="card-title "
                  style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f",
                    textAlign: "center",
                  }}
                >
                  गांडूळ{" "}
                </h1>
                <img
                  style={{ height: "350px", width: "100%" }}
                  src={Gandul}
                  className="d-block p-4 pimage"
                  alt=""
                  id="productimg"
                />

                <div className="card-body text-center">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    <br />
                    <b style={{ fontWeight: "800" }}>गांडूळ </b>

                    <ReadMore>
                      गांडूळ खालच्या थरातील माती वर आणतात व तिला उत्तम प्रतीची
                      बनवितात. गांडूळ खतामध्ये ह्युमसचे प्रमाण भरपूर असल्याने
                      नत्र, स्फुरद पालाश व इतर सूक्ष्मद्रव्ये झाडांना भरपूर व
                      लगेच उपलब्ध होतात. जमिनीतील उपयुक्त जिवाणूंच्या संख्येत
                      भरपूर वाढ होते
                    </ReadMore>
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <h1
                  className="card-title "
                  style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f",
                    textAlign: "center",
                  }}
                >
                  गांडूळ खत
                </h1>
                <img
                  style={{ height: "350px", width: "100%" }}
                  src={IMG1}
                  className="d-block p-4 pimage"
                  alt=""
                  id="productimg"
                />

                <div className="card-body text-center">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    <br />
                    <b style={{ fontWeight: "800" }}> गांडूळ खत </b>

                    <ReadMore>
                      गांडूळ खताविषयी थोडक्यात गांडूळ खतामुळे अन्य सेंद्रिय
                      खतापेक्षा पिकांसाठी लागणारे अन्न घटक उदा. नत्र, स्फुरद,
                      पालाश, गंधक, मॅग्नेशि- यम, मॅग्नीज, झिंक, बोरॉन, लोह,
                      जस्त, तांबे इत्यादींचे प्रमाण सर्वाधिक उपलब्ध होते. हे
                      प्रयोगाअंती सिध्द झाले आहे. त्याच प्रमाणे सर्वात महत्वाचे
                      जमिनीतील सेंद्रिय कर्बाचे प्रमाण अन्य सेंद्रिय खतांपेक्षा
                      गांडूळ खतातून मोठ्या प्रमाणात वाढण्यास मदत होते. अशा या
                      अनन्य साधारण महत्यामुळेच गांडूळ खताचा प्रचार व प्रसार तसेच
                      गांडूळ खत निर्मितीसाठी शासन विविध प्रशिक्षण व शिबिरे,
                      अनुदान व सवलती असे कार्यक्रम राबवत आहेत. अशा प्रकारचा
                      सर्वोत्कृष्ट असणारा गांडूळ खत आपण आपल्या शेतात, बागेत.
                      अंगणात, फार्म हाऊस इत्यादी ठिकाणी अत्यंत कमी जागेत, कमी
                      वेळात, कमी मेहनतीत व कमी खर्चात तयार करु शकतो. त्याकरिता
                      कृषीसेवा व्हर्मीकंपोस्ट प्रोजेक्ट या कंपनीने रेडीमेट HDPE
                      Vermicompost Production Unit गांडूळ खत निर्मिती प्रकल्प
                      आपल्या सेवेत आणला आहे.
                    </ReadMore>
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <h1
                  className="card-title "
                  style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f",
                    textAlign: "center",
                  }}
                >
                  गांडूळ पाणी
                </h1>
                <img
                  style={{ height: "350px", width: "100%" }}
                  src={Gandul_pani}
                  className="d-block p-4 pimage"
                  alt=""
                  id="productimg"
                />

                <div className="card-body text-center">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    <b style={{ fontWeight: "800" }}>व्हर्मीवॉश -</b>

                    <ReadMore>
                      म्हणजे गांडूळ पाणी होय. गांडूळ त्याच्या विशिष्ट ग्रंथीमधून
                      चिकट पदार्थाचा स्त्राव बाहेर सोडतो हा स्त्राय म्हणजेच
                      व्हर्मीवॉश होय. HOPE Vermi Bed च्या एका बाजूला असलेल्या
                      पाईपमधून हे द्रावण मिळविता येते. ते एक चांगले बुरशीनाशक
                      म्हणून ओळखले जाते. व्हर्मीवाश चे द्रावण पिकांवर फवारले
                      असता पिकांना चांगला जोम येऊन वाढ व उत्पन्न चांगल्या
                      प्रतीचे मिळते. तसेच पिकांवरील बुरशीचा रोग नियंत्रणात येतो.
                    </ReadMore>
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <h1
                  className="card-title"
                  style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f",
                    textAlign: "center",
                  }}
                >
                  जीवामृत
                </h1>
                <video
                  src={Myvideo}
                  style={{ height: "350px", width: "100%" }}
                  controls
                  autoplay
                ></video>
                <div className="card-body text-center">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    <br />
                    <b style={{ fontWeight: "800" }}>जीवामृत चे फायदे -</b>
                    <ReadMore>
                      ➡️ हे पीकपोषक/पीकवर्धक म्हणून काम करते. ➡️ यामध्ये
                      संप्रेरक, एन्झाइम्स, जीवनसत्त्वे, प्रथिने, विविध सूक्ष्म
                      अन्नद्रव्ये यांचा समावेश असल्याने पिकाला पोषक घटक उपलब्ध
                      होतात. ➡️ यामुळे पिकाच्या मुळांची वाढ जोमदार होते. ➡️
                      जमिनीतील सेंद्रिय कर्ब वाढून सूक्ष्म जिवाणूंची वाढ होते.
                      ➡️ जमीन सुपीक बनते. जैविक शेती, जैविक शेती म्हणजे काय
                      जिवाणूवर आधारित शेती, सजीव शेती, प्राकृतिक शेती, शेणखत
                      गोमुत्र वर आधारित शेती, नॅचरल फार्मिंग, ऑरगेनिक फार्मिंग,
                      विषमुक्त शेती, आधुनिक शेती व पर्यावरण संतुलित शेती. हे
                      सगळे शब्द एकमेकाला अनुसरून आहे पण हीच शेती रासायनिक व कीटक
                      नाशकाच्या अती वापरामुळे मातीतील पोषक तत्वे व जिवाणू
                      संपुष्टात येवुन जमीन बंजर होवून मातीतील ऊर्वरा शक्ती कमी
                      झाल्याने दरवर्षी उत्पन्नात घट होतांना आपल्याला बघायला मिळत
                      आहे. काही लोकांच्या मते DAP Yuna व किटक नाशकामुळेच पिकाची
                      वृद्धी होते. असे झाले असते तर आता पर्यंत सर्व जंगले साफ
                      झाली असती, कारण जंगलात तर कोणी DAP Yunia टाकायला जात
                      नाही.. याचे कारत मातीत सगळे पोषक तत्वे, जिवाणू आधीपासूनच
                      उपलब्ध आहे पण आपण रासायनिक व किटक नाशकाचा अती वापर करून
                      मातीतील पोषक तत्वे असणारे सगळे जिवाणू संपुष्टात आणले हा
                      सगळा प्रकार वेळीच न थांबल्यास आपल्या व येणाऱ्या पिढीचे
                      भवितव्य आपण स्वत च खाईत ढकलत आहोत. शेती ही आपल्या व
                      येणाऱ्या पिढी करिता उदर निर्वाहाचे साधन आहे. त्यामुळे
                      मातीतील उर्वरा शक्ती वाढवून उत्पन्नात वृद्धी आणण्याकरिता
                      जिवामृत सारख्या जैविक शेतीचा पर्याय निवडणे गरजेचे आहे.
                      जैविक, सेंद्रिय खत व औषधी चा वापर करुन जमिनीत जिवाणूची
                      संख्या वाढवून बंजर झालेली माती पुन्हा पुनर्जीवित करून
                      उत्पन्नात वृद्धी आनुण आपल्या व येणाऱ्या पिढीचे भवितव्य आपण
                      उज्वल करु शकतो. 4000Ltr.Capacity व्हर्मिवॉशचे फायदे -
                    </ReadMore>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Area --> */}

      {/* now hear about section is started here  */}

      <section className="abouthome " ref={About} style={{}}>
        <div className="container-fluid my-5 ">
          <h1
            className="card-title mb-3"
            style={{
              fontWeight: "bold",
              textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
              color: "#514f4f",
              textAlign: "center",
            }}
          >
            About Us
          </h1>
          <div className="row">
            <div className="col-lg-6">
              <img
                style={{ height: "350px", width: "100%" }}
                src={Imgs1}
                className="d-block p-4 pimage"
                alt=""
                id="productimg"
              />
            </div>
            <div className="col-lg-6  ">
              <h2
                className="py-3 my-5"
                style={{
                  fontWeight: "bold",
                  textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                  color: "#514f4f",
                  textAlign: "center",
                }}
              >
                कृषीसेवा गांडूळ खत निर्मिती
              </h2>

              <p className="card-text" style={{ textAlign: "justify" }}>
                <ReadMore>
                  कृषीसेवा गांडूळ खत निर्मिती | शेतकऱ्यांसाठी घेवून येत आहे. कमी
                  खर्चात घरच्या घरी गांडूळखत निर्मिती प्रकल्प आजच्या आधुनिक
                  युगात शेती क्षेत्रात उच्च तंत्रज्ञान, आधुनिक यंत्र सामग्री,
                  रसायनाचा प्रभाव जास्त प्रमाणात दिसून येत आहे. याचा परिणाम
                  म्हणुन शेतीचे उत्पादन आणि उत्पन्न वाढले पण आधुनिकतेमुळे शेती
                  आणि शेतकरी परावलंबी झाला. तसेच वाढत्या रसायनिक शेतीतून मिळणारे
                  उत्पादन विषयुक्त झाले. आणि दुष्परिणाम थेट माणवी शरिरावर होऊन
                  माणव विविध रोगांना बळी पडत चालला आहे. शेतीच्या
                  रासायनिकीकरणामुळे शेती निर्जीव झाली आणि शेतीची उत्पादन क्षमता
                  कमी झाली परिणामी शेतीवर होणारा खर्च वाढला व शेतकरी कर्जबाजारी
                  झाला. म्हणूनच आज आपणास शेती जिवंत ठेवण्या करितां सेंद्रिय
                  पध्दतीने शेती करणे गरजेचे आहे नव्हे नव्हे बंधन कारकच आहे.
                  उपलब्ध नैसर्गिक साधन संपत्तीचा वापर करून आपण उत्तम शेती करु
                  शकतो. सेंद्रीय शेती करतांना गांडूळ खताला अनन्य साधारण महत्व
                  आहे. त्यामुळेलच आपणास गांडूळ खत F स्वतः तयार करून शेती करिता
                  वापरणे आवश्य आहे.
                </ReadMore>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* now hear about section is ended here  */}

      {/* <!-- Start contact us page --> */}
      <section>
        <div className="container-fluid mapbox">
          <h1
            className="card-title"
            style={{
              fontWeight: "bold",
              textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
              color: "#514f4f",
              textAlign: "center",
            }}
            ref={Contact}
          >
            Contact Us
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.0119878563096!2d77.1385342!3d19.325286099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd033150d9ba08d%3A0x14e76e42cb5c8a4c!2sR%20J%20Plastic%20Tadpatri%20Karkhana%20Basmat!5e0!3m2!1sen!2sin!4v1677482413372!5m2!1sen!2sin"
            className="h-100 w-100 maptop"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="container my-3 ">
          <div className="row mx-auto">
            <div className="col-lg-6">
              <div className="container my-4 text-center">
                <h1
                  className=" my-3"
                  style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f",
                    textAlign: "center",
                  }}
                >
                  अधिक माहितीसाठी संपर्क
                </h1>
              </div>
              <form
                action="https://formspree.io/f/myyaejqk"
                className="p-3"
                method="post"
              >
                <div className="form-group my-2">
                  <div className="row">
                    <div className="col-lg-6 ">
                      <input
                        type="text"
                        className="form-control my-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="पहिले नाव"
                        name="FirstName"
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control my-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="आडनाव"
                        name="LastName"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group my-2">
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control my-2"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="विषय"
                          name="subject"
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="tel"
                          className="form-control my-2"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="मोबाईल नंबर"
                          name="number"
                          required
                          maxLength={10}
                        />
                      </div>
                    </div>

                    <div className="form-group my-2">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="संदेश"
                        name="message"
                        required
                      ></textarea>

                      <div className="form-group form-check text-center">
                        <button
                          type="submit"
                          className="btn btn-success my-3 mx-auto"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-6 my-4">
              <div style={{ textAlign: "center" }}>
                <h1
                  className="card-title my-4"
                  style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f",
                    textAlign: "center",
                  }}
                >
                  उपलब्ध वेळ
                </h1>
                <p>सोमवार ते रविवार : सकाळी ८ ते रात्री ८ पर्यंत</p>
                <h3
                  style={{
                    fontWeight: "bold",
                    textShadow: "rgba(52, 56, 62, 0.6) 2px 4px 4px",
                    color: "#514f4f",
                    textAlign: "center",
                  }}
                >
                  गरजेसाठी यावर संपर्क करा
                </h3>
                <p>GmailId : krushisewa307@gmail.com</p>
                <p>मोबाईल नंबर : 8208435851,7020170419</p>
                <p>
                  सर्वे नं. १७१/३/ अ प्लॉट क्र. ५० प्रसाद मंगल कार्यालया जवळ,
                  वसमत- परभणी रोड, जयनगर वसमत, ता. वसमत, जि. हिंगोली -431512
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End contact us page --> */}

      {/* <!-- Start Footer Area --> */}
      <Footer></Footer>
    </div>
  );
}

export default Home;
