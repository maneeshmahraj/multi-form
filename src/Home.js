import { useState } from "react"

const Home = () => {
    const data=[
      {
        id:'name',
        label:'name',
        inputType:'text',
        button:'Next',
        placeholder:"your name..."
      },
      {
        id:'email',
        label:'email',
        inputType:'email',
        button:'Next',
        placeholder:"your email..."
      },
      {
        id:'dob',
        label:'DOB',
        inputType:'date',
        button:'Next',
        placeholder:""
      },
      {
        id:'password',
        label:'password',
        inputType:'password',
        button:'Submit',
        placeholder:"your password..."
      }
    ]
     const [formdata,setFormdata]=useState(data);
     const [index,setIndex]=useState(0) ;
     const [myformsD,setMyformsD]=useState({
      name:'',
      email:'',
      dob:'',
      password:''
     })
     const [formSubmited,setFormSubmited]=useState(false)
     const handlSubmit=(e)=>{
      e.preventDefault();
      if(index===formdata.length-1)
        {
          console.log("form summited!");
          setFormSubmited(true);
        }
        else{
          setIndex((idx)=>idx+1);

        }
     }
     const handleBackClick=(e)=>{  
      e.preventDefault();
      setIndex((idx)=>idx-1);

     }
     const handleInput=(e)=>{
        let id=e.target.id;
        let val=e.target.value;
        let copymyfrom={...myformsD};
        copymyfrom[id]=val;
        setMyformsD(copymyfrom);
     }
     console.log(myformsD);
  return(
   <>
  <div className="container">
    <h1 >Multistep Form!!</h1>
{  !formSubmited?  <form onSubmit={handlSubmit}>
    <div className="form-eliment">
      {
        index>0&&  <label><a href="/" onClick={handleBackClick}>Back</a></label> 
      }
        <br/>
            <label>{formdata[index].label}:</label>
      <input
        value={myformsD[formdata[index].id]}
        id={formdata[index].id}
        onChange={handleInput}
        type={formdata[index].inputType} 
      placeholder={formdata[index].placeholder}
      />
      <button>{formdata[index].button}</button>
        
    </div>
    </form>:
   <div>
    <h1>Success!!</h1>
     <hr/>
      <span>Name:{myformsD.name}</span>
      <br/>
      <span>Email:{myformsD.email}</span>
      <br/>
      <span>Password:{myformsD.password}</span>
      <br/>
      <span>DOB:{myformsD.dob}</span>
   
   </div>
}
  </div>
   </>
  )
}

export default Home;