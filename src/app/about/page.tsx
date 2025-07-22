
import { Navigation } from "../components/Navigation";
import Image from "next/image";


export default function About() {

    return (
            <>
            <main>
            <Navigation />

            <section className="flex items-start mt-20 p-8 text-white text-xl">
                <div className="max-w-2xl text-left">
                    <h2 className="text-3xl font-bold mb-6 text-center">About Mr and Mrs Jones Duo</h2>
                    <p className="mb-6">
                        Mr and Mrs Jones met in 2018 and were put together as a duo for a P&O ferry gig. It was during that gig they became a couple, and have been together ever since professionally and otherwise! They spent many years performing on various cruise ships around the world, including working for companies such as P&O, NCL and MSC. They retired from the cruise industry in January 2025, and have recently been performing at various venues and events throughout the UK. They are now based in Suffolk and have very quickly become a popular act in the area.
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
            </section>

            </main>


</>





    )







}