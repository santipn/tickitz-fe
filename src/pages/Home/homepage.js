import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import '../../assets/css/style.css'
import './homepage.css'

export default function Homepage() {
    const [movieSchedule, setMovieSchedule] = useState([])
    useEffect(() => {
        axios({
          method: "GET",
          url: "http://localhost:3003/api/v1/movies",
        }).then((res) => {
          setMovieSchedule(res.data.data);
       console.log(res.data)
        }).catch((err)=> {
          console.log(err)
        })
      }, []);
    const Loading = () => {
        <div>Loading...</div>
    } 
    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 468,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }
    return (
        <React.Fragment>
            <div className="container">
                <nav>
                    <ul>
                        <div className="logo">
                            <Link to={"homepage.js"}><img src='../image/brandlogo.svg' alt="logo" /></Link>
                        </div>
                        <li><Link className="active" to="homepage.js">Home</Link></li>
                        <li><Link to={"/#"}>List Movies</Link></li>
                    </ul>
                    <button><Link to={"signUp.js"} className='btn-sign-up'>Sign Up</Link></button>
                </nav>
                <main>
                    <section>
                        <h4>
                            Nearest Cinema, Newest Movie<br /><span className='ncnm'>FIND OUT NOW!</span>
                        </h4>
                        <img src="../image/main section card/Main-Page-Card.png" alt="logo film utama" />
                    </section>
                </main>
                <div className="show-toogle">
                    <section>
                        <p><Link to={"/#"}>Now Showing</Link></p>
                        <p><Link to={"/#"}>view all</Link></p>
                    </section>
                    <ul>
                    <Slider {...setting}>   
                            {!movieSchedule.length ? (<Loading/>) : movieSchedule.map((movie, index)=> {
                                return (
                                <li>
                                    <div className="card-image">
                                        <img src={`${movie.cover}`} alt="card-1" />
                                        <div className='movie-detail'>
                                            <p>{movie.title} </p>
                                            <p>{movie.categories}</p>
                                            <button>Details</button>
                                        </div>
                                    </div>
                                </li>

                                )
                            })}
                           
                    </Slider>
                    </ul>
         
                    
                </div>
                <div className="upcoming-movies">
                    <section className='section-um'>
                        <p className='b'><Link to={"/#"}>Upcoming Movies</Link></p>
                        <p className='b'><Link to={"viewAll.js"}>view all</Link></p>
                    </section>
                    <div className="card-date">
                        <ul className='month'>
                            <li><button className='btn-lg'>September</button></li>
                            <li><button className='btn-lg'>October</button></li>
                            <li><button className='btn-lg'>November</button></li>
                            <li><button className='btn-lg'>Desember</button></li>
                            <li><button className='btn-lg'>January</button></li>
                            <li><button className='btn-lg'>February</button></li>
                            <li><button className='btn-lg'>March</button></li>
                            <li><button className='btn-lg'>April</button></li>
                            <li><button className='btn-lg'>May</button></li>
                        </ul>
                    </div>
                <div className="card-movie">
                    <ul>
                        <li>
                            <div className="card-image-um">
                                <img src="../image/main section card/Movie-Card-4.png" alt="card-1" />
                                <p>Black-Widow<br /><span>Action, Adventure, Sci-Fi</span></p>
                                <button>Details</button>
                            </div>
                        </li>
                        <li>
                            <div className="card-image-um">
                                <img src="../image/main section card/Movie-Card-5.png" alt="card-2" />
                                <p>
                                    The Witches <span><br />Adventure, Comedy, Family</span>
                                </p>
                                <button>Details</button>
                            </div>
                        </li>
                        <li>
                            <div className="card-image-um">
                                <img src="../image/main section card/Movie-Card-6.png" alt="card-3" />
                                <p>
                                    Tenet <span><br />Action, Sci-Fi</span>
                                </p>
                                <button>Details</button>
                            </div>
                        </li>
                        <li>
                            <div className="card-image-um">
                                <img src="../image/main section card/Movie-Card-4.png" alt="card-1" />
                                <p>Black-Widow<br /><span>Action, Adventure, Sci-Fi</span></p>
                                <button>Details</button>
                            </div>
                        </li>
                        <li>
                            <div className="card-image-um">
                                <img src="../image/main section card/Movie-Card-5.png" alt="card-2" />
                                <p>
                                    The Witches <span><br />Adventure, Comedy, Family</span>
                                </p>
                                <button>Details</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
                <div className="subscribe">
                    <h2>Be the Vanguard of</h2>
                    <h1>MovieGoers</h1>
                    <div className="input-subscribe">
                        <input className='input-email' type="e-mail" name="Subscribe" placeholder="Type your e-mail" id="" />
                        <button className='btn-subscribe'>Join Now!</button>
                    </div>
                    <p className='join-member'>
                        By joining you as a Tickitz member,<br />we will always send you the latest updates via
                        email .
                    </p>
                </div>
                <footer>
                    <div className="line-1">
                        <Link to={"/#"}><img src="../image/brandlogo.svg" alt="logo" /></Link>
                        <p>Stop waiting in line. Buy tickets <br />conveniently, watch movies quietly.</p>
                    </div>
                    <div className="line-2">
                        <h3>Explore</h3>
                        <div className="list">
                            <h4><Link to={"/#"}>Home</Link></h4>
                            <h4><Link to={"/#"}>List Movie</Link></h4>
                        </div>
                    </div>
                    <div className="line-3">
                        <h4>Our Sponsor</h4>
                        <div className="list">
                            <img src="../image/ebv.id.png" alt="ebv.id" className='imgCinema' />
                            <img src="../image/CineOne21.png" alt="Cine-One" className='imgCinema' />
                            <img src="../image/hiflix.png" alt="hiflix" className='imgCinema' />
                        </div>
                    </div>
                    <div className="line-4">
                        <h4>Follow Us</h4>
                        <ul className='sosmed-wrap'>
                            <li>
                                <img src="../image/logo/logo facebook.svg" className='sosmed' alt="facebook" />
                                <span>
                                    Tickitz Cinema id
                                </span>
                            </li>
                            <li>
                                <img src="../image/logo/logo Instagram.svg" className='sosmed' alt="instagram" /><span>tickitz.id</span>
                            </li>
                            <li><img src="../image/logo/logo twitter.svg" className='sosmed' alt="twitter" /><span>tickitz.id</span></li>
                            <li>
                                <img src="../image/logo/logo youtube.svg" className='sosmed' alt="youtube" /><span>Tickitz Cinema id</span>
                            </li>
                        </ul>
                    </div>
                </footer>
                <div className="footer-bottom">
                    <p className='footer-p'>© 2020 Tickitz. All Rights Reserved.</p>
                </div>
            </div>
        </React.Fragment>
    )
}
