/* eslint-disable*/
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [글제목, girl] = useState(['남자 코트 추천','고기국수 맛집 추천','국밥 맛집 추천']);
  let [like, plus] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  
  

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      

      <button onClick={()=>{      
      let copy = [...글제목];
      copy.sort()
      girl(copy)
        }}>정렬</button>

      <button onClick={()=>{
      let copy = [...글제목];
      copy[0] = '여자코트 추천';
      girl(copy);      
      }}>글수정</button>

      
    {
      글제목.map((작명,i)=>{return(
        <div className="list" key={i}>
        <h4 onClick={()=>{setModal(!modal)}}>
          { 작명 }
          
          <span onClick={()=>{
            let copy = [...like]
            copy[i] = copy[i] +1
            plus(copy)
          }}>❤️</span> {like[i]}
        </h4>
        <p>2월 17일 방행</p>
      </div>)
            
        }
      )
    }

    {
        modal==true ? <Modal/> : null
      /* null은 비어있는 html용으로 자주 쓰임 */
      }
    </div>
  );
}

      

// 다른 function 바깥에 만들고, 영어 대문자
const Modal=()=>{
  return <div className="modal">
  <h4>제목</h4>
  <p>날짜</p>
  <p>상세내용</p>  
  </div>
}



export default App;
