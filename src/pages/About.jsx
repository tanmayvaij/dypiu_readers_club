import TeamCard from "../components/TeamCard";

export default function About() {
    return (
        <div id="About" className="px-8 mt-20">

            <div className="flex flex-wrap items-center min-h-[600px] justify-center">
                <div className="px-10 max-w-4xl ">
                    <h1 id="about-title" className="font-bold text-2xl">SO, ARE YOU INTRESTED TO KNOW WHO WE ARE ? AND WHY WE ARE DOING THIS???</h1>
                    <p className="text-lg my-3">
                        We are the students of B.C.A ,who discovered a problem that a lot off books which we had read a longback and now these
                        books have became useless to us and they are remaining ideal for a large period of time.
                    </p>
                    <p className="text-lg">1. YOU WILL SAVE MONEY FOR BUYING A NEW BOOK.</p>
                    <p className="text-lg">2. YOU WILL DISCOVER NEW PEOPLE WHO HAVE SIMILLAR INTEREST AS YOU HAVE.</p>
                </div>
                <img className="mt-5 w-96" src="about.png" alt="" />
            </div>

            <div className="flex mt-16 flex-col items-center justify-center">
                <h1 id="team-title" className="font-bold text-4xl my-10">Our Team</h1>
                <div className="flex items-center justify-center space-x-4 space-y-4 flex-wrap">
                    <span></span>
                    <TeamCard/>
                    <TeamCard/>
                    <TeamCard/>
                </div>
            </div>

        </div>
    )
}
