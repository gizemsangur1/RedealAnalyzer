import React from 'react'

export default function ReButton(props) {
  return (
    <div>
        <button style={{ color: props.color ,backgroundColor:props.bgcolor,borderRadius:"35px",width:"195px",height:"50px"}}>
            {props.name}
        </button>
    </div>
  )
}
