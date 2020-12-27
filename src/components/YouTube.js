import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function YouTube() {
    const [youtubeData, setYouTubeData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "youtube"]{
            title,
            date,
            source,
            description,
            link,
            tags
        }`).then((data) =>setYouTubeData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">YouTube Videos</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Do enjoy my YouTube videos!!</h2>
                <section className="grid grid-cols-2 gap-8">
                    {youtubeData && youtubeData.map((youtube, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a href={youtube.link} alt={youtube.title} target="_blank" rel="noopener noreferrer">{youtube.title}</a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Posted on</strong>:{" "}
                                {new Date(youtube.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">{youtube.source}</strong>
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">{youtube.description}</p>
                            <a href={youtube.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400">
                                View The Video{" "}
                                <span role="img" aria-label="right pointer">👉</span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}