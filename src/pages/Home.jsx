import { Link } from "react-router-dom"; 
import "../styles/Home.css";
import artToyImg from "../assets/art-toy.png";
import gundamImg from "../assets/gundam.png";
import dragonImg from "../assets/dragon.png";
import bannerImg from "../assets/bannerone.png";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";

function Home() {
  return (
    <>
      
      <nav className="navbar">
        
        <div className="navbar-content">
          
          <div className="nav-left">
            <div className="logo">
              <span className="logo-red">POLYPLAY</span>
            </div>
            <ul className="nav-links">
              <li><Link to="/design-plan">3D Model Design</Link></li>
              <li><a href="#">3D Printing Service</a></li>
              <li><a href="#">Art Toy Painting</a></li>
              <li><a href="#">Cost Estimator</a></li>
            </ul>
          </div>

          <div className="nav-right">
            <div className="search-bar">
              <input type="text" placeholder="" />
              <BiSearchAlt className="search-icon" />
            </div>
            <button className="cart-btn">
              <RiShoppingBag3Fill className="cart-icon" />
            </button>
            <div className="profile-icon"></div>
          </div>

        </div>
      </nav>

      
      <div className="app-container">
        
       
        <header className="hero-section">
          <Link to="/design-plan" className="hero-banner-link">
            <img
              src={bannerImg}
              alt="Promotional Banner"
              className="hero-banner-img"
            />
          </Link>
        </header>

        
        <section className="gallery-section">
          <h2>ตัวอย่างผลงาน</h2>
          <div className="gallery-grid">
            
            <div className="gallery-card">
              <img src={artToyImg} alt="Art Toy Example" />
            </div>

            
            <div className="gallery-card">
              <img src={gundamImg} alt="Gundam Model" />
            </div>

            
            <div className="gallery-card">
              <img src={dragonImg} alt="Dragon Model" />
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
}

export default Home;