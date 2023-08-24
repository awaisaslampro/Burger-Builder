import { React, useState } from 'react'
import Layout from '../components/Layout'
import Title from '../components/Title';

function Home() {
    // const [name, setName] = useState("Shahbaz");
    const [show, setShow] = useState(false);

    const nameHandler = () => {
        let showName = show;
        setShow(!showName)
    }

    return (
        <div>
            <Layout>
                <div>
                    {/* intro section */}
                    <div className='h-screen bg-theme'>
                        <div className='grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0
                        mx-10 z-10 bg-theme
                        border-white transform rotate-12 md:rotate-0 '>
                            <h1 className='pl-8 mt-7 text-white font-bold'></h1>

                            <button
                                onClick={nameHandler}
                                className='text-white font-bold'>
                                Click me
                            </button>

                            {show && <div >
                                <Title />
                            </div>}

                        </div>

                    </div>
                    {/* Technologies */}
                    <div className='mt-20'>
                        <h1 className='my-8 text-4xl text-blue-800 font-bold text-center'>Technologies I USE</h1>
                        {/* <div className='grid md:grid-cols-1 grid-cols-4'>
                            <FaReact size={180} color='cyan' className='w-full text-center mt-20' />
                            <FaGithub size={180} color='#24292f' className='w-full text-center mt-20 animate-bounce' />
                            <FaHtml5 size={180} color='#f46403' className='w-full text-center mt-20 animate-bounce' />

                            <FaBootstrap size={180} color='#563d7c' className='w-full text-center mt-20' />
                            <FaJsSquare size={180} color='green' className='w-full text-center mt-20 animate-bounce' />
                            <FaPython size={180} color='orange' className='w-full text-center mt-20' />
                            <FaCss3 size={180} color='#1c36a2' className='w-full text-center mt-20 ' />

                            <SiTailwindcss size={180} color='#069' className='w-full text-center mt-20 animate-bounce' />
                        </div> */}
                    </div>

                    {/* Javascript Buff */}
                    <div className='my-20 '>
                        <div className='text-center h-52 bg-primary'>
                            <h1 className='text-white font-bold text-4xl py-10'>Yes, You Are Right... I am Javascript Buff</h1>
                        </div>
                        <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white'>
                            <div className='h-96'>
                                <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_qjryhqec/data.json" background="transparent"
                                    speed="1" loop autoplay>
                                </lottie-player>
                            </div>
                            <p className='text-xl my-5 font-semibold md:px-5 px-14 py-10'>
                                Javascript is one of the most top ranked programming language because of its ubiquitous use on all
                                platforms and mass adoption. Main use cases: Web Development.
                            </p>
                        </div>
                    </div>

                    {/* Dev stack Section */}
                    <div className='my-20 '>
                        <div className='text-center h-52 bg-red-500'>
                            <h1 className='text-white font-bold text-4xl py-10'>My DEV Stack</h1>
                        </div>
                        <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white'>
                            <div className='h-96'>
                                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_p1qiuawe.json" loop autoplay></lottie-player>
                            </div>
                            <p className='text-xl my-5 font-semibold md:px-5 px-14 py-10'>
                                Javascript is one of the most top ranked programming language because of its ubiquitous use on all
                                platforms and mass adoption. Main use cases: Web Development.
                            </p>
                        </div>
                    </div>
                    {/* Dev info */}
                    <div>
                        <h1 className='text-4xl text-gray-500 text-center font-bold'>Who is Awais ?</h1>
                        <div className='h-screen relative text-gray-800'>
                            <div className='h-full'>
                                <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_dcatp5cr.json" loop autoplay></lottie-player>
                            </div>
                            <div className='absolute inset-0 flex flex-col items-center justify-center'>
                                <h1 className='text-2xl font-bold'>Hello...
                                    <hr />
                                    {/* pre and Json.stingify used for defining text in object form. 
                                    passing it arguments null,2 for the purpose written in html form */}
                                    <pre className='text-xl md:text-sm my-5 font-semibold'>
                                        {JSON.stringify({
                                            name: "Muhammad Awais",
                                            age: null,
                                            country: "Portugal",
                                            gender: "male",
                                            experience: true

                                        }, null, 2)}
                                    </pre>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Home