import React from 'react';
import { Link } from 'react-router-dom'; // Import Link มาใช้แทน <a>
import "../styles/Home.css";
import artToyImg from '../assets/art-toy.png';
import gundamImg from '../assets/gundam.png';
import dragonImg from '../assets/dragon.png';
import { RiShoppingBag3Fill } from "react-icons/ri";

function Home() {
  return (
    <div className="app-container">
      {/* --- 1. Navigation Bar --- */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            POLY<span className="logo-red">PLAY</span>
          </div>
          <ul className="nav-links">
            {/* เปลี่ยนจาก <a> เป็น <Link> เพื่อไปหน้า design-plan */}
            <li><Link to="/design-plan">3D Model Design</Link></li>
            <li><a href="#">3D Printing Service</a></li>
            <li><a href="#">Art Toy Painting</a></li>
            <li><a href="#">Cost Estimator</a></li>
          </ul>
        </div>
        
        <div className="nav-right">
          <div className="search-bar">
            <span className="icon-placeholder">🔍</span>
            <input type="text" placeholder="ค้นหาผลงาน..." />
          </div>
          <button className="cart-btn">
            <RiShoppingBag3Fill className="cart-icon" />
          </button>
          <div className="profile-icon">
            {/* พื้นที่สำหรับ Profile User */}
          </div>
        </div>
      </nav>

      {/* --- 2. Hero Section (Banner) --- */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-text-block">
            <h1>TRANSFORM<br />YOUR IDEAS</h1>
            <p className="subtitle">Custom 3D Model Design Service</p>
            <p className="tagline">Unleash Your Creativity</p>
          </div>
          
          <div className="hero-image-placeholder">
            {/* พื้นหลังถูกจัดการใน CSS */}
          </div>

          {/* เปลี่ยนจาก <button> เป็น <Link> เพื่อให้กดปุ่มใหญ่แล้วเปลี่ยนหน้าได้เหมือนกัน */}
          <Link to="/design-plan" className="cta-button">
            START YOUR PROJECT
          </Link>
        </div>
      </header>

      {/* --- 3. Gallery Section --- */}
      <section className="gallery-section">
        <h2>ตัวอย่างผลงาน</h2>
        <div className="gallery-grid">
          
          {/* Card 1 */}
          <div className="gallery-card">
            <img src={artToyImg} alt="Art Toy Example" />
          </div>

          {/* Card 2 */}
          <div className="gallery-card">
            <img src={gundamImg} alt="Gundam Model" />
          </div>

          {/* Card 3 */}
          <div className="gallery-card">
            <img src={dragonImg} alt="Dragon Model" />
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;