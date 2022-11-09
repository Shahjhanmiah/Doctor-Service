import React from 'react';

const Blog = () => {
  return (
    <div>


      <p class="mb-3 font-light text-gray-500 dark:text-gray-400">
        <h1 className='text-3xl'>Difference between SQL and NoSQL</h1>
        <p className='text-2xl text-green-300'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
       </p>
      
      <p class="mb-3 font-light text-gray-500 dark:text-gray-400">
        <h1 className='text-3xl'>What is JWT, and how does it work?</h1>
        <p className='text-2xl text-red-600'>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
       </p>
      <p class="mb-3 font-light text-gray-500 dark:text-gray-400">
        <h1 className='text-3xl'>What is the difference between javascript and NodeJS?</h1>
        <p className='text-2xl text-orange-500'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language..</p>
       </p>
      <p class="mb-3 font-light text-gray-500 dark:text-gray-400">
        <h1 className='text-3xl'>How does NodeJS handle multiple requests at the same time?</h1>
        <p className='text-2xl text-green-600'>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them..</p>
       </p>
      


    </div>
  );
};

export default Blog;