import { Navigation } from "../components/Navigation";
import Image from "next/image";
import WeddingFrame from "../components/WeddingFrame";
import WeddingHeading from "../components/WeddingHeading";


export default function About() {

    return (
            <>
            <main>
            <Navigation />

            <WeddingFrame className="flex items-start mt-20 text-white text-xl">

              
                <div className="max-w-2xl text-left">

                        <WeddingHeading variant="sub" className="text-3xl font-bold mb-6 text-center">
                          <h2>About Mr and Mrs Jones Duo</h2>
                        </WeddingHeading>
                  
                    <p className="mb-6">
                        Sarah and Ben met in 2018 when they were matched as a duo for a P&O ferry gig. It was during that gig they became a couple, and have been together ever since professionally and otherwise! They spent many years performing on various cruise ships around the world, including working for companies such as P&O, NCL and MSC. They retired from the cruise industry in January 2025, and have recently been performing at various venues and events throughout the UK. They are now based in Suffolk and have very quickly become a popular act in the area.
                    </p>
                    <p className="mb-6">
                        Their repertoire blends classic and contemporary songs, and thanks to their extensive experience as a country act on NCL, they have an excellent selection of country tunes in their setlist. Their sound is best described as organic, as they pride themselves on creating a full, rich sound without relying on technology such as backing tracks or loops. Their instrumentation typically includes two acoustic guitars (sometimes just one, depending on the song), two vocals, and a stomp box.
                    </p>
                    <p>
                        Sarah’s gentle voice carries a timbre reminiscent of Emmy Lou Harris or Karen Carpenter, while Ben’s guitar style is influenced by artists like Tommy Emmanuel, James Taylor, and Adam Rafferty. He specializes in fingerstyle playing, allowing him to perform multiple parts simultaneously. This combination produces a surprisingly big sound for just two performers.
                    </p>
                </div>
                <div className="ml-12 mt-15">
                    <Image
                        src="/both_playing.jpg"
                        alt="Sarah and Ben playing together (lol)"
                        width={3694}
                        height={2368}
                        className="rounded-lg shadow-lg object-cover"
                    />
                </div>
            </WeddingFrame>


        <WeddingHeading variant="sub" className="text-4xl font-bold mb-6 text-center text-white mt-20">
          <h2>What We Offer</h2>
        </WeddingHeading>

             <WeddingFrame className="flex items-start mt-20 text-white text-xl">
                

                   <div className="max-w-2xl text-left">
                    <WeddingHeading variant="sub" className="text-white text-center text-4xl">
                      <h3>Wedding Package</h3>
                    </WeddingHeading>

                       
                    <p className="mb-6 text-2xl text-center">
                   
                     <br />For your wedding we offer a tailored package to suit your needs. It can consist of any of the following:


                      </p>
                        <ul className="list-disc text-white list-outside mb-6 text-xl ml-10">
                            <li>Pre-ceremony music</li>
                            <li>Background (DJ service) music from your own playlist or an appropriate one of our choice</li>
                            <li>Ceremony music</li>
                            <li>Drinks reception music</li>
                            <li>Wedding breakfast music</li>
                            <li>Evening entertainment</li>
                            <li>We can also learn requests, whether it&apos;s for your first dance or just a song that is special to you.</li>
                            <li>Due to our extensive repertoire and lack of reliance on technology, we can adapt our setlist on the fly, and usually take requests in the moment</li>

                            </ul>
                   
                </div>

                 <div className="ml-12 mt-0">
                    <Image
                        src="/WEDDING.jpg"
                        alt="Sarah and Ben playing together (lol)"
                        width={3694}
                        height={2368}
                        className="rounded-lg shadow-lg object-cover"
                    />
                </div>



            </WeddingFrame>

            </main>


</>





    )







}