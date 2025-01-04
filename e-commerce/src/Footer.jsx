import React from 'react'
import logo from './assets/logo.webp'
import { FaFacebook,FaInstagram } from "react-icons/fa";
function Footer() {
    return <>
        <footer class="footer spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="footer__about">
                            <div class="footer__about__logo">
                                <a href="./index.html"><img src={logo} alt="" width="40%" /></a>
                            </div>
                            <ul>
                                <li>Address: Sasti Nagar</li>
                                <li>Phone: +91 63741XXXX</li>
                                <li>Email: vbhomemade@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                        <div class="footer__widget">
                            <h6>Useful Links</h6>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">About Our Shop</a></li>
                                <li><a href="#">Delivery infomation</a></li>
                                
                                
                            </ul>
                            <ul>
                                <li><a href="#">Who We Are</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="footer__widget">
                            <form action="#">
                                <input type="text" placeholder="Enter your mail" />
                                <button type="submit" class="site-btn">Subscribe</button>
                            </form>
                            <div class="footer__widget__social">

                                <FaFacebook />
                                <FaInstagram/>
                                {/* <i class="fa fa-twitter"></i> */}

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer__copyright">
                            <div class="footer__copyright__text"><p>
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">VB Homemade Food</a></p></div>
                            <div class="footer__copyright__payment"><img src="img/payment-item.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Footer
