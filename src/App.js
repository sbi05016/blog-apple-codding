/* eslint-disable*/
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [글제목, girl] = useState(['남자 코트 추천','고기국수 맛집 추천','국밥 맛집 추천']);
  let [like, plus] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [title,setTitle] = useState(0)
  let [inp,setInp] = useState('');
  
  

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
      글제목.map((작명,i)=>{
        return(
        <div className="list" key={i}>
          <h4 onClick={()=>{
            setModal(!modal);
            setTitle(i);
            }}>
            { 작명 }
                      
            <span onClick={(e)=>{ e. stopPropagation();
              let copy = [...like]
              copy[i] = copy[i] +1
              plus(copy)
              }}>❤️</span> {like[i]}
              <button onClick={(e)=>{e. stopPropagation();
                let copy = [...글제목]
                copy.splice(i,i+1)
                girl(copy)}}>삭제</button>
          </h4>
          <p>2월 17일 방행</p>
      </div>)        
        }
      )
    }

    <input onChange={(e)=>{setInp(e.target.value);}}></input>
    <button onClick={()=>{글제목.push(inp);like.push(0); console.log(글제목)}}>입력</button>
    

    
    

    
    {
        modal==true ? <Modal color='grey' i={title} 글제목 ={글제목} girl ={girl}/> : null
      /* null은 비어있는 html용으로 자주 쓰임 */
      }
    </div>
  );
}

      

// 다른 function 바깥에 만들고, 영어 대문자
const Modal=(props)=>{
  return <div className="modal" style={{background : props.color}}>
  <h4>{props.글제목[props.i]}</h4>
  <p>날짜</p>
  <p>상세내용</p>
  <button onClick={()=>{
    let copy = [...props.글제목]; 
    copy[0] = '여자 코트 추천';   
    props.girl(copy);
    }}>글수정</button>  
  </div>
}



export default App;
