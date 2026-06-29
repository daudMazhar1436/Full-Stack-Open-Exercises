const App = () => {
  const course = 'Half Stack application development'
  const parts = 
  [
    {
      name: 'Fundamentals of React',
      exercise: 10
    },

    {
      name: 'Using props to pass data',
      exercise: 7
    },

    {
      name: 'State of a component',
      exercise: 14
    }
  ]

  return (
    <div>
      <Header courseName =  {course}/>
      <Content parts = {parts}/>
      <Total parts = {parts}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return(
  <h1>{props.courseName}</h1>)
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part parts = {props.parts[0]}/>
      <Part parts = {props.parts[1]}/>
      <Part parts = {props.parts[2]}/>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  console.log("in Part")
  return(
    <div>
      <p> {props.parts.name} {props.parts.exercise}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <p> Total Number of Exercises: {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
  )
}

export default App