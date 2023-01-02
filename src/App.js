import logo from './logo.svg';
import './App.css';

function App() {

  const users =[
    { name: "Naraa" , age: 15 , imageUrl:"https://media.istockphoto.com/id/1329622588/photo/portrait-beautiful-young-woman-with-clean-fresh-skin.jpg?b=1&s=170667a&w=0&k=20&c=mpVB0vaOZS3JR73oaVwfoouWC9jHm38dN5ddqd2V5Dk=" } ,
    { name: "Saraa" , age: 20 , imageUrl:"https://media.istockphoto.com/id/1369567653/photo/thoughtful-serious-african-american-teen-girl-face-portrait.jpg?b=1&s=170667a&w=0&k=20&c=BSJgtAV6TQ7lysuk5_s1lk6kUAZIjzgxZx6XY80oCNQ="  } ,
    { name: "Bold" , age: 25 , imageUrl:"https://media.istockphoto.com/id/1349257948/photo/portrait-of-african-american-girl-on-blue.jpg?b=1&s=170667a&w=0&k=20&c=W-aBAG9M7YwnVk3HKL2QuAPa619EPKXOkKkG7LqsTUg="  } ,
    { name: "Tsetsegee" , age: 19 , imageUrl:"https://images.unsplash.com/photo-1552954277-0c45bd503b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8&w=1000&q=80"  } ,
    { name: "Bata" , age: 12 , imageUrl:"https://images.unsplash.com/photo-1494354145959-25cb82edf23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybCUyMGJlYXV0aWZ1bHxlbnwwfHwwfHw%3D&w=1000&q=80"  } ,
  ];
  let sum = 0;
  let i = 0;
  
  while( i <users.length){
    sum+= users[i].age;
    i++;
  };
  let dundaj =sum/5;
  return (
    <div className="App">
     <p>Avg:{dundaj}</p>
    <div className="users">
    <div className='user'>
     <h2>Name:{users[0].name}</h2>
     <p>Age:{users[0].age}</p>
     <img src={users[0].imageUrl} alt="" />
     </div>
     <div className='user'>
     <h2>Name:{users[1].name}</h2>
     <p>Age:{users[1].age}</p>
     <img src={users[1].imageUrl} alt="" />
     </div>
     <div className='user'>
     <h2>Name:{users[2].name}</h2>
     <p>Age:{users[2].age}</p>
     <img src={users[2].imageUrl} alt="" />
     </div>
     <div className='user'>
     <h2>Name:{users[3].name}</h2>
     <p>Age:{users[3].age}</p>
     <img src={users[3].imageUrl} alt="" />
     </div>
     <div className='user'>
     <h2>Name:{users[4].name}</h2>
     <p>Age:{users[4].age}</p>
     <img src={users[4].imageUrl} alt="" />
     </div>
    </div>
    </div>
  );
}

export default App;

