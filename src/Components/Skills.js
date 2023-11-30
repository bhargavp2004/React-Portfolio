import React from 'react';
import 'devicon';

function Skills() {
    const skills = [
        {
            id: 1,
            linkName: "devicon-html5-plain colored",
            text: "Html"
        },
        {
            id: 2,
            linkName: "devicon-css3-plain colored",
            text: "Css"
        },
        {
            id: 3,
            linkName: "devicon-javascript-plain colored",
            text: "JavaScript"
        },
        {
            id: 4,
            linkName: "devicon-bootstrap-plain colored",
            text: "Bootstrap"
        },
        {
            id: 5,
            linkName: "devicon-tailwindcss-original-wordmark colored",
            text: "Tailwind Css"
        },
        {
            id: 6,
            linkName: "devicon-c-plain  colored",
            text: "C"
        },
        {
            id: 7,
            linkName: "devicon-cplusplus-plain colored",
            text: "C++"
        },
        {
            id: 8,
            linkName: "devicon-csharp-plain colored",
            text: "C#"
        },
        {
            id: 9,
            linkName: "devicon-java-plain-wordmark colored",
            text: "Java"
        },
        {
            id: 10,
            linkName: "devicon-python-plain-wordmark colored",
            text: "Python"
        },
        {
            id: 11,
            linkName: "devicon-django-plain-wordmark",
            text: "Django"
        },

        {
            id: 12,
            linkName: "devicon-react-plain colored",
            text: "React"
        },
        {
            id: 13,
            linkName: "devicon-nodejs-plain colored",
            text: "Node"
        },
        {
            id: 14,
            linkName: "devicon-dot-net-plain colored",
            text: ".Net"
        },
        {
            id: 15,
            linkName: "devicon-dotnetcore-plain colored",
            text: ".Net Core"
        },
        {
            id: 16,
            linkName: "devicon-php-plain colored",
            text: "PHP"
        },
        {
            id: 17,
            linkName: "devicon-mysql-plain colored",
            text: "MySQL"
        },

        {
            id: 18,
            linkName: "devicon-github-plain colored",
            text: "Github"
        },
        {
            id: 19,
            linkName: "devicon-mongodb-plain colored",
            text: "MongoDB"
        },
        {
            id: 20,
            linkName: "devicon-dart-plain colored",
            text: "Dart"
        },
        {
            id: 21,
            linkName: "devicon-aftereffects-plain",
            text: "Adobe After Effects"
        },
        {
            id: 22,
            linkName: "devicon-premierepro-plain",
            text: "Adobe Premiere Pro"
        },
        {
            id: 23,
            linkName: "devicon-photoshop-plain",
            text: "Photoshop"
        },
    ]
    return (
        <div id="skills" className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-pink-950 from-45% flex flex-col items-center justify-center">
        <div className='text-gray-200 font-bold text-4xl justify-center items-center mt-16 md:mt-0 z-0'> My Skills </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-4 z-0">
            {skills.map(({ id, linkName, text }) => (
                <div key={id} className='text-gray-200 bg-gray-800 flex flex-col border-2 p-2 rounded border-blue-950 items-center justify-center'>
                    <div className='justify-center items-center text-4xl'>
                        <i className={linkName}></i>
                    </div>
                    <div>
                        <p className='text-base md:text-lg'>{text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Skills;
