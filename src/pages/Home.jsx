import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DataContext from "../context/context"

const Home = () => {
  const { data, setData } = useContext(DataContext)

  const [state, setState] = useState({ name: 'John', age: 30 });
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [inp, setInp] = useState()
  const navigate = useNavigate()


  const imageUrl = "https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"

  const handleData = () => {
    const data = "data from funtion for state"
    return data
  }

  // const [data, setData]=useState("Hello Data")
  //   const [data, setData] = useState(() => handleData())
  //   const numbers = [1, 3, 5, 7];

  // function addNumbers(a, b, c, d) {
  //   return a + b + c + d;
  // }

  // console.log(addNumbers(numbers));


  const updateAge = () => {
    // setState({ ...state, age: state.age + 1 });
    // setState({ ...state, name: state.name="rahul" });
    setArray([...array, 6]);
  };

  // const [data, setData] = useState([]);

  function chec() {
    fetch('https://dummyjson.com/products/1')
      .then(res => res.json())
      .then(data => setData(data));
  }

  // console.log("data", data)
  // useEffect(() => {
  //  console.log("Hello test dependency")
  // },[array]);

  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  const handleInput = (e) => {
    // setInp(e.target.value)
    setData(e.target.value)
  }

  // cleanup 
  const [wid, setWid] = useState()

  useEffect(() => {
    window.addEventListener("resize", updateWidth)
    console.log("mounted")
    return () => {
      console.log("unmounted")
      // window.removeEventListener("resize",updateWidth)
    }
  })

  const updateWidth = () => {
    setWid(window.innerWidth)
  }

  const handleRoute = () => {
    navigate("/about/1/5?dfgdf#dfg")
  }

  return (
    <div>
      <h1>Home Page</h1>
      {/* <p>State data: {data}</p> */}
      <button onClick={() => { updateAge() }}>Click</button>
      {/* <p>{state.name }{state.age }</p> */}
      <p>{array}</p>
      <input placeholder='text' type='text' onChange={(e) => { handleInput(e) }} />
      <p>Input data:{inp}</p>
      <img style={{ width: "250px" }} src={imageUrl} alt="" onClick={() => { handleRoute() }} />
      <p>{count}</p>
      <br />
      <button onClick={() => { navigate("/about") }}>Next page</button>
    </div>
  )
}

export default Home