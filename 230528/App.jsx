function Button({ props }) {
  return (
    <button
      onClick={props.onClick} // params안에 onClick안에 실행시키면num증가함수가 들어있다
      style={{
        width: "50px",
        height: "50px",
      }}
    >
      {props.children}
    </button>
  );
}
function HomePage() {
  const [num, setNum] = React.useState(0);
  // 1. num을 0으로 초기화해서 변수를 만들어준다.
  // 1-1. num은 바뀌면 화면도 같이 바뀌는 변수이다.
  // 2. 이때 "num=1" 형식으로 바꿀 수 없다.
  // 3. 그래서 num을 바꾸기 위해서 setNum이라는 함수를 사용해야한다.

  // 이것은 배열을 준다. 근데 배열 0번째에는 상태가 있고 1번째에는 상태를 바꿔주는 함수가 있다.
  //아래에 span 안의 여기 숫자 0 부분에서 0을 변수로 만들어주세요
  // 버튼에 클릭이 되었습니다 라고 로그가 찍히는 이벤트를 넣고싶습니다.
  // setNum((cur)=>cur+1) 이렇게 해도됨니다.
  // setNum은 num을 바꿔주고 화면에 새로 그려주세요~ 하는 함수

  const 실행시키면num증가 = () => {
    setNum(num + 1);
  };
  const 실행시키면num감소 = () => {
    setNum(num - 1);
  };
  // jsx안에서 값을 사용하고 싶으면 중괄호{}로 감싸라!
  // 함수도 값이다.
  return (
    <>
      <h1>숫자 카운터 만들기</h1>
      <span>여기 숫자 {num}</span>
      <Button onClick={실행시키면num증가}>+</Button>
      <Button onClick={실행시키면num증가}>-</Button>
    </>
  );
}

// HomePage.jsx
function HomePage() {
  const [num, setNum] = React.useState(0);

  // 원래는 Counter컴포넌트에서만 num이라는 state가 필요했다.
  // 그런데 그 상위에있는 Homepage에서 num라는 state가 필요해짐...
  // 상태 끌어올리기 언쩨씀???
  // 내가 전달해줄수없는 컴포넌트가 생겼을때 공통 부모에서 관리하도록 하고싶을때
  return (
    <>
      <h1>숫자 카운터 만들기</h1>
      <Counter num={num} setNum={setNum} />
      <div>{num * 2}</div>
    </>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HomePage />);
}

App();
