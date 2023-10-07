

const Contact = () => {
    return (
        <div className="my-10 w-4/6 mx-auto">
            <h1 className="text-center font-bol text-4xl">Feel Free To Contact Us</h1>
            <form className=" shadow-xl px-10 py-11 flex flex-col ">

            <input type="text" name="name" placeholder="your name" className=" px-3 py-3 border-b border-black focus:outline-none " required />

                <div className="grid grid-cols-2 gap-4 ">

                    <input type="text" name="number" placeholder="Your number" className="px-3 py-3 mt-5 border-b border-black focus:outline-none" required />

                    <input type="email" name="email" placeholder="Your email" className="px-3 py-3 mt-5 border-b border-black focus:outline-none" required />

                </div>
        
                <input type="text" placeholder=" Your address" className="mt-6 px-3 py-3 border-b border-black focus:outline-none" />
        <br />
            <textarea className="border-b border-black focus:outline-none" placeholder="message" id="" cols="30" rows="10"></textarea>
        <br />
            <button className="btn btn-primary ">Submit</button>
            </form>
        </div>
    );
};

export default Contact;