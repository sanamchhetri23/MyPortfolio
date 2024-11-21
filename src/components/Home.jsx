import React from 'react';
import myImage from '../assets/imageMain.png';
import contact from '../assets/contact.png';

const Home = () => {
    return (
        <div>
            {/* Home Section */}
            <section id="home" className="flex items-center justify-center  bg-gray-200">
                <div className="text-center">
                    <img src={myImage} alt="Main" className="mx-auto max-w-full h-auto" />
                    <h1 className="text-4xl font-bold mt-4">Welcome to My Portfolio</h1>
                    <p className="text-lg mt-2">Explore my projects and learn more about me.</p>
                </div>
            </section>

            {/* Project Section */}
            <section id="project" className="p-6 bg-gray-100">
                <h1 className="text-4xl font-bold text-center mb-4">Projects</h1>
                <p className="text-lg text-center mb-6">Here are some of the projects I've worked on:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example Project Cards */}
                    <div className="project-card bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold">Project 1</h2>
                        <p>A brief description of Project 1.</p>
                    </div>
                    <div className="project-card bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold">Project 2</h2>
                        <p>A brief description of Project 2.</p>
                    </div>
                    <div className="project-card bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold">Project 3</h2>
                        <p>A brief description of Project 3.</p>
                    </div>
                </div>
            </section>

            {/* About me Page */}
            <section id="about" className=''>
                <div className="flex flex-row justify-center items-center">
                    <div className="bg-black flex-1 flex justify-center">
                        <img src={myImage} alt="Sanam's Picture"></img>
                    </div>
                    <div className="p-4 text-center flex-1 bg-yellow-50">
                        <h1 className="align text-center font-black text-6xl">Sanam Chhetri</h1>
                        <h3 className='text-s font-bold'>"Web Developer / Mobile Developer / iOS Developer"</h3>
                        <p className='text-xs'>You are a versatile web developer with a strong foundation in HTML, CSS, and JavaScript frameworks, enabling you to build responsive and dynamic websites. You are also proficient in Swift, giving you the ability to create seamless mobile applications for iOS. Your experience with Adobe tools like Photoshop, Illustrator, and XD adds a creative edge, allowing you to design visually appealing and user-friendly interfaces. Your broad skill set combines both front-end and mobile development, along with a keen eye for design, making you well-equipped to handle a range of development and design tasks.</p>
                    </div>
                </div>
            </section>

            {/* Contact Page */}
            <section id='contact' className='flex flex-col items-center justify-center m-10'>
                <h1 className='text-6xl font-bold p-4 text-center'>Get in touch with me</h1>
                <div id='contactPage' className='flex flex-col md:flex-row bg-blue-100 shadow-md rounded-lg p-6'>
                    {/* Image Section */}
                    <div className='flex flex-1 justify-center items-center md:mb-0'>
                        <img src={contact} alt='Contact Page' className='max-w-xs' />
                    </div>

                    {/* Form Section */}
                    <div className='flex flex-1 justify-center items-center '>
                        <form className='flex flex-col bg-white p-4 rounded shadow-lg'>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                className='border border-blue-200 rounded-md p-3 pl-4 mb-4'
                                placeholder='Enter your full name'
                                required
                            />
                            <input
                                type='text'
                                id='number'
                                name='number'
                                className='border border-blue-200 rounded-md p-3 mb-4'
                                placeholder='Enter your phone number'
                                required
                            />
                            <input
                                type='email'
                                id='email'
                                name='email'
                                className='border border-blue-200 rounded-md p-3 mb-4'
                                placeholder='Enter your email address'
                                required
                            />
                            <textarea
                                id='message'
                                name='message'
                                rows='4'
                                className='border border-blue-200 rounded-md p-3 mb-4'
                                placeholder='Write your message here'
                                required
                            ></textarea>
                            <button
                                type='submit'
                                className='bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-600'
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;
