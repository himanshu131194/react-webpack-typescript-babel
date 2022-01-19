import React from 'react';


const Dashboard: React.FC = () => {
    return (
        <header id="header" className="navbar navbar-expand-xl navbar-fixed navbar-height navbar-flush navbar-container navbar-bordered default">
            <div className="js-mega-menu navbar-nav-wrap hs-menu-initialized hs-menu-horizontal">
                <div className="navbar-brand-wrapper">
                    <a className="navbar-brand" href="./index.html" aria-label="Front">
                        <img className="navbar-brand-logo" src="https://htmlstream.com/front-dashboard/assets/svg/logos/logo.svg" alt="Logo" />
                    </a>
                </div>
                <div className="navbar-nav-wrap-content-right">
                    <ul className="navbar-nav align-items-center flex-row"></ul>
                </div>
                <div className="navbar-nav-wrap-content-left collapse navbar-collapse" id="navbarNavMenu">
                    <div className="navbar-body">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="hs-has-sub-menu">
                                <a id="dashboardsDropdown" className="hs-mega-menu-invoker navbar-nav-link nav-link nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="navLinkDashboardsDropdown">
                                    <i className="tio-home-vs-1-outlined nav-icon"></i> Dashboards
                                </a>
                                <ul
                                    id="navLinkDashboardsDropdown"
                                    className="hs-sub-menu dropdown-menu dropdown-menu-lg hs-sub-menu-desktop-lg animated fadeOut"
                                    aria-labelledby="dashboardsDropdown"
                                    style={{ minWidth: '16rem', 'animationDuration': '300ms', display: 'none' }}
                                >
                                    <li>
                                        <a className="dropdown-item" href="./index.html"> <span className="tio-circle nav-indicator-icon"></span> Default </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="./dashboard-alternative.html"> <span className="tio-circle nav-indicator-icon"></span> Alternative </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="hs-has-sub-menu">
                                <a id="documentationDropdown" className="hs-mega-menu-invoker navbar-nav-link nav-link nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="navLinkDocumentationDropdown">
                                    <i className="tio-book-opened nav-icon"></i> Docs
                                </a>
                                <ul
                                    id="navLinkDocumentationDropdown"
                                    className="hs-sub-menu dropdown-menu dropdown-menu-lg hs-sub-menu-desktop-lg animated"
                                    aria-labelledby="documentationDropdown"
                                    style={{ minWidth: '16rem', 'animationDuration': '300ms', display: 'none' }}
                                >
                                    <li>
                                        <a className="dropdown-item" href="./documentation/index.html"> <span className="tio-circle nav-indicator-icon"></span> Documentation <span className="badge badge-primary badge-pill ml-1">v1.0</span> </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="./documentation/index.html"> <span className="tio-circle nav-indicator-icon"></span> Components </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Dashboard;