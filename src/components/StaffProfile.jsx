import LargeStaffAvatar from "./LargeStaffAvatar"

export default function StaffProfile(props) {
    return (
        <div class=" flex flex-row">
            <div class="m-8 p-8 w-auto h-auto bg-[#1DCD8D] rounded-3xl">
                <div class="flex flex-row p-8">
                    <LargeStaffAvatar/>
                    <div class="flex-col my-auto px-8">
                        <h3 class="text-white text-4xl">Saira Kohli</h3>
                        <p class="text-white text-lg">Marketing Department</p>
                    </div>
                </div>
                <div class="flex flex-row flex-wrap my-auto px-6">
                    <div class="flex-col  px-2 w-80">
                        <p class="text-white text-lg">About me</p>
                        <p class="leading-5 text-sm">I'm passionate about teaching and helping my students unlock their
                         full potential. With over a decade of experience in the education 
                         sector, I have honed my skills in various teaching methodologies to 
                         cater to diverse learning styles.</p>
                    </div>
                    <div class="flex-col px-2 w-80">
                        <p class="text-white text-lg">Subject Speciality</p>
                        <div class="flex flex-row flex-wrap">
                            <div class="bg-white text-sm py-1 px-2 rounded-md m-1">
                                Mathematics
                            </div>
                            <div class="bg-white text-sm py-1 px-2 rounded-md m-1">
                                Accounting
                            </div>
                            <div class="bg-white text-sm py-1 px-2 rounded-md m-1">
                                Computing
                            </div>
                            <div class="bg-white text-sm py-1 px-2 rounded-md m-1">
                                Arts
                            </div>
                        </div>
                    </div>
                    <div class="flex-col  px-2 w-80">
                        <p class="text-white text-lg">Work Experience</p>
                        <div class="flex flex-row">
                            <div class="flex-col p-2 border-r-2 border-black text-sm text-center">
                                <p>2023</p>
                                <p>-</p>
                                <p>2024</p>
                            </div>
                            <div class="flex-col p-2 text-sm">
                                <h3 class="text-lg">Ginyard International Co.</h3>
                                <p>Product Design Manager</p>
                                <ul class="list-disc py-2 px-4">
                                    <li>Working with the wider development team.</li>
                                    <li>Manage website design, content, and SEO Marketing, Branding and Logo Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="flex-col  px-2 w-80">
                        <p class="text-white text-lg">Education</p>
                        <div class="flex flex-row">
                            <div class="flex-col p-2 border-r-2 border-black text-sm text-center">
                            </div>
                            <div class="flex-col p-2 text-sm">
                                <div class="my-1">
                                    <h3 class="text-lg">Bachelor of Design</h3>
                                    <p>Wardiere University</p>
                                    <p>2017 - 2021</p>
                                </div>
                                <div class="my-1">
                                    <h3 class="text-lg">Bachelor of Design</h3>
                                    <p>Wardiere University</p>
                                    <p>2017 - 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-col  px-2 w-80">
                        <div class="my-2">
                            <p class="text-white text-lg">Teaching Style</p>
                        </div>
                        <div class="my-2">
                            <p class="text-white text-lg">Languages</p>
                            <div class="flex flex-row flex-wrap">
                                <div class="bg-white text-sm py-1 px-2 rounded-md m-1">
                                    English
                                </div>
                                <div class="bg-white text-sm py-1 px-2 rounded-md m-1">
                                    Urdu
                                </div>
                                <div class="bg-white text-sm py-1 px-2 rounded-md m-1">
                                    Arabic
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-col  px-2 w-80">
                        <p class="text-white text-lg">Certificates & Avhievements</p>
                    </div>
                    
                </div>
            </div>
          </div>
    )
}