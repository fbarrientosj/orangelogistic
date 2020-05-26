import React from 'react';
import { Carousel } from 'antd';


const About = () => {

    return (
        <Carousel autoplay autoplaySpeed={1000}>
        <div>
          <h3>1</h3>
          <img src="https://jaidefinichon.com/wp-content/uploads/2020/05/101032611_586970661947873_7155209575749124096_o.png"></img>
        </div>
        <div>
          <h3>2</h3>
          <img src="https://jaidefinichon.com/wp-content/uploads/2020/05/98470264_2579424675644064_738100575178063872_n.png"></img>
        </div>
        <div>
          <h3>3</h3>
          <img src="https://jaidefinichon.com/wp-content/uploads/2020/05/100541693_3520915024660503_7018051624807432192_o.png"></img>
        </div>
        <div>
          <h3>4</h3>
          <img src="https://jaidefinichon.com/wp-content/uploads/2020/05/98581163_561975624750642_8750144418398339072_n.png"></img>
        </div>
      </Carousel>
    )};

export default About;
