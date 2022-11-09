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
        <p className='text-2xl text-green-300'>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
       </p>
      


    </div>
  );
};

export default Blog;