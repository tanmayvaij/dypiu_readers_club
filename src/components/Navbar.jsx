export default function Navbar () {
    return (
        <div id="navbar" className="space-x-6 flex items-center justify-between py-2 px-8 border">
            <img className="w-32" src="title_img.png" alt="" />
            <div className="space-x-10">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
        </div>
    )
}
