import igdb_app from "./img/igdb_app_big.jpg";
import igdb_app2 from "./img/igdb_app_big2.jpg";
import player_app from "./img/player_app_big2.jpg";
import player_app2 from "./img/player_app_big.jpg";
import homepage1 from "./img/homepage_big.jpg";
import homepage2 from "./img/homepage_big2.jpg";

export const ProjectState = () => {
    return [
        {
            title: "Game Database App",
            mainImg: igdb_app,
            secondaryImg: igdb_app2,
            url: "/work/igdb_app",
            git: "https://github.com/Siedmiooki/GameInfoApp",
            live: "https://hardcore-bell-2605b8.netlify.app",
            info: [
                {
                    title: "Project overview",
                    description:
                        "React application providing alot of informations about popular, upcomming and recent video games with details on click funcionality. Search feature alows to find any game info from database.",
                },
                {
                    title: "Technology",
                    description:
                        "Game Database App was built with React, Redux, Framer Motion, Styled Components and rawg.io API.",
                },
            ],
        },
        {
            title: "Player App",
            mainImg: player_app,
            secondaryImg: player_app2,
            url: "/work/player_app",
            git: "https://github.com/Siedmiooki/react-player",
            live: "https://epic-babbage-bca114.netlify.app",
            info: [
                {
                    title: "Project overview",
                    description:
                        "Simple react application with localy stored music database.",
                },
                {
                    title: "Technology",
                    description:
                        "React player was built with React, Sass and FontAwsome Icons.",
                },
            ],
        },
        {
            title: "Homepage",
            mainImg: homepage1,
            secondaryImg: homepage2,
            url: "/work/homepage",
            git: "https://github.com/Siedmiooki/mypage",
            live: "https://optimistic-carson-1a56a2.netlify.app",
            info: [
                {
                    title: "Project overview",
                    description:
                        "My homepage was inspired by one of tutorial project that I encounter during my react studies. Clean, simple and functional.",
                },
                {
                    title: "Technology",
                    description:
                        "My homepage was biult in React, Framer Motion, Styled Components and local database. Nodemailer connected to Gmail and Firebase function used in contact section.",
                },
            ],
        },
    ];
};