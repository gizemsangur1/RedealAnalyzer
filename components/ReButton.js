import React from 'react'

export default function ReButton(props) {
  return (
    <div>
        <button style={{ color: "white" ,backgroundColor:"#5663da",borderRadius:"35px",width:"195px",height:"50px"}}>
            {props.name}
        </button>
    </div>
  )
}
