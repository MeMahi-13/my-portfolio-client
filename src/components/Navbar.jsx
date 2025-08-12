
const Navbar = () => {
    return (
        <div className="bg-[#DBE6F5] p-3">
            <div className="bg-[#CBDCF3] flex justify-between items-center text-[#354E73] font-semibold">
                <div className=" flex justify-center items-center">
                    <img className="m-3 h-15 w-15 rounded-full" src="https://i.ibb.co.com/hxm5QPFD/1.png" alt="logo" />
                    <h1>work.mohima@gmail.com</h1>
                </div>

                <div class="text-color">
                    <ul className="flex gap-5 p-8">
                        <li><a href="">My Resume</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;