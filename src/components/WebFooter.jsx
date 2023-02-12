import { Footer } from "flowbite-react";

export default function WebFooter() {

    return (
        <Footer container={true} className="mt-16">
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        href="https://flowbite.com"
                        src="logo.png"
                        alt="Flowbite Logo"
                        name="READIT - Read the Future"
                    />
                    <Footer.LinkGroup>
                        <Footer.Link href="#">
                            About
                        </Footer.Link>
                        <Footer.Link href="#">
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#">
                            Licensing
                        </Footer.Link>
                        <Footer.Link href="#">
                            Contact
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright
                    href="#"
                    by="Flowbite™"
                    year={2022}
                />
            </div>
        </Footer>
    )
}
