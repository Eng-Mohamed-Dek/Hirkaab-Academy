import contact_image from './rectangle favicon.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import course1 from './course1.png'
import course2 from './course2.jpg'
import course3 from './course3.png'
import course4 from './course4.jpg'
import course5 from './course5.png'
import course6 from './course6.jpg'
import course7 from './course7.jpg'
import course8 from './course8.jpg'
import design from './design.png'
import code from './code.svg'
import webdesign from './web design.png'
import video from './video.png'
import start from './star.jpg'
import teacherImg from './profile.png'

export const assets = {
    logo,
    info_icon,
    arrow_icon,
    contact_image,
    menu_icon,
    dropdown_icon,
}

export const category = [
    {
        category: 'Development',
        image: code
    },
    {
        category: 'Web Design',
        image: webdesign
    },
    {
        category: 'Graphic Design',
        image: design
    },
    {
        category: 'Video Editing',
        image: video
    },
]

export const courses = [
    {
        name: 'Premiere Pro',
        image: course1,
        category: 'Video Editing',
        students: '2',
        about: 'Course waxaad ku barandoontaa video editing bilow ilaa dhamaad adigoo barandoonna sida loo edit karey videoska si aasaasi ah.',
        fees: 10,
        discount: 5,
        isCart: false,
        teacher: "Mohamed Dek",
        tutorImg: teacherImg,
        start
    },
    {
        name: 'Wordpress',
        image: course2,
        category: 'Web Design',
        students: '2',
        about: 'Course waxaad ku barandoontaa web design bilow ilaa dhamaad.',
        fees: 10,
        discount: 5,
        isCart: false,
        teacher: "Mohamed Dek",
        tutorImg: teacherImg,
        start
    },
   
    {
        name: 'Adobe Illustrator',
        image: course3,
        category: 'Graphic Design',
        students: '0',
        about: 'Course waxaad ku barandoontaa web design bilow ilaa dhamaad.',
        fees: 10,
        discount: 5,
        isCart: false,
        teacher: "Mohamed Dek",
        tutorImg: teacherImg,
        start
    },
   
    {
        name: 'Bootstrap',
        image: course4,
        category: 'Development',
        students: '0',
        about: 'Course waxaad ku barandoontaa Bootstrap bilow ilaa dhamaad.',
        fees: 10,
        discount: 5,
        isCart: false,
        teacher: "Mohamed Dek",
        tutorImg: teacherImg,
        start
    },
   
    {
        name: 'HTML and CSS',
        image: course5,
        category: 'Development',
        students: '5',
        about: 'Course waxaad ku barandoontaa Development bilow ilaa dhamaad.',
        fees: 10,
        discount: 5,
        isCart: false,
        teacher: "Mohamed Dek",
        tutorImg: teacherImg,
        start
    },
   
    {
        name: 'Visual Studio Code',
        image: course6,
        category: 'Development',
        students: '2',
        about: 'Course waxaad ku barandoontaa Development bilow ilaa dhamaad.',
        fees: 10,
        discount: 5,
        isCart: false,
        teacher: "Mohamed Dek",
        tutorImg: teacherImg,
        start,
        free: true
    },
   
    {
        name: 'Tailwind CSS',
        image: course7,
        category: 'Development',
        students: '2',
        about: 'Course waxaad ku barandoontaa Development bilow ilaa dhamaad.',
        fees: 10,
        discount: 5,
        isCart: false,
        teacher: "Mohamed Dek",
        tutorImg: teacherImg,
        start
    },
   
    {
        name: 'Git and Github',
        image: course8,
        category: 'Development',
        students: '2',
        about: 'Course waxaad ku barandoontaa Development bilow ilaa dhamaad.',
        fees: 10,
        discount: 5,
        isCart: false,
        teacher: "Mohamed Dek",
        tutorImg: teacherImg,
        start
    },
]