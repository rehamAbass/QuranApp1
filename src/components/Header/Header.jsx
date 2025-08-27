
import './Header.css'
import React from 'react';
import "@fontsource/aref-ruqaa";

const Header = () => {

    return (
        <header
            className="headerMarq"
        >

            <div>
                <div>
                    <p dir="rtl" className="span1">
                        <span>
                            أسأل المولى العظيم أن ينفع بهذا الموقع الإسلام والمسلمين
                        </span>
                    </p>
                    <p dir="rtl" className="span1">
                        <span>
                            وأن يكون خالصاً لوجهه الكريم
                        </span>
                    </p>
                    <p dir="rtl" className="span1">
                        <span >
                            وأن يكون صدقة بر أقدمها لأولياء الله الصالحين وأتباعهم
                        </span>
                    </p>
                    <p dir="rtl" className="span1">
                        <span>
                            لا تنسوني أنا الفقيره إليه من صالح دعائكم
                        </span>
                    </p>
                </div>


                {/*    <marquee direction='left' loop='2' className="span1"> Developed by
                 <a
                    href="https://www.linkedin.com/in/rehamAbass/"
                    target='_blank'
                >  Dev.Reham Abass &copy; 2024
                  </a>
                </marquee> */}


                <p className="span1">
                    <span>
                        Developed by Dev.Reham Abass &copy; 2025
                    </span>
                    <span>  رهام عباس  </span>
                </p>

                <p dir="ltr" className="span1">
                    <span>
                        soft.rehamabass@gmail.com
                    </span>
                </p>
            </div>

        </header>
    )
}


export default Header;

