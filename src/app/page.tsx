
import Image from "next/image";
import Rectangle from "@/public/Rectangle.png"
import Frame8 from "@/public/Frame8.png"
import Frame9 from "@/public/Frame9.png"
import Date from "@/public/date.png"
import Rectangle8 from "@/public/Rectangle8.png"
import Rectangle9 from "@/public/Rectangle9.png"
import Rectangle10 from "@/public/Rectangle10.png"
import One from "@/public/One.png"
import Two from "@/public/Two.png"
import project1 from "@/public/project1.png"
import project2 from "@/public/project2.png"  
import project3 from "@/public/project3.png"  
import project4 from "@/public/project4.png"  
import project5 from "@/public/project5.png"  
import contactimg from "@/public/contactimg.png"


export default function Home() {
  return (
    <div>
<div className="main">
     
     <div className="left-container">
<h1>PROJECT</h1>
<h2>Lorum</h2>
     
     <div className="frame">
     <Image
        src={Frame8} 
        alt="logo"
        height={53} 
        width={52 } 
      />
      <Image
        src={Frame9} 
        alt="logo"
        height={53} 
        width={52 } 
      />
     </div>
     
     <div className="date">
     <Image
        src={Date} 
        alt="logo"
        height={53} 
        width={141 } 
      />
     </div>
     </div>
      <div className="right-container">
      <Image className="home-image"
        src={Rectangle} 
        alt="logo"
        height={829} 
        width={770} 
      />
      </div>
      </div>





<div className="about-page">
<div>
<Image className="Rectangle8"
 src={Rectangle8}
  alt="picture2"
  height={265} 
  width={270 }
   />
<Image className="Rectangle10"
 src={Rectangle10}  
 alt="picture4" 
 height={140} 
  width={270 }
 />
  </div>
<div>
 <Image
 className="Rectangle9"
 src={Rectangle9} 
  alt="picture3"
  height={190} 
  width={270} />
 </div>
<div className="text">
<h3 className="about-heading">About</h3>
<p className="About-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
   remaining essentially unchanged.</p>

   <button className="readmore"> Read More → </button></div>
    </div>  





     
     
    <div className="box-statement">
      <div> <h3> Main Focus/Mission Statement</h3> </div>

      <div className="two-statement">
        <div className="statement-1">
          <div>
            
            <Image className="One"
          src={One} 
          alt="logo"
          height={240} 
          width={190}
          />

          </div>

          <div className="statement-text1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p></div>
            </div>

            <div className="statement-2">
              <div>
                <Image className="Two"
                src={Two} 
                alt="logo"
                height={200} 
                width={290 }
                />
                
                </div>
              <div className="statement-text2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>

           </div>

            </div>
            </div>
    </div>





<div className="main-project">
 <div><h3>Our Projects</h3></div>


 <div className="box-1">

      <Image className="image-1"
                src={project1} 
                alt="logo"
                height={255} 
                width={570}
                />


      <Image className="image-2"
                src={project2} 
                alt="logo"
                height={255} 
                width={570}
                />


 </div>


 <div className="box-2">
   
 <Image className="image-3"
                src={project3} 
                alt="logo"
                height={255} 
                width={270}
                />


<Image className="image-4"
                src={project4} 
                alt="logo"
                height={255} 
                width={470}
                />


<Image  className="image-5"
                src={project5} 
                alt="logo"
                height={255} 
                width={370}
                />


 </div>

 <div  className="project-button"><button>ALL PROJECTS → </button>
</div>

</div>
   




<div className="contact-container">
      <div className="form">
        <h3>Contact Us</h3>
        <form>
          <input type="text" placeholder="Name" className="contact-form" required />
          <input type="number" placeholder="Phone Number" className="contact-form" required />
          <input type="email" placeholder="Email*" className="contact-form" required />
          <input type="text" placeholder="Interested In" className="contact-form" required />
          <textarea placeholder="Message*" className="contact-form-message" required />
        </form>
      </div>
      <div className="cont-pic">
        <Image
          className="contact-image"
          src={contactimg}
          alt="Contact Us Image"
          height={409}
          width={859}
        />
      </div>
     
</div>
<div className=" button"><button>SEND EMAIL → </button>




</div>

















































    </div>
  );
}
