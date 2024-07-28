// 'use client'
// import React, { useState } from 'react'

// const Page = () => {
//   const [title, setTitle] = useState("")
//   const [desc, setDesc] = useState("")
//   const [comment, setComment] = useState("")
//   const [mainTask, setMainTask] = useState([])

//   // Use to add the task
//   const submitHandler = (e) => {
//     e.preventDefault()
//     setMainTask([...mainTask, { title, desc, comments: [], completed: false }])
//     setDesc("")
//     setTitle("")
//     console.log(mainTask)
//   }

//   // Use to delete the task
//   const deleteHandler = (i) => {
//     let tempTask = [...mainTask]
//     tempTask.splice(i, 1)
//     setMainTask(tempTask)
//   }

//   // Use to add a comment to a task
//   const addCommentHandler = (i) => {
//     let tempTask = [...mainTask]
//     tempTask[i].comments.push(comment)
//     setMainTask(tempTask)
//     setComment("")
//   }

//   // Use to mark a task as completed
//   const completeHandler = (i) => {
//     let tempTask = [...mainTask]
//     tempTask[i].completed =!tempTask[i].completed
//     setMainTask(tempTask)
//   }

//   let renderTask = <h2>No Task Available</h2>
//   if (mainTask.length > 0) {
//     renderTask = mainTask.map((task, index) => {
//       return (
//         <li key={index} className='p-2 border-2 px-4 py-2 m-5 border-zinc-800  text-center'>
//           <div className='text-2xl'>
//             <h3 className='font-bold'>{task.title}</h3>
//             <p>{task.desc}</p>
//           </div>

//           <input
//             type="checkbox"
//             checked={task.completed}
//             onChange={() => completeHandler(index)}
//           /> Completed

//           <button
//             onClick={() => {
//               deleteHandler(index)
//             }}
//             className='bg-red-500  rounded text-white m-2 p-1 text-1xl'>
//             Delete
//           </button>

//           <div>
//             <input
//               type="text"
//               placeholder='Enter your comment'
//               className='p-2 border-2 px-4 py-2 m-5 border-zinc-800 text-2xl text-center'
//               value={comment}
//               onChange={(e) => {
//                 setComment(e.target.value)
//               }}
//             />
//             <button
//               onClick={() => {
//                 addCommentHandler(index)
//               }}
//               className='bg-green-500  rounded text-white m-2 p-1 text-1xl'>
//               Add Comment
//             </button>
//           </div>

//           <div>
//             <h4>Comments:</h4>
//             <ul>
//               {task.comments.map((comment, i) => (
//                 <li key={i}>{comment}</li>
//               ))}
//             </ul>
//           </div>
//         </li>
//       )
//     })
//   }

//   return (
//     <>
//       <h1 className='bg-black text-white p-5 text-5xl text-center font-bold'>Aayush's Todo List</h1>

//       <form onSubmit={submitHandler}>
//         <input
//           type="text"
//           placeholder='Enter your title'
//           className='p-2 border-2 px-4 py-2 m-5 border-zinc-800 text-2xl text-center'
//           value={title}
//           onChange={(e) => {
//             setTitle(e.target.value)
//           }}
//         />

//         <input
//           type="text"
//           placeholder='Enter Description here'
//           className='p-2 border-2 px-4 py-2 m-5 border-zinc-800 text-2xl text-center'
//           value={desc}
//           onChange={(e) => {
//             setDesc(e.target.value)
//           }}
//         />

//         <button
//           className='p-2 border-2 px-4 py-2 m-5 border-zinc-800 text-2xl bg-black text-white font-bold rounded'>
//           Add Task
//         </button>
//       </form>
//       <hr />
//       <div className='p-8 bg-slate-200'>
//         <ul>
//           {renderTask}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default Page
'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [comment, setComment] = useState("")
  const [mainTask, setmainTask] = useState([])
//use to add the task
  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask,{title,desc, comments: []}])
    setdesc("")
    settitle("")
    console.log(mainTask)
  }
  //use to del the task
  const deleteHandler = (i) =>{
    let tempTask = [...mainTask]
    tempTask.splice(i,1)
    setmainTask(tempTask)
  }
  //use to add comment
  const commentHandler = (i) =>{
    let tempTask = [...mainTask]
    tempTask[i].comments.push(comment)
    setmainTask(tempTask)
    setComment("")
  }
  //add mark as complete
  const completeHandler = (i) => {
    let tempTask = [...mainTask]
    tempTask[i].isComplete = !tempTask[i].isComplete
    setmainTask(tempTask)
    
  }

  let renderTask= <h2>No Task Available</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map((task,index)=>{
      return (
        <li key={index} className='p-2 border-2 px-4 py-2 m-5 border-zinc-800  text-center'>
          <div className='text-2xl'>
          <h3 className='font-bold'>{task.title}</h3>
          <p>{task.desc}</p>
          </div>

          <div>
          
            <input
            type = "checkbox"
            checked={task.completed}
            onChange={()=>{
              completeHandler(index)
            }}>
            </input> Mark as complete
            
            </div>
            
            <div>
            <button
               onClick={()=>{
                 deleteHandler(index)
               }}     
                className='bg-red-500  rounded text-white m-2 p-1 text-1xl'>
                 Delete</button>
            
            <input
              type="text"
              placeholder='Enter your comment'
              className='p-1 border-2 px-4 py-2 ml-5 border-zinc-800 text-1xl text-center'
              value={comment}
              onChange={(e) => {
                setComment(e.target.value)
              }}
            />
            <button
              onClick={() => {
                commentHandler(index)
              }}
              className='bg-green-500  rounded text-white m-1 p-1 text-1xl'>
              Add Comment
            </button>

            
            
            

          </div> 

          <div>
            <h4>Comments:</h4>
            <ul>
              
                {task.comments.map((comment,i) =>(
                  <li key={i}>{comment}</li>
                ))}
              
            </ul>
          </div>
        </li>
      )
    })
  }
  return (
   <>
   <h1 className='bg-black text-white p-5 text-5xl text-center font-bold' >Aayush's Todo List</h1>

   <form onSubmit={submitHandler}>
    <input type="text" placeholder='Enter your title' 
    className='p-2 border-2 px-4 py-2 m-5 border-zinc-800 text-2xl text-center'
    value={title}
    onChange={(e)=>{
      settitle(e.target.value)
    }}></input>

    <input type="text" placeholder='Enter Description here' 
    className='p-2 border-2 px-4 py-2 m-5 border-zinc-800 text-2xl text-center'
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value)
    }}></input>

    

    <button 
    className='p-2 border-2 px-4 py-2 m-5 border-zinc-800 text-2xl bg-black
     text-white font-bold rounded'>Add Task</button>
   </form>
   <hr />
   <div className='p-8 bg-slate-200'>
    <ul>
      {renderTask}
    </ul>
   </div>
   </>
  )
}

export default page