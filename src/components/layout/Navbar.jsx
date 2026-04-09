"use client";

import React from "react";
import Link from "next/link";
import {
    Navbar as BSNavbar,
    Nav,
    Container,
    NavDropdown,
} from "react-bootstrap";

import Button from "@/components/ui/Button";
import navbarData from "@/data/navbar.json";

const Navbar = () => {
    const { logo, navItems, buttons } = navbarData;

    return (
        <BSNavbar expand="lg" className="custom-navbar px-4">
            <Container fluid>

                {/* Logo */}
                <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
                    <span className="logo-bar"></span>
                    <span className="logo-text">{logo}</span>
                </Link>

                <BSNavbar.Toggle aria-controls="main-navbar" />

                <BSNavbar.Collapse id="main-navbar" className="justify-content-center">
                    <Nav className="gap-lg-4 text-uppercase small-nav">

                        {navItems.map((item, index) => (
                            <NavDropdown
                                key={index}
                                title={item.label}
                                id={`nav-dropdown-${index}`}
                            >
                                {/* You can add dropdown items later */}
                            </NavDropdown>
                        ))}

                    </Nav>
                </BSNavbar.Collapse>

                {/* Buttons */}
                <div className="d-flex gap-2">
                    <Button label={buttons.login} variant="outline" />
                    <Button label={buttons.signup} variant="light" />
                </div>

            </Container>
        </BSNavbar>
    );
};

export default Navbar;