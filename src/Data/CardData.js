import { BsFillDiscFill } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';

export const CardData = [
    {
        id: 1,
        number: "64%",
        title: "Participation (1251 votes)",
        icon: <BsFillDiscFill size={50 } />,
        color: "#9B6969",
        margin: "-20%",
    },
    {
        id: 2,
        number: "1,961",
        title: "Voters",
        icon: <IoIosPeople size={50} />,
        color: "#D6D464",
        margin: "70%",
    },
    {
        id: 3,
        number: "2",
        title: "Ballot Questions",
        icon: <AiFillQuestionCircle size={50} />,
        color: "#85CC64",
        margin: "25%",
    },
    {
        id: 4,
        number: "266",
        title: "Options",
        icon: <BiMenu size={50} />,
        color: "#D791D9",
        margin: "60%",
    }
]