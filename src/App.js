// import React,{useState} from 'react'

// const App = () => {
//   const [data,setData]=useState({
//     username:" ",
//     email:" ",
//     password:" ",
//     confirmpassword:" ",

//   })
//   const {username,email,password,confirmpassword}=data
// const Handler=e=>{
//   setData({...data,[e.target.name]:e.target.name})
// }

// const submitHandler=e=>{
//   e.preventDefault();
//   console.log(data);
// } 
//   return (
//     <div>
//       <center>
//         <form autoComplete='off' onSubmit={submitHandler}>
//           <input type="text" name="username" value={username} onChange={Handler}/> <br/>
//           <input type="email" name="email" value={email} onChange={Handler}/> <br/>
//           <input type="password" name="password" value={password} onChange={Handler}/> <br/>
//           <input type="password" name="confirmpassword" value={confirmpassword} onChange={Handler}/><br/>
//           <input type="submit" name="submit"/>

//         </form>
//       </center>
//     </div>
//   )
// }

// export default App
import React,{ useState} from 'react'
import  "./App.css"

const App = () => {
  const [input,setInput]=useState("")
  const [result,setResult]=useState(0)
  const handler=e=>{
    setInput(e.target.value);
  }
  return (
    <div>
      <center>
        <input type="text" value={input} name="input" onChange={handler}/>
        <br/>
        <button onClick={()=>setResult(eval(input))}> Result</button>
        <h4>Result is {result}</h4>

        <button onClick={()=>setInput(input+"1")}>1</button>
        <button onClick={()=>setInput(input+"1")}>2</button>
        <button onClick={()=>setInput(input+"1")}>3</button>
        <button onClick={()=>setInput(input+"1")}>4</button>
        <button onClick={()=>setInput(input+"1")}>5</button> <br/>
        <button onClick={()=>setInput(input+"1")}>6</button>
        <button onClick={()=>setInput(input+"1")}>7</button>
        <button onClick={()=>setInput(input+"1")}>8</button>
        <button onClick={()=>setInput(input+"1")}>9</button>
        <button onClick={()=>setInput(input+"1")}>10</button><br/>

        <button onClick={()=>setInput(input+"+")}>+</button>
        <button onClick={()=>setInput(input+"-")}>-</button>
        <button onClick={()=>setInput(input+"*")}>*</button>
        <button onClick={()=>setInput(input+"/")}>/</button>
      </center>
    </div>
  )
}

export default App

