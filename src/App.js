/* eslint-disable*/
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [글제목, girl] = useState(['남자 코트 추천','고기국수 맛집 추천','국밥 맛집 추천']);
  let [like, plus] = useState(0); 
  
  

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
      
      let copy = [...글제목];
      copy[0] = '여자코트 추천';
      girl(copy);
      }}>글수정</button>

      <div className="list">
        <h4>
          { 글제목[0] }
          <span onClick={()=>{ plus(like+1) }}>❤️</span> {like}
          
        </h4>
        <p>2월 17일 방행</p>
      </div>
      <div className="list">
        <h4>
        { 글제목[1] } 
        </h4>
        <p>7월 07일 방행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>12월 12일 방행</p>
      </div>                  
    </div>
  );
}

export default App;
