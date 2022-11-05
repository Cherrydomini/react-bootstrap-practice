import React, {Component} from "react";//need to extend the class with component
//yarn add react-slick
//npm install slick-carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

//export default class MainImg extends Component{
// ->하단에 export default MainImg생략하고 컴포넌트 선언부분에서 내보내기로 함께 선언

//클래스로 컴포넌트 선언
//1. import React, {component} from "react"; 상단
//2ㅣ class MainImg extends Component {
// render(){
//      return(
//          <div></div>
//              )
//          }
//export default MainImg;
class MainImg extends Component{
    render(){
        const settings ={
            dots: true, //이미지순서를 알려줌
            infinite: true, //loop 사용유뮤
            speed: 500, //지나가는 속도
            autoplay: true, //자동 실행 유뮤
            autoplaySpeed: 2000 , //자동실행되는 속도
            slidesToShow: 1, //한번에 볼여줄 슬라이으쇼의 갯수
            slidestoScroll: 1 //슬라이드로 넘심 갯수
        }


        return(
            <div>
                <Slider {...settings}>
                    <div>
                        <h3 style={{margin:'0', width:'100%', height: '300px', background:'orange'}}>1</h3>
                    </div>
                    <div>
                        <h3 style={{ margin:'0', width:'100%', height: '300px', background:'green'}}>2</h3>
                    </div>
                    <div>
                        <h3 style={{ margin:'0', width:'100%', height: '300px', background:'blue'}}>3</h3>
                    </div>
                    <div>
                        <h3 style={{margin:'0', width:'100%', height: '300px', background:'yellow'}}>4</h3>
                    </div>
                    <div>
                        <h3 style={{margin:'0', width:'100%', height: '300px', background:'rebeccapurple'}}>5</h3>
                    </div>

                </Slider>
            </div>
        )
    }
}
// function MainImg(){
//     return(
//         <div>
//             mainimg
//         </div>
//     )
// }

export default MainImg;