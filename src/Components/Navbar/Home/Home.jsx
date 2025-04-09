import React from 'react';
import user from '../../../assets/user.png';
import hero_img from '../../../assets/hero-img.png';
import web_Icon from '../../../assets/web-programming.png';
import mail from '../../../assets/mail.png';
import map from '../../../assets/pin.png';

const Home = () => {
    return (
        <div id="home" className="hero bg-base-200 min-h-screen ">
            <div className="hero-content justify-between gap-6 flex-col lg:flex-row-reverse w-11/12 mx-auto pb-20 border-b border-red-400">
                <img
                    src={hero_img}
                    alt="Hero"
                    className="rounded-lg shadow-xl bg-base-100 hover:transform hover:-translate-y-2 hover:duration-1000"
                />

                <div className="flex flex-col gap-3">
                    <div className="bg-base-100 shadow-xl rounded-xl hover:transform hover:-translate-y-2 hover:duration-1000 p-5">
                        <img src={user} alt="User" className="w-14 py-3" />
                        <h1 className="text-3xl md:text-5xl font-bold">
                            Hi, I am <span className="text-[#FF014F]">Bharat</span>
                        </h1>
                        <p className="py-6 font-semibold">
                            I am a web designer and developer and I work with web development around the world. I am
                            currently based in Bangladesh.
                        </p>
                        <div className="flex gap-2 text-sm items-center">
                            <img src={web_Icon} alt="Web Icon" className="w-6" />
                            <p>Web Designer & Developer</p>
                        </div>
                        <div className="flex gap-2 py-3 text-sm items-center">
                            <img src={mail} alt="Email" className="w-6" />
                            <p>bharatroy1005@gamil.com</p>
                        </div>
                        <div className="flex gap-2 text-sm items-center">
                            <img src={map} alt="Map" className="w-6" />
                            <p>
                                <a
                                    href="https://www.google.com/maps/place/Rangpur"
                                    className="hover:text-red-600"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Rangpur, Dhaka (Bangladesh)
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="py-5 bg-base-100 shadow-xl rounded-xl p-5 hover:transform hover:-translate-y-2 hover:duration-1000">
                        <h3 className="font-semibold text-sm">Download my Resume</h3>
                        <div className="flex gap-3 py-4">
                            <button className="flex gap-2 items-center py-2 px-3 border bg-[#394E6A] text-white border-gray-400 shadow-2xl">
                                Resume
                                <img src={map} alt="Download Icon" className="w-4" />
                            </button>
                            <button className="py-2 px-3 border bg-[#394E6A] text-white border-gray-400 shadow-2xl">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
