import React, { useState, useEffect} from "react";
import sanityClient from "../client.js";
import logo from "../one-piece-logo.jpg";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if(!author) return <div>Loading...</div>;

    return (
        <main className="relative">
            <img src={logo} alt="OnePiece Logo" className="absolute w-full"/>
            <div className="p-10 lg:pt-4 container mx-auto relative">
                <section className="bg-green rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage)} className="object-scale-down rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name} />
                    <div className="text-lf flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">What's up? {" "}
                        <span className="text-green-100">{author.name}</span>{" "}
                        here!!!!
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId= "nf74srz0" dataset= "production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}