import 'bootstrap/dist/css/bootstrap.css'
// import { Profile } from "./Profile";
// export default function Bio() {
//   const person ={
//     sci_name : "Elon musk" ,
//     ul_theme : {padding: '10px', borderRadius: '7px' , backgroundColor: '#000', color: '#fff'}
//   }
//   return (
//     <div className="container d-flex flex-column">
//       <div class="intro">
//         <h1 style={{ color: 'rgb(0, 105, 255)', fontWeight: '200' }}>Welcome to my website!</h1>
//       </div>
//       <p class="summary">
//         You can find my thoughts here.
//         <br />
//         <br />
//         <b>And <i>pictures</i></b> of scientist which name
//         is <strong>{person.sci_name}</strong>
//       </p>
//       <Profile />
//       <ul style={person.ul_theme} >
//         <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
//         <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
//         <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
//       </ul>
//     </div>
//   );
// }


// const person = {
//   baseUrl : 'https://i.imgur.com/',
//   name: 'Gregorio Y. Zara',
//   imageId: '7vQD0fP',
//   imageSize: 's',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src={ person.baseUrl + person.imageId + person.imageSize +".jpg"}
//         alt={person.name}
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }



// function Avatar({ person, size }) {
//   return (
//     <img
//       className="object-fit-cover"
//       src="majnu-painting.jpeg"
//       alt={person.name}
//       width={size}
//       style={{ "height": "100%" }}
//     />

//   );
// }



// here avatar is parent comp and profile is child comp we are
// passing prop from parent comp to child comp  
// now we passing two prop first is person(an object) second is size(a number) 
// export default function Profile() {
//   return (
//     <div className='pt-5'>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-4">
//             <div className="text-center">
//               <Avatar
//                 person={{ name: 'majnu-bhai' }}
//                 size={100}
//                 kharcha={10000}
//               />
//             </div>
//           </div>
//           <div className="col-lg-12">
//             <div className="text-center">
//               <h1>10</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// // Conditionally returning
import { Item } from './condition'
export default function ItemList() {
  return (
    <ul>
      <Item itemName='shirt' isPacked={true} colorStyle = {{color : 'green'}} />
      <Item itemName='jacket' isPacked={true} colorStyle = {{color : 'green'}} />      
      <Item itemName='jeans' isPacked={false} colorStyle = {{color: 'red'}} />

    </ul>
  )
}
// In this case, the prop isPacked is assigned a value of true. 
// This means that the Item component will receive a prop named isPacked,
//  and its value will be true.
// // Conditionally returning