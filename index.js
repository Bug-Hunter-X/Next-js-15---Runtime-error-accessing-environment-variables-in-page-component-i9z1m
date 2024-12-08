```javascript
// pages/about.js
import {getServerSideProps} from 'next';

export default function About({myVar}) {
  console.log(myVar);
  return (
    <div>
      <h1>About Page</h1>
      <p>My variable is: {myVar}</p>
    </div>
  );
}

export async function getServerSideProps(){
  return {
    props: {
      myVar: process.env.MY_VAR,
    }
  }
}
```