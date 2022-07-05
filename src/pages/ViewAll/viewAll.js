import { Link } from "react-router-dom"
import React, { Component } from 'react'
import '../../assets/css/style.css'
import './viewall.css'

const viewAll = () => {
        return (
            <>
                <div>
                    <meta charSet="utf-8" />
                    <title>View All Page</title>
                    <link rel="stylesheet" href="css/viewall.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=Mulish" rel="stylesheet" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <div className="container">
                        {/* Navigation Bar */}
                        <nav>
                            <ul>
                                <div className="logo">
                                    <Link to={"homepage.js"}><img src="image/brandlogo.svg" alt="logo" /></Link>
                                </div>
                                <li><a className="active" href="homepage.js">Home</a></li>
                                <li><a href="#">List Movies</a></li>
                            </ul>
                            <button><Link to={"signUp.js"}>Sign Up</Link></button>
                        </nav>
                        {/* Movie List Section */}
                        <div className="show-toogle">
                            <section>
                                <p>List Movie</p>
                                {/* <select class="form-control">
              <option>Sort</option>
            </select> */}
                                <input type="text" name="search=" id="search" placeholder="Search Movie Name ..." />
                            </section>
                            <div className="card-date">
                                <ul>
                                    <li><button>September</button></li>
                                    <li><button>October</button></li>
                                    <li><button>November</button></li>
                                    <li><button>Desember</button></li>
                                    <li><button>January</button></li>
                                    <li><button>February</button></li>
                                    <li><button>March</button></li>
                                    <li><button>April</button></li>
                                    <li><button>May</button></li>
                                </ul>
                            </div>
                            <div className="box-movie">
                                {/* Card Movies */}
                                <div className="card-movie">
                                    <ul>
                                        <li>
                                            <div className="card-image item-1">
                                                <img src="image/main section card/Movie-Card-4.png" alt="card-1" />
                                                <p>Black-Widow<br /><span>Action, Adventure, Sci-Fi</span></p>
                                                <button>Details</button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-image item-2">
                                                <img src="image/main section card/Movie-Card-4.png" alt="card-1" />
                                                <p>Black-Widow<br /><span>Action, Adventure, Sci-Fi</span></p>
                                                <button>Details</button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-image item-3">
                                                <img src="image/main section card/Movie-Card-4.png" alt="card-1" />
                                                <p>Black-Widow<br /><span>Action, Adventure, Sci-Fi</span></p>
                                                <button>Details</button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-image item-1">
                                                <img src="image/main section card/Movie-Card-4.png" alt="card-1" />
                                                <p>Black-Widow<br /><span>Action, Adventure, Sci-Fi</span></p>
                                                <button>Details</button>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <div className="card-image item-1">
                                                <img src="image/main section card/Movie-Card-4.png" alt="card-1" />
                                                <p>Black-Widow<br /><span>Action, Adventure, Sci-Fi</span></p>
                                                <button>Details</button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-image item-2">
                                                <img src="image/main section card/Movie-Card-4.png" alt="card-1" />
                                                <p>Black-Widow<br /><span>Action, Adventure, Sci-Fi</span></p>
                                                <button>Details</button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-image item-3">
                                                <img src="image/main section card/Movie-Card-4.png" alt="card-1" />
                                                <p>Black-Widow<br /><span>Action, Adventure, Sci-Fi</span></p>
                                                <button>Details</button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-image item-1">
                                                <img src="image/main section card/Movie-Card-4.png" alt="card-1" />
                                                <p>Black-Widow<br /><span>Action, Adventure, Sci-Fi</span></p>
                                                <button>Details</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pagination">
                                <a className="active" href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                            </div>
                        </div>
                        {/* Footer */}
                        <footer>
                            <div className="line-1">
                                <a href="#"><img src="image/brandlogo.svg" alt="logo" /></a>
                                <p>Stop waiting in line. Buy tickets <br />conveniently, watch movies quietly.</p>
                            </div>
                            <div className="line-2">
                                <h3>Explore</h3>
                                <div className="list">
                                    <h4><a href>Home</a></h4>
                                    <h4><a href>List Movie</a></h4>
                                </div>
                            </div>
                            <div className="line-3">
                                <h4>Our Sponsor</h4>
                                <div className="list">
                                    <img src="image/ebv.id.png" alt="ebv.id" style={{ marginBottom: '1em' }} />
                                    <img src="image/CineOne21.png" alt="Cine-One" style={{ marginBottom: '1em' }} />
                                    <img src="image/hiflix.png" alt="hiflix" style={{ marginBottom: '1em' }} />
                                </div>
                            </div>
                            <div className="line-4">
                                <h4>Follow Us</h4>
                                <ul>
                                    <li>
                                        <img src="image/logo/logo facebook.svg" alt="facebook" /><span>Tickitz Cinema id</span>
                                    </li>
                                    <li>
                                        <img src="image/logo/logo Instagram.svg" alt="instagram" /><span>tickitz.id</span>
                                    </li>
                                    <li><img src="image/logo/logo twitter.svg" alt="twitter" /><span>tickitz.id</span></li>
                                    <li>
                                        <img src="image/logo/logo youtube.svg" alt="youtube" /><span>Tickitz Cinema id</span>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <div className="footer-bottom">
                            <p style={{ textAlign: 'center' }}>© 2020 Tickitz. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default viewAll;