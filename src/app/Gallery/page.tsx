import { Navigation } from "../components/Navigation";
import { GalleryComponent } from "../components/GalleryComponent";

export default function Gallery() {
    const images = [
        "/gallery/img1.jpg",
        "/gallery/img2.jpg",
        "/gallery/img3.jpg",
        "/gallery/img4.jpg",
        "/gallery/img5.jpg",
        "/gallery/img6.jpg",
        "/gallery/img7.jpg",
        "/gallery/img8.jpg",
        "/gallery/img9.jpg",
        "/gallery/img10.jpg",
        "/gallery/img11.jpg",
        "/gallery/img12.jpg",
    ];

    return (
        <>
            <Navigation />
            <main>
                <GalleryComponent images={images} />
            </main>
            <footer className="bg-black text-white p-4 text-center">
                <p>&copy; {new Date().getFullYear()} Sarah and Ben Duo. All rights reserved. Photography by Andy Ingram Photography and Videography and Mark Holmes Photography</p>
            </footer>
        </>
    );
}