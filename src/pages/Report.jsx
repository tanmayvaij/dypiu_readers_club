import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

export default function Report() {
    return (
        <div id="report" className="bg-gray-900">
            <form className="flex flex-col gap-4 m-10 p-16">

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Your Name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        placeholder="Enter Your Name"
                        required={true}
                        shadow={true}
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Your Email"
                        />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        placeholder="Enter Your Email"
                        required={true}
                        shadow={true}
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="number"
                            value="Your Phone Number"
                        />
                    </div>
                    <TextInput
                        id="number"
                        type="tel"
                        placeholder="Enter your phone number"
                        required={true}
                        shadow={true}
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="subject"
                            value="Subject"
                        />
                    </div>
                    <TextInput
                        id="subject"
                        type="text"
                        placeholder="Enter subject"
                        required={true}
                        shadow={true}
                    />
                </div>

                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Your message"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        placeholder="Leave a comment..."
                        required={true}
                        rows={4}
                    />
                </div>

                <Button type="submit">
                    Report
                </Button>

            </form>
        </div>
    )
}
