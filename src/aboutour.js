import React from 'react'
import image1 from './pexels-jean-van-der-meulen-1543417.jpg'
import image2 from './pexels-helena-lopes-1774879.jpg'

const about = () => {
    return (
        <div className="">
            <div className="topic-about-div">
                  <div className="topic-div">
                     WILDLIFE PLACES WORLWIDE

                 </div>
                 
              <div className="about-div">
                    Take a train ride through our Safari Park for the ultimate experience!
                   It is the view of many tourist that wild animals are the ultimate expression of life.
                   Features dozens of species from North and South Nigeria as well as several exciting rides. 
                   Some animals include bison, black bear, cougars, bobcats, tapirs and deer. 
                    You’ll be amazed! This exciting display of animal exhibits features giant ectotherms – reptiles
                      that use their environments to control their body temperatures.
                  Here you will many beautiful wildlife zoo in Nigeria. You will thrilled to visit the site of wildlife 
                   beauty both legendary plants and long lost animals.Wildlife World Zoo, Aquarium &
                 Safari Park has Arizona’s largest collection of exotic and endangered animals, 
                   with more than 600 separate species, rides, a petting zoo and daily shows!

             </div>
          </div>

        <div className="news-update-div">
            <div className="newstopic-div">
                NEWS AND UPDATE
            </div>
            <div className="image1-div">
                <img src={image1} alt="owl" className="col-s-6 image1" />
                <div className="col-5 col-s-5 news1-div">
                    <div className="link1-a">
                    <a href="" className="link-a">AN OWL IS NOW  RECOGNISED AS THE FASTEST BIRD</a>
                    </div>
                    <div className="about-owl">
                    Here are certain amazing things about Owls; we feel you should know about:
                    </div>
                    <div className="amazing-owls">                        
                        While most Owls are nocturnal, not all Owls are. Some owls actually
                        prefer to fly during the day rather than taking the night train. I kow you will be
                        this amazing things about <a className="readmore1">Read more...</a>
                    </div>
                    
                </div>
            </div>
            <div className=" image2-div">
                <img src={image2} alt="parrot"className="col-s-6 image2" />
                <div className="col-5 col-s-5 news2-div">
                    <div className="link1-b">
                        <a href="" className="link-b"> A PARROT CAN SPEAK IN ITS LANGAUAGE FASTER THAN HUMAN SPEAK</a>
                   </div>
                   <div className="about-parrot">
                       Here are amazing and beautiful things about parrot; which you ought to have know brfore the explore
                   </div>
                   <div className="amazing-parrots">
                   Parrots talk by modifying the air that flows over the syrinx to make sounds. The syrinx is located where the trachea splits into the lungs.

                    Parrots, particularly African Greys and members of the Amazon family are particularly good at imitating human words and sounds.

                    When I consider that a parrot has no lips or teeth the fact that both my Greys can imitate the timbre of my friend voice never fails to amaze me.
                    They speak as fast as humans can speak. <a href="" className="readmore2">Read more...</a>
                   </div>
                </div>
            </div>


        </div>

        </div>
    )
}

export default about
