import { useState, useRef, useEffect} from "react";


export default function App() {
  const [inp, setInp] = useState("");
   const[err, setErr]=useState("");
  const ThrottleRef = useRef(0);
  const socketRef=useRef(null);

useEffect(()=>{
socketRef.current= new WebSocket('ws://localhost:8080');

socketRef.current.onmessage= async(event)=>{
  const text = await new Response(event.data).text();
   if(text==="Error"){setErr(text); setTimeout(()=>setErr(""),500); return;}
  setInp(text);
};
socketRef.current.onclose=()=>{
  console.log('Websocket connection closed');
};

return ()=>{
  if(socketRef.current){
    socketRef.current.close();
  }
};
},[]);


  function handleChange(e) {
    if (ThrottleRef.current === 0) {
      ThrottleRef.current = 1;
      setTimeout(() => {
        socketRef.current.send(e.target.value);
        ThrottleRef.current = 0;
      }, 1500);
    }
  }

  return (<>
   <h2>MarkDown Editor</h2>
  
    <div className="App">
    <h4> Markdown Input Box</h4>
      <div className="inp-div" >
      <textarea className="text1" onChange={handleChange} autoFocus>
        {" "}
      </textarea>
      </div>
      {inp && (<><h4>Converted HTML Box</h4>
        {err && <p>{err}</p>}
        <div className="output" dangerouslySetInnerHTML={{ __html: inp }}></div>
        </>)}
    </div>
    </>
  );
}
