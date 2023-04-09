import { useEffect } from 'react';
import '../index.css'
import ScrollReveal from 'scrollreveal';

function About() {
  useEffect(() => {
    ScrollReveal().reveal('.left-text', {
      delay: 400,
      duration: 600,
      origin: 'left',
      distance: '30px',
    });
  }, []);

  return (
     <>
      <div className="">
            <img
              src="src\Components\b-can.png"
              className=" h-auto w-auto"
              alt="App"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            />
           
            <div className="mx-8">
              <h5  className='font-bold text-pink-500 text-2xl'>Tools and Technology</h5>
          
              <p>
                We currently provide a tool powered by artifical intelligence which analyses hispathological image i.e.
                images of glass tissue slides under a microscope, here tissue samples from lymp nodes in order to detect
                breast cancer. We will be analysing tissues for:
                <br />
                <br />
                <strong>Invasive Ductal Carcinoma</strong>
                This is the most common subtype of all breast cancers. Almost 80% of diagnosed breast cancers are of this
                subtype.
                <br />
                <strong>Metastatic Cancer</strong>
                A metastatic cancer or metastatic tumor is one that has spread from the site where it started into
                different area/s of the body.
              </p>
              <button className='mt-4 px-2 py-2 bg-pink-500 rounded-md shadow-md'> Try it yourself</button>
               
            </div>
          </div>
      
      
       
    </>
  );
}

export default About;
