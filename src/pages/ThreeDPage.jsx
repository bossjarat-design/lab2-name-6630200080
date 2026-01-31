import { Link } from "react-router-dom";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { BiSearchAlt, BiRightArrowAlt } from "react-icons/bi";
import "../styles/Home.css"; 
import "../styles/3d.css";

function ThreeDPage() {
  return (
    <>
      {" "}
      <nav className="navbar">
        
        <div className="navbar-content">
          <div className="nav-left">
            <Link to="/" className="logo">
              <span className="logo-red">POLYPLAY</span>
            </Link>
            <ul className="nav-links">
              <li>
                <Link to="/design-plan">3D Model Design</Link>
              </li>
              <li>
                <a href="#">3D Printing Service</a>
              </li>
              <li>
                <a href="#">Art Toy Painting</a>
              </li>
              <li>
                <a href="#">Cost Estimator</a>
              </li>
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
        <div className="threed-content-wrapper fade-in">
          <h1 className="page-title">3D Model Design Plan</h1>

          
          <div className="stepper-container">
            <div className="step active"></div>
            <div className="step-line active"></div>
            <div className="step active"></div>
            <div className="step-line active-half"></div>
            <div className="step inactive"></div>
            <div className="step-line inactive"></div>
            <div className="step inactive"></div>
            <div className="step-line inactive"></div>
            <div className="step inactive"></div>
          </div>

          <div className="plan-layout">
            
            <div className="plan-card">
              <div className="plan-header">
                <h2>Plan Pro</h2>
              </div>
              <div className="plan-body">
                <div className="price-section">
                  <span className="price-number">5000</span>
                  <div className="price-detail">
                    <span>THB / ชิ้น</span>
                    <span className="vat-text">(รวม VAT)</span>
                  </div>
                </div>

                <ul className="plan-features">
                  <li>• ออกแบบโมเดล 3D แบบ Custom</li>
                  <li>• ปรับแก้แบบได้ สูงสุด 5 ครั้ง</li>
                  <li>• ส่งไฟล์ 3D (STL / OBJ)</li>
                  <li>• รองรับงาน Art Toy / Character / Product</li>
                  <li>• ความละเอียดสูง พร้อมสำหรับพิมพ์ 3D</li>
                  <li>• ให้คำปรึกษากับนักออกแบบโดยตรง</li>
                  <li>• ระยะเวลาทำงาน 5-7 วัน</li>
                </ul>
              </div>
            </div>

            
            <div className="plan-form">
              <div className="form-group">
                <label className="form-label-bold">ประเภทงาน</label>
                <div className="radio-group">
                  <label className="radio-item">
                    <input type="radio" name="job" defaultChecked />
                    <span className="radio-custom"></span> Art Toy
                  </label>
                  <label className="radio-item">
                    <input type="radio" name="job" />
                    <span className="radio-custom"></span> Character
                  </label>
                  <label className="radio-item">
                    <input type="radio" name="job" />
                    <span className="radio-custom"></span> Product
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label-bold">คำอธิบาย</label>
                <div className="textarea-wrapper">
                  <textarea
                    className="desc-box"
                    placeholder=""
                    rows="8"
                  ></textarea>
                  <span className="cursor-blink">|</span>
                </div>
              </div>

              <div className="bottom-inputs">
                <div className="pill-container">
                  <span className="pill-label">ขนาดโมเดล</span>
                  <div className="pill-input-group">
                    <input
                      type="text"
                      defaultValue="50"
                      
                      className="pill-input text-center"
                    />
                    <span className="unit-text">CM</span>
                  </div>
                </div>

                <div className="pill-container">
                  <span className="pill-label">ระดับความละเอียด</span>
                  <div className="pill-input-group full-white">
                    <input type="text" className="pill-input" />
                  </div>
                </div>

                <div className="pill-container">
                  <span className="pill-label">จำนวน / ชิ้น</span>
                  <div className="pill-input-group center-text">
                    <input
                      type="text"
                      defaultValue="2"
                      className="pill-input text-center"
                    />
                  </div>
                </div>

                <button className="next-step-btn">
                  <BiRightArrowAlt size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThreeDPage;
