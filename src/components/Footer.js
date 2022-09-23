import './Footer.css'
import React from 'react'

function Footer() {
    return (
        <div>

            <div className="footer-content">
                <ul>
                    <li><img src="Logo.PNG" alt="logo" className='logo' /><b>Cheetah</b></li><br />
                    <li>If you would like to experience the best of
                        <br />online shopping for men, women and kids
                        <br />in India, you are at the right place.</li>
                </ul>
                <ul>
                    <li><strong>MORE PRODUCTS<span></span></strong></li>
                    <li>Beauty & Personal Care<sup style={{ color: "red" }}><strong>NEW</strong></sup></li>
                    <li>Brands</li>
                    <li>Kids</li>
                    <li>Shop By Age <span style={{ backgroundColor: "rgb(213, 99, 137)", color: "white", borderRadius: "5px", fontSize: "10px", padding: "2px" }}>BOYS</span></li>
                    <li>Shop By Age <span style={{ backgroundColor: "rgb(213, 99, 137)", color: "white", borderRadius: "5px", fontSize: "10px", padding: "2px" }}>GIRLS</span></li>
                    <li>Furniture</li>
                    <li>Kitchen</li>
                </ul>
                <ul>
                    <li><strong>USEFUL LINKS</strong></li>
                    <li>Pricing</li>
                    <li>Settings</li>
                    <li>Orders</li>
                    <li>Help</li>
                </ul>
                <ul>
                    <li><strong>CONTACT</strong></li>
                    <li style={{ display: "flex", cursor: "pointer" }}><span><img src="./Email.PNG" alt="" /></span>example@gmail.com</li>
                    <li style={{ display: "flex", cursor: "pointer" }}><span><img src="./Phone.PNG" alt="" /></span>+91 9123456789</li>
                </ul>
            </div>
            <div className="heddinges">
                <h6>Get connected with us on social networks:</h6>
                <div className="imag">
                    <img src="./SocialMedia.PNG" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
