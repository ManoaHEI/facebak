import React, { useEffect } from "react";
import './Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

export default function Landing() {

    useEffect(() => {
        // ---------Responsive-navbar-active-animation-----------
        function test() {
            var tabsNewAnim = $('#navbarSupportedContent');
            var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
            var activeItemNewAnim = tabsNewAnim.find('.active');
            var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
            var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
            var itemPosNewAnimTop = activeItemNewAnim.position();
            var itemPosNewAnimLeft = activeItemNewAnim.position();
            $(".hori-selector").css({
                "top": itemPosNewAnimTop.top + "px",
                "left": itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
            $("#navbarSupportedContent").on("click", "li", function (e) {
                $('#navbarSupportedContent ul li').removeClass("active");
                $(this).addClass('active');
                var activeWidthNewAnimHeight = $(this).innerHeight();
                var activeWidthNewAnimWidth = $(this).innerWidth();
                var itemPosNewAnimTop = $(this).position();
                var itemPosNewAnimLeft = $(this).position();
                $(".hori-selector").css({
                    "top": itemPosNewAnimTop.top + "px",
                    "left": itemPosNewAnimLeft.left + "px",
                    "height": activeWidthNewAnimHeight + "px",
                    "width": activeWidthNewAnimWidth + "px"
                });
            });
        }
        setTimeout(function () { test(); });
        $(window).on('resize', function () {
            setTimeout(function () { test(); }, 500);
        });
        $(".navbar-toggler").click(function () {
            $(".navbar-collapse").slideToggle(300);
            setTimeout(function () { test(); });
        });

        // --------------add active class-on another-page move----------
        // Get current path and find target link
        var path = window.location.pathname.split("/").pop();

        // Account for home page with empty path
        if (path === '') {
            path = 'index.html';
        }

        var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
        // Add active class to target link
        target.parent().addClass('active');
    }, []);

    return (
        <>
            <div className="Landing">
                <nav className="navbar navbar-expand-custom navbar-mainbg">
                    <a className="navbar-brand navbar-logo" href="#">Facebak</a>
                    <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars text-white"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <div className="hori-selector">
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0);">
                                    <i class="bi bi-tools"></i>Features
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="javascript:void(0);">
                                    <i class="bi bi-info-circle-fill"></i>About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0);">
                                <i class="bi bi-envelope-at-fill"></i>Contacts
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button type="button" className="sign-up-btn">
                            <a href="/sign-up">
                                SignUp
                            </a>
                        </button>
                        <button type="button" className="sign-in-btn">
                            <a href="/login">
                                Login
                            </a>
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
}
