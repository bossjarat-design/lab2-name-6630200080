import React from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingBag3Fill } from "react-icons/ri";
import '../styles/Home.css'; // ดึง CSS หลักมาเพื่อให้ Navbar หน้าตาเหมือนเดิม
import '../styles/3d.css';   // ส่วนของเนื้อหาข้างล่างค่อยใช้ 3d.css

function ThreeDPage() {
  return (
    <div className="app-container"> {/* ใช้ Container เดียวกับหน้าแรก */}
      
      {/* --- ส่วน Navbar (Copy มาจาก Home เลย) --- */}
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo">POLY<span className="logo-red">PLAY</span></Link>
          <ul className="nav-links">
            <li><Link to="/design-plan">3D Model Design</Link></li>
            <li><a href="#">3D Printing Service</a></li>
            <li><a href="#">Art Toy Painting</a></li>
            <li><a href="#">Cost Estimator</a></li>
          </ul>
        </div>
        
        <div className="nav-right">
          <div className="search-bar">
            <span className="icon-placeholder">🔍</span>
            <input type="text" placeholder="ค้นหา..." />
          </div>
          <button className="cart-btn">
            <RiShoppingBag3Fill className="cart-icon" />
          </button>
          <div className="profile-icon"></div>
        </div>
      </nav>

      {/* --- ส่วนเนื้อหาของหน้า 3D (ใส่ครอบด้วย class ใหม่เพื่อแยก CSS) --- */}
      <div className="threed-content-wrapper fade-in">
        <h1 className="page-title">3D Model Design Plan</h1>
        
        {/* Stepper */}
        <div className="stepper-container">
          <div className="step active"></div>
          <div className="step-line active"></div>
          <div className="step active"></div>
          <div className="step-line"></div>
          <div className="step"></div>
        </div>

        <div className="plan-layout">
          {/* ฝั่งซ้าย: การ์ดราคา */}
          <div className="plan-card">
            <div className="plan-header"><h2>Plan Pro</h2></div>
            <div className="plan-body">
              <div className="price-tag">
                <span className="price">5,000</span>
                <span className="price-unit">THB / ชิ้น</span>
              </div>
              <ul className="plan-features">
                <li>ออกแบบโมเดล 3D แบบ Custom</li>
                <li>ปรับแก้แบบได้ 5 ครั้ง</li>
                <li>ส่งไฟล์ STL / OBJ</li>
                <li>ความละเอียดสูงสำหรับพิมพ์ 3D</li>
              </ul>
            </div>
          </div>

          {/* ฝั่งขวา: ฟอร์ม */}
          <div className="plan-form">
            <div className="form-group">
              <label className="form-label-bold">ประเภทงาน</label>
              <div className="radio-group">
                <label><input type="radio" name="job" defaultChecked /> Art Toy</label>
                <label><input type="radio" name="job" /> Character</label>
                <label><input type="radio" name="job" /> Product</label>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label-bold">คำอธิบายรายละเอียด</label>
              <textarea className="desc-box" placeholder="บอกรายละเอียดงานของคุณ..." rows="6"></textarea>
            </div>

            <div className="bottom-inputs">
              <div className="input-red-box">
                <span className="box-label">ขนาด</span>
                <div className="box-field"><input type="text" defaultValue="50" /> CM</div>
              </div>
              <div className="input-red-box">
                <span className="box-label">ความละเอียด</span>
                <select><option>High</option><option>Medium</option></select>
              </div>
              <button className="next-step-btn">➜</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeDPage;