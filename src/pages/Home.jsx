import WebCarousel from "../components/WebCarousel";

export default function Home() {
    return (
        <div id="home">

            <div className="flex flex-col mx-8 items-center justify-center py-10">
                <img className="w-96 m-10" src="study-literature.png" alt="" />
                <h1 id="main-title" className="text-4xl">DYPIU Readers Club</h1>
                <p id="quote" className="text-2xl my-3 text-center">
                    Social Library,
                    Build To Give Life To Your Completed Books
                    And Providing You A New Set
                </p>
            </div>

            <WebCarousel />

        </div>
    )
}
