import React from 'react';
import './test04.css';

class TestReact04 extends React.Component{
    componentDidMount(){
        const liList=document.querySelectorAll('.controller li');
        const pictureLi=document.querySelectorAll('.picture li');

        for(let i=0; i<liList.length; i++){
            liList[i].index=i;

            liList[i].onclick =(e)=>{
                let n = e.currentTarget.index //현재 onclick된 liList
                for(let j=0; j<liList.length;j++){ //비교하기위해 반복 설정
                    if(j===n){
                        liList[j].classList.add("on");
                        pictureLi[j].classList.add("active");
                    }else{
                        liList[j].classList.remove("on");
                        pictureLi[j].classList.remove("active");
                    }
                }
            }
        }

    }


    render(){
        return(
        <div>
            <div style={{backgroundColor:'#ccc'}}>
                <h1>갤러리</h1>
                <div className='containers'>
                    <ul className="controller">
                        <li className='on'></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>

                    </ul>
                    <div className='picture'>
                        <ul>
                            <li className='active'><img src='/images/work1.jpg' alt=''/></li>
                            <li><img src='/images/work2.jpg' alt=''/></li>
                            <li><img src='/images/work3.jpg' alt=''/></li>
                            <li><img src='/images/work4.jpg' alt=''/></li>
                            <li><img src='/images/work5.jpg' alt=''/></li>
                            <li><img src='/images/work6.jpg' alt=''/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default TestReact04;

