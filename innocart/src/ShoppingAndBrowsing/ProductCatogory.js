import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import menFashion from '../images/catogory/menFashion.jpg';
import womanFashion from '../images/catogory/womanFashion.jpg'; // Corrected import name
import electronicDevices from '../images/catogory/electronicDevices.jpg'; // Corrected import name
import HomeLifestyle from '../images/catogory/HomeLifestyle.jpg'; // Corrected import name
import Medicine from '../images/catogory/Medicine.jpg'; // Corrected import name
import SportsOutdoor from '../images/catogory/SportsOutdoor.jpg'; // Corrected import name
import toys from '../images/catogory/toys.jpg'; // Corrected import name
import GroceriesPets from '../images/catogory/GroceriesPets.jpg'; // Corrected import name
import HealthBeauty from '../images/catogory/HealthBeauty.jpg'; // Corrected import name
import ElectronicAccessories from '../images/catogory/ElectronicAccessories.jpg'; // Corrected import name
import AutomotiveMotorbike from '../images/catogory/AutomotiveMotorbike.jpg'; // Corrected import name
import WatchesAccessories from '../images/catogory/WatchesAccessories.jpg'; // Corrected import name

const ProductCategory = () => {
    const categories = [
        { name: 'Woman\'s Fashion', imageUrl: womanFashion }, // Use the imported path directly
        { name: 'Men\'s Fashion', imageUrl: menFashion },     // Use the imported path directly
        { name: 'Electronic Devices', imageUrl: electronicDevices },
        { name: 'Home & Lifestyle', imageUrl: HomeLifestyle },
        { name: 'Medicine', imageUrl: Medicine },
        { name: 'Sports & Outdoor', imageUrl: SportsOutdoor },
        { name: 'Baby\'s & Toys', imageUrl: toys },
        { name: 'Groceries & Pets', imageUrl: GroceriesPets },
        { name: 'Health & Beauty', imageUrl: HealthBeauty },
        { name: 'Electronic Accessories', imageUrl: ElectronicAccessories },
        { name: 'Automotive & Motorbike', imageUrl: AutomotiveMotorbike },
        { name: 'Watches & Accessories', imageUrl: WatchesAccessories },
    ];

    return (
        <div className="container-fluid p-0">
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


            <div className="container mt-4">
                <div className="row">
                    {categories.map((category, index) => (
                        <div className="col-md-4 mb-3 d-flex" key={index}>
                            <div
                                className="card shadow-sm h-100"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    border: '1px solid #e0e0e0',
                                    width: '100%',
                                }}
                            >
                                <img
                                    src={category.imageUrl} // Use imageUrl here
                                    alt={category.name}
                                    className="card-img-top"
                                    style={{
                                        width: '100%',
                                        height: '150px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div className="card-body text-center" style={{ padding: '15px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h6 className="card-title mb-2" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>
                                        {category.name}
                                    </h6>
                                    <button
                                        className="btn btn-sm btn-outline-primary mt-auto"
                                        style={{
                                            fontSize: '0.8rem',
                                            padding: '6px 12px',
                                            borderRadius: '5px',
                                            borderColor: '#007bff',
                                            color: '#007bff',
                                            transition: 'background-color 0.3s ease',
                                        }}
                                        onMouseOver={(e) => (e.target.style.backgroundColor = '#007bff', e.target.style.color = 'white')}
                                        onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent', e.target.style.color = '#007bff')}
                                    >
                                        View Products
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="bg-secondary text-white py-5 mt-5" style={{ backgroundColor: '#343a40 !important' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4" style={{ marginBottom: '20px' }}>
                            <img src="/InnoCart_logo.png" alt="InnoCart Logo" height="50" className="mb-3" />
                            <p style={{ fontSize: '0.9rem', color: '#f8f9fa' }}>
                                InnoCart is a ultimate destination for high quality fashion that blends style, comfort and affordability
                            </p>
                        </div>
                        <div className="col-md-3" style={{ marginBottom: '20px' }}>
                            <h5 className="mb-4" style={{ color: '#fff', fontWeight: 'bold' }}>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-white" style={{ textDecoration: 'none', color: '#f8f9fa', fontSize: '0.9rem' }}>Home</a></li>
                                <li><a href="/services" className="text-white" style={{ textDecoration: 'none', color: '#f8f9fa', fontSize: '0.9rem' }}>Services</a></li>
                                <li><a href="/about" className="text-white" style={{ textDecoration: 'none', color: '#f8f9fa', fontSize: '0.9rem' }}>About</a></li>
                                <li><a href="/contact" className="text-white" style={{ textDecoration: 'none', color: '#f8f9fa', fontSize: '0.9rem' }}>Contact Us</a></li>
                                <li><a href="/products" className="text-white" style={{ textDecoration: 'none', color: '#f8f9fa', fontSize: '0.9rem' }}>Products</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3" style={{ marginBottom: '20px' }}>
                            <h5 className="mb-4" style={{ color: '#fff', fontWeight: 'bold' }}>Newsletter</h5>
                            <p style={{ fontSize: '0.9rem', color: '#f8f9fa' }}>Copyright 2025 InnoCart. All Rights Reserved</p>
                        </div>
                        <div className="col-md-2">
                            <h5 className="mb-4" style={{ color: '#fff', fontWeight: 'bold' }}>Get in Touch</h5>
                            <p style={{ fontSize: '0.9rem', color: '#f8f9fa' }}>+94 77 543 9120</p>
                            <div className="d-flex gap-2">
                                <a href="#" className="text-white" style={{ color: '#f8f9fa', fontSize: '1rem' }}><i className="fas fa-envelope"></i></a>
                                <a href="#" className="text-white" style={{ color: '#f8f9fa', fontSize: '1rem' }}><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-white" style={{ color: '#f8f9fa', fontSize: '1rem' }}><i className="fab fa-facebook"></i></a>
                                <a href="#" className="text-white" style={{ color: '#f8f9fa', fontSize: '1rem' }}><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Scroll to Top Button */}
            <button
                id="scrollToTopBtn"
                className="btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-4"
                style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    zIndex: 100,
                    cursor: 'pointer',
                }}
            >
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    );
};

export default ProductCategory;