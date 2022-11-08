import React from 'react';
import img1 from '../asserst/img/im6.svg'
import img2 from '../asserst/img/img1.svg'
import img3 from  '../asserst/img/img3.svg'
import img4 from '../asserst/img/img4.svg'
import img5 from '../asserst/img/img5.svg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-80 bg-slate-700 rounded-xl  my-5">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.collegedekhocdn.com/media/img/careers/doctor-clinic.jpg" className="w-full h-50" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/004/409/864/small/scientist-woman-in-lab-coat-holding-beaker-glass-analyzing-free-vector.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd3zCLb6TWXipl1SaxBvxCIA0tflkQQM2i7SMQKEdgf0-6nt_mE_ymoQIG583PgIbX1tM&usqp=CAU" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1191968415/vector/medical-form-medical-report-characters-clipboard-with-a-cross-pen-and-check-marks-informed.jpg?s=612x612&w=0&k=20&c=aw7dHmyCBs5almA" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src="https://lethbridgecollege.ca/sites/default/files/2021-05/Whittney-opt.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;