import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import banner1 from '../images/Banners/banner.jpg'; // Corrected path
import banner2 from '../images/Banners/Banner2.jpg';
import banner3 from '../images/Banners/Banner3.jpg';
import Gamepad from '../images/products/gamepad.jpg';
import keyboard from '../images/products/keyboard.jpg';
import chair from '../images/products/chair.jpg';
import chair2 from '../images/products/chair2.jpg';
import monitor from '../images/products/monitor.jpg';
import cPUCooler from '../images/products/cPUCooler.png';
import GPIIShooterUSBGamepad from '../images/products/GPIIShooterUSBGamepad.png';


import northCoat from '../images/products/northCoat.jpg';
import gucciDuffleBag from '../images/products/gucciDuffleBag.jpg';
import bookshelf from '../images/products/bookshelf.jpg';
import jblSpeaker from '../images/products/jblSpeaker.jpg';
import BreedDryDogFood from '../images/products/BreedDryDogFood.jpg';
import CANONEOSDSLRCamera from '../images/products/CANONEOSDSLRCamera.jpg';
import ASUSFHDGamingLaptop from '../images/products/ASUSFHDGamingLaptop.jpg';
import CurologyProductSet from '../images/products/CurologyProductSet.jpg';
import KidsElectricCar from '../images/products/KidsElectricCar.jpg';
import ZoomSoccerCleats from '../images/products/ZoomSoccerCleats.jpg';
import QuiltedSatinJacket from '../images/products/QuiltedSatinJacket.jpg';


function Home() {
    return (
        <div className="container-fluid p-0">
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
                <div className="d-flex w-100 px-3 align-items-center justify-content-between">
                    {/* Left: Logo */}
                    <a className="navbar-brand" href="/">
                        <img src="logo.png" alt="InnoCart Logo" height="30" />
                    </a>

                    {/* Toggle for mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Center: Nav links */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav d-flex gap-4">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownProducts" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownProducts">
                                    <li><a className="dropdown-item" href="/productCatogory">Products Catogory</a></li>
                                    <li><a className="dropdown-item" href="/products/category2">Product Listing</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownServices" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownServices">
                                    <li><a className="dropdown-item" href="/services/service1">Service 1</a></li>
                                    <li><a className="dropdown-item" href="/services/service2">Service 2</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Right: Auth buttons */}
                    <div className="d-flex">
                        <button className="btn btn-outline-secondary me-2" type="button">Login</button>
                        <button className="btn btn-primary" type="button">Sign Up</button>
                    </div>
                </div>
            </nav>




            {/* Hero Section */}
            <section className="container mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="list-group">
                            <a href="/womens-fashion" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Woman's Fashion <span className="fa fa-chevron-right"></span> {/* You might need to include Font Awesome or similar for icons */}
                            </a>
                            <a href="/mens-fashion" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Men's Fashion <span className="fa fa-chevron-right"></span>
                            </a>
                            <a href="/electronics" className="list-group-item list-group-item-action">Electronics</a>
                            <a href="/home-lifestyle" className="list-group-item list-group-item-action">Home & Lifestyle</a>
                            <a href="/medicine" className="list-group-item list-group-item-action">Medicine</a>
                            <a href="/sports-outdoor" className="list-group-item list-group-item-action">Sports & Outdoor</a>
                            <a href="/baby-toys" className="list-group-item list-group-item-action">Baby's & Toys</a>
                            <a href="/groceries-pets" className="list-group-item list-group-item-action">Groceries & Pets</a>
                            <a href="/health-beauty" className="list-group-item list-group-item-action">Health & Beauty</a>
                            <a href="/productCatogory" className="list-group-item list-group-item-action bg-primary text-white">
                                More
                            </a>

                        </div>
                    </div>
                    <div className="col-md-9">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={banner1} className="d-block w-100" alt="Banner 1" /> {/* Replace with your actual banner image */}
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Up to 10% off Voucher</h5>
                                        <p>iPhone 14 Series</p>
                                        <a href="/shop-now" className="btn btn-primary">Shop Now</a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={banner2} className="d-block w-100" alt="Banner 2" /> {/* Replace with your actual banner image */}
                                </div>
                                <div className="carousel-item">
                                    <img src={banner3} className="d-block w-100" alt="Banner 3" /> {/* Replace with your actual banner image */}
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Flash Sales Section */}
            <section className="container mt-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2>Today's Flash Sales</h2>
                    <div>
                        <span className="badge bg-danger">Ends in</span>
                        <span className="ms-2">03 : 23 : 19 : 56</span> {/* Replace with dynamic timer if needed */}
                        <button className="btn btn-outline-secondary ms-3">
                            <span className="fa fa-arrow-left"></span>
                        </button>
                        <button className="btn btn-outline-secondary ms-2">
                            <span className="fa fa-arrow-right"></span>
                        </button>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
                    {/* Flash Sale Item 1 */}
                    <div className="col">
                        <div className="card h-100">
                            <span className="badge bg-danger position-absolute top-0 start-0 m-2">-40%</span>
                            <img src={Gamepad} className="card-img-top" alt="HAVIT HV-G92 Gamepad" /> {/* Replace with actual image */}
                            <div className="card-body">
                                <h5 className="card-title">HAVIT HV-G92 Gamepad</h5>
                                <p className="card-text">
                                    <del>Rs.1600.00</del> <span className="text-danger">Rs.1160.00</span>
                                </p>
                                <button className="btn btn-warning btn-sm">Add to Cart</button>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">(88)</small>
                                    <button className="btn btn-outline-secondary btn-sm">
                                        <span className="fa fa-heart"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Flash Sale Item 2 */}
                    <div className="col">
                        <div className="card h-100">
                            <span className="badge bg-danger position-absolute top-0 start-0 m-2">-15%</span>
                            <img src={keyboard} className="card-img-top" alt="AK-900 Wired Keyboard" /> {/* Replace with actual image */}
                            <div className="card-body">
                                <h5 className="card-title">AK-900 Wired Keyboard</h5>
                                <p className="card-text">
                                    <del>Rs.3800.00</del> <span className="text-danger">Rs.3300.00</span>
                                </p>
                                <button className="btn btn-warning btn-sm">Add to Cart</button>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <small className="text-muted">(75)</small>
                                    <button className="btn btn-outline-secondary btn-sm">
                                        <span className="fa fa-heart"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Flash Sale Item 3 */}
                    <div className="col">
                        <div className="card h-100">
                            <span className="badge bg-danger position-absolute top-0 start-0 m-2">-30%</span>
                            <img src={monitor} className="card-img-top" alt="IPS LCD Gaming Monitor" /> {/* Replace with actual image */}
                            <div className="card-body">
                                <h5 className="card-title">IPS LCD Gaming Monitor</h5>
                                <p className="card-text">
                                    <del>Rs.11500.00</del> <span className="text-danger">Rs.9700.00</span>
                                </p>
                                <button className="btn btn-warning btn-sm">Add to Cart</button>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">(99)</small>
                                    <button className="btn btn-outline-secondary btn-sm">
                                        <span className="fa fa-heart"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Flash Sale Item 4 */}
                    <div className="col">
                        <div className="card h-100">
                            <span className="badge bg-danger position-absolute top-0 start-0 m-2">-25%</span>
                            <img src={chair} className="card-img-top" alt="S-Series Comfort Chair" />
                            <div className="card-body">
                                <h5 className="card-title">S-Series Comfort Chair</h5>
                                <p className="card-text">
                                    <del>Rs.13600.00</del> <span className="text-danger">Rs.9500.00</span>
                                </p>
                                <button className="btn btn-warning btn-sm">Add to Cart</button>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">(99)</small>
                                    <button className="btn btn-outline-secondary btn-sm">
                                        <span className="fa fa-heart"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <span className="badge bg-danger position-absolute top-0 start-0 m-2">-25%</span>
                            <img src={chair2} className="card-img-top" alt="S-Series Comfort Chair" />
                            <div className="card-body">
                                <h5 className="card-title">S-Series Comfort Chair</h5>
                                <p className="card-text">
                                    <del>Rs.13600.00</del> <span className="text-danger">Rs.9500.00</span>
                                </p>
                                <button className="btn btn-warning btn-sm">Add to Cart</button>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">(99)</small>
                                    <button className="btn btn-outline-secondary btn-sm">
                                        <span className="fa fa-heart"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* You can add more flash sale items here */}
                </div>
                <div className="text-center mt-4">
                    <button className="btn btn-primary">View All Products</button>
                </div>
            </section>

            {/* Browse Categories Section */}
            <section className="container mt-5">
                <h2 className="mb-4">Browse By Category</h2>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <i className="fas fa-mobile fa-3x mb-2 text-danger"></i>
                                <h6 className="card-title">Phones</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <i className="fas fa-laptop fa-3x mb-2 text-danger"></i>
                                <h6 className="card-title">Computers</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <i className="fas fa-clock fa-3x mb-2 text-danger"></i>
                                <h6 className="card-title">SmartWatch</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <i className="fas fa-camera fa-3x mb-2 text-danger"></i>
                                <h6 className="card-title">Camera</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <i className="fas fa-headphones fa-3x mb-2 text-danger"></i>
                                <h6 className="card-title">HeadPhones</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <i className="fas fa-gamepad fa-3x mb-2 text-danger"></i>
                                <h6 className="card-title">Gaming</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Selling Products */}
            <section className="container mt-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2>Best Selling Products</h2>
                    <button className="btn btn-outline-secondary">View All</button>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {/* Best Selling Product 1 */}
                    <div className="col">
                        <div className="card h-100">
                            <button className="btn btn-outline-secondary btn-sm position-absolute top-0 end-0 m-2">
                                <span className="fa fa-heart"></span>
                            </button>
                            <img src={northCoat} className="card-img-top" alt="The North Coat" />  {/* Replace with actual image */}
                            <div className="card-body">
                                <h5 className="card-title">The North Coat</h5>
                                <p className="card-text">
                                    Rs.2300 <del className="text-muted">Rs.2500</del>
                                </p>
                                <p className="card-text">
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star-half-o text-warning"></span>
                                    <span className="text-muted">(66)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Best Selling Product 2 */}
                    <div className="col">
                        <div className="card h-100">
                            <button className="btn btn-outline-secondary btn-sm position-absolute top-0 end-0 m-2">
                                <span className="fa fa-heart"></span>
                            </button>
                            <img src={gucciDuffleBag} className="card-img-top" alt="Gucci Duffle Bag" />  {/* Replace with actual image */}
                            <div className="card-body">
                                <h5 className="card-title">Gucci Duffle Bag</h5>
                                <p className="card-text">
                                    Rs.3100 <del className="text-muted">Rs.3200</del>
                                </p>
                                <p className="card-text">
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star-half-o text-warning"></span>
                                    <span className="text-muted">(66)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Best Selling Product 3 */}
                    <div className="col">
                        <div className="card h-100">
                            <button className="btn btn-outline-secondary btn-sm position-absolute top-0 end-0 m-2">
                                <span className="fa fa-heart"></span>
                            </button>
                            <img src={cPUCooler} className="card-img-top" alt="RGB Liquid CPU Cooler" />   {/* Replace with actual image */}
                            <div className="card-body">
                                <h5 className="card-title">RGB Liquid CPU Cooler</h5>
                                <p className="card-text">
                                    Rs.5000 <del className="text-muted">Rs.5200</del>
                                </p>
                                <p className="card-text">
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star-half-o text-warning"></span>
                                    <span className="text-muted">(66)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Best Selling Product 4 */}
                    <div className="col">
                        <div className="card h-100">
                            <button className="btn btn-outline-secondary btn-sm position-absolute top-0 end-0 m-2">
                                <span className="fa fa-heart"></span>
                            </button>
                            <img src={bookshelf} className="card-img-top" alt="Small Bookshelf" />  {/* Replace with actual image */}
                            <div className="card-body">
                                <h5 className="card-title">Small Bookshelf</h5>
                                <p className="card-text">
                                    Rs.9000 <del className="text-muted">Rs.9100</del>
                                </p>
                                <p className="card-text">
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star-half-o text-warning"></span>
                                    <span className="text-muted">(66)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Music Experience Section */}
            <section className="container mt-5">
                <div className="card bg-dark text-white">
                    <div className="row align-items-center">
                        <div className="col-md-6 p-4">
                            <h2 className="card-title">Enhance Your Music Experience</h2>
                            <div className="d-flex gap-2 mb-3">
                                <div>
                                    <p>23</p>
                                    <small>Hours</small>
                                </div>
                                <div>
                                    <p>05</p>
                                    <small>Days</small>
                                </div>
                                <div>
                                    <p>59</p>
                                    <small>Mins</small>
                                </div>
                                <div>
                                    <p>35</p>
                                    <small>Secs</small>
                                </div>
                            </div>
                            <button className="btn btn-success">Buy Now!</button>
                        </div>
                        <div className="col-md-6">
                            <img src={jblSpeaker} className="img-fluid" alt="JBL Speaker" />  {/* Replace with actual image */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Products */}
            <section className="container mt-5">
                <h2>Explore Our Products</h2>
                <div className="d-flex justify-content-end mb-3">
                    <button className="btn btn-outline-secondary me-2">
                        <span className="fa fa-arrow-left"></span>
                    </button>
                    <button className="btn btn-outline-secondary">
                        <span className="fa fa-arrow-right"></span>
                    </button>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {/* Product 1 */}
                    <div className="col">
                        <div className="card h-100">
                            <button className="btn btn-outline-secondary btn-sm position-absolute top-0 end-0 m-2">
                                <span className="fa fa-heart"></span>
                            </button>
                            <img src={BreedDryDogFood} className="card-img-top" alt="Breed Dry Dog Food" />  {/* Replace with actual image */}
                            <div className="card-body">
                                <h5 className="card-title">Breed Dry Dog Food</h5>
                                <p className="card-text">Rs.9000</p>
                                <p className="card-text">
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star-half-o text-warning"></span>
                                    <span className="fa fa-star-o text-warning"></span>
                                    <span className="text-muted">(35)</span>
                                </p>
                                <button className="btn btn-warning btn-sm">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div className="col">
                        <div className="card h-100">
                            <div className="d-flex justify-content-between align-items-start">
                                <button className="btn btn-outline-secondary btn-sm  m-2">
                                    <span className="fa fa-heart"></span>
                                </button>
                                <button className="btn btn-outline-secondary btn-sm  m-2">
                                    <span className="fa fa-eye"></span>
                                </button>
                            </div>
                            <img src={CANONEOSDSLRCamera} className="card-img-top" alt="CANON EOS DSLR Camera" />  {/* Replace with actual image */}
                            <div className="card-body">
                                <h5 className="card-title">CANON EOS DSLR Camera</h5>
                                <p className="card-text">Rs.10000</p>
                                <p className="card-text">
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star-o text-warning"></span>
                                    <span className="text-muted">(95)</span>
                                </p>
                                <button className="btn btn-warning btn-sm">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div className="col">
                        <div className="card h-100">
                            <button className="btn btn-outline-secondary btn-sm position-absolute top-0 end-0 m-2">
                                <span className="fa fa-heart"></span>
                            </button>
                            <img src={ASUSFHDGamingLaptop} className="card-img-top" alt="ASUS FHD Gaming Laptop" />   {/* Replace with actual image */}
                            <div className="card-body">
                                <h5 className="card-title">ASUS FHD Gaming Laptop</h5>
                                <p className="card-text">Rs.35000</p>
                                <p className="card-text">
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star-half-o text-warning"></span>
                                    <span className="fa fa-star-o text-warning"></span>
                                    <span className="text-muted">(325)</span>
                                </p>
                                <button className="btn btn-warning btn-sm">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    {/* Product 4 */}
                    <div className="col">
                        <div className="card h-100">
                            <button className="btn btn-outline-secondary btn-sm position-absolute top-0 end-0 m-2">
                                <span className="fa fa-heart"></span>
                            </button>
                            <img src={CurologyProductSet} className="card-img-top" alt="Curology Product Set" />  {/* Replace with actual image */}
                            <div className="card-body">
                                <h5 className="card-title">Curology Product Set</h5>
                                <p className="card-text">Rs.4600</p>
                                <p className="card-text">
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star-o text-warning"></span>
                                    <span className="fa fa-star-o text-warning"></span>
                                    <span className="text-muted">(145)</span>
                                </p>
                                <button className="btn btn-warning btn-sm">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    {/* Product 5 */}
                    <div className="col">
                        <div className="card h-100">
                            <span className="badge bg-success position-absolute top-0 start-0 m-2">NEW</span>
                            <button className="btn btn-outline-secondary btn-sm position-absolute top-0 end-0 m-2">
                                <span className="fa fa-heart"></span>
                            </button>
                            <img src={KidsElectricCar} className="card-img-top" alt="Kids Electric Car" />
                            <div className="card-body">
                                <h5 className="card-title">Kids Electric Car</h5>
                                <p className="card-text">Rs.16000</p>
                                <p className="card-text">
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star-half-o text-warning"></span>
                                    <span className="fa fa-star-o text-warning"></span>
                                    <span className="text-muted">(65)</span>
                                </p>
                                <button className="btn btn-warning btn-sm">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    {/* Product 6 */}
                    <div className="col">
                        <div className="card h-100">
                            <button className="btn btn-outline-secondary btn-sm position-absolute top-0 end-0 m-2">
                                <span className="fa fa-heart"></span>
                            </button>
                            <img src={ZoomSoccerCleats} className="card-img-top" alt="Jr. Zoom Soccer Cleats" />
                            <div className="card-body">
                                <h5 className="card-title">Jr. Zoom Soccer Cleats</h5>
                                <p className="card-text">Rs.17500</p>
                                <p className="card-text">
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star-half-o text-warning"></span>
                                    <span className="fa fa-star-o text-warning"></span>
                                    <span className="text-muted">(35)</span>
                                </p>
                                <button className="btn btn-warning btn-sm">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    {/* Product 7 */}
                    <div className="col">
                        <div className="card h-100">
                            <span className="badge bg-success position-absolute top-0 start-0 m-2">NEW</span>
                            <button className="btn btn-outline-secondary btn-sm position-absolute top-0 end-0 m-2">
                                <span className="fa fa-heart"></span>
                            </button>
                            <img src={GPIIShooterUSBGamepad} className="card-img-top" alt="GPII Shooter USB Gamepad" />
                            <div className="card-body">
                                <h5 className="card-title">GPII Shooter USB Gamepad</h5>
                                <p className="card-text">Rs.4800</p>
                                <p className="card-text">
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star-half-o text-warning"></span>
                                    <span className="fa fa-star-o text-warning"></span>
                                    <span className="text-muted">(55)</span>
                                </p>
                                <button className="btn btn-warning btn-sm">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    {/* Product 8 */}
                    <div className="col">
                        <div className="card h-100">
                            <button className="btn btn-outline-secondary btn-sm position-absolute top-0 end-0 m-2">
                                <span className="fa fa-heart"></span>
                            </button>
                            <img src={QuiltedSatinJacket} className="card-img-top" alt="Quilted Satin Jacket" />
                            <div className="card-body">
                                <h5 className="card-title">Quilted Satin Jacket</h5>
                                <p className="card-text">Rs.9500</p>
                                <p className="card-text">
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star text-warning"></span>
                                    <span className="fa fa-star-half-o text-warning"></span>
                                    <span className="fa fa-star-o text-warning"></span>
                                    <span className="text-muted">(65)</span>
                                </p>
                                <button className="btn btn-warning btn-sm">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <button className="btn btn-primary">View All Products</button>
                </div>
            </section>




            {/* Footer */}
            {/* Footer */}
            <footer className="bg-secondary text-white pt-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="webuy_logo.png" alt="Webuy Logo" height="50" className="mb-3" />
                            <p>
                                Webuy is a ultimate destination for high quality fashion that blends style, comfort and affordability
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h5 className="mb-4">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-white">Home</a></li>
                                <li><a href="/services" className="text-white">Services</a></li>
                                <li><a href="/about" className="text-white">About</a></li>
                                <li><a href="/contact" className="text-white">Contact Us</a></li>
                                <li><a href="/products" className="text-white">Products</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5 className="mb-4">Newsletter</h5>
                            <p>Copyright 2025 WEBUY. All Rights Reserved</p>
                        </div>
                        <div className="col-md-2">
                            <h5 className="mb-4">Get in Touch</h5>
                            <p>+94 77 543 9120</p>
                            <div className="d-flex gap-2">
                                <a href="#" className="text-white"><i className="fas fa-envelope"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-facebook"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Scroll to Top Button */}
            <button id="scrollToTopBtn" className="btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-4">
                <i className="fas fa-arrow-up"></i>
            </button>


        </div>
    );
}
export default Home;
