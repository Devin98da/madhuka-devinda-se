import BilderBid from '../Assets/BuilderBid.jpg';
import BilderBid_SS1 from '../Assets/Builderbid/ss1.jpg';
import BilderBid_SS2 from '../Assets/Builderbid/ss2.jpg';


export const ProjectsData = [
  {
    id: 1,
    title: 'Builder Bid',
    summary:"Simple estimating software for home builders and contractors.",
    // summary_list:{
    //   1:""
    //   1:"Full game creation."
    // },
    image: BilderBid,
    github: '',
    demo: 'https://builderbid.com/',
    platform: 'Web',
    language: 'Javascript, Typescript',
    tool_used: 'Node Js, Angular, Express Js, Mongo DB, Redux, Konva Js, Boostrap',
    duration: '10 months',
    completoin: '-',
    team_size: '5',
    overview: {
      1: "BuilderBid is a comprehensive web application designed to streamline the construction bidding process for home builders and trade contractors. The platform offers robust estimating and takeoff services, enabling users to efficiently manage project bids and proposals. With its intuitive interface, BuilderBid simplifies the estimation of project costs, materials, and labor, allowing for more accurate and competitive bids. The application integrates various tools to enhance productivity, reduce errors, and improve collaboration among team members. Overall, BuilderBid serves as an essential tool for construction professionals aiming to optimize their project management and bidding processes.",
    },
    roles_responsibilities: {
      1: 'Frontend Development',
      2: 'Backend Development',
      3: 'Database Management',
      4: 'Integration',
      5: 'Testing and Debugging',
      6: 'Collaboration',
    },
    project_screenshots: {
      1 : BilderBid_SS1,
      2 : BilderBid_SS2
    }   
  },
]