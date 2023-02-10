import { Carousel } from "flowbite-react"

export default function WebCarousel() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-8">
            <Carousel>
                <img
                    className="h-full"
                    src="img1.jpg"
                    alt="..."
                />
                <img
                    className="h-full"
                    src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="..."
                />
                <img
                    className="h-full"
                    src="https://images.pexels.com/photos/247899/pexels-photo-247899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="..."
                />
            </Carousel>
        </div>
    )
}
