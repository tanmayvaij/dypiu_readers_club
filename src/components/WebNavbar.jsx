import { Navbar, Dropdown, Avatar } from "flowbite-react"
import { NavLink, useLocation } from "react-router-dom"

export default function WebNavbar() {

    const loc = useLocation()

    const navLinks = [
        { path: "/", name: "Home" },
        { path: "/library", name: "Library" },
        { path: "/report", name: "Report" },
        { path: "/about", name: "About Us" }
    ]

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="title_img.png"
                    className="mr-3 h-6 sm:h-9 rounded"
                    alt="Flowbite Logo"
                />
            </Navbar.Brand>

            <div className="flex md:order-2">

                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={
                        <Avatar
                            alt="User settings"
                            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            rounded={true}
                        />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>

                    <Dropdown.Item> Dashboard </Dropdown.Item>
                    <Dropdown.Item> Settings </Dropdown.Item>
                    <Dropdown.Item> Earnings </Dropdown.Item>

                    <Dropdown.Divider />

                    <Dropdown.Item> Sign out </Dropdown.Item>

                </Dropdown>

                <Navbar.Toggle />

            </div>

            <Navbar.Collapse className="text-center" >

                {
                    navLinks.map((link, id) => {
                        return (
                            <NavLink
                                key={id}
                                className={`${loc.pathname == link.path ? "text-white" : "text-gray-400"} hover:text-white`}
                                to={link.path}
                            >
                                {link.name}
                            </NavLink>
                        )
                    })
                }

            </Navbar.Collapse>

        </Navbar>
    )
}
