import igdb_app from "./img/igdb_app_big.jpg";
import igdb_app2 from "./img/igdb_app_big2.jpg";
import player_app from "./img/player_app_big2.jpg";
import player_app2 from "./img/player_app_big.jpg";
import homepage1 from "./img/homepage_big.jpg";

export const ProjectState = () => {
    return [
        {
            title: "IGDB App",
            mainImg: igdb_app,
            secondaryImg: igdb_app2,
            url: "/work/igdb_app",
            git: "https://github.com/Siedmiooki/GameInfoApp",
            live: "https://hardcore-bell-2605b8.netlify.app",
            info: [
                {
                    title: "Project overview",
                    description:
                        "React application providing alot of informations about popular, upcomming and recent video games. Search feature alows to find any game info from database.",
                },
                {
                    title: "Technology",
                    description:
                        "IGDB was built with React, Redux, Framer, Styled Components and rawg.io API.",
                },
            ],
        },
        {
            title: "Player App",
            mainImg: player_app,
            url: "/work/player_app",
            secondaryImg: player_app2,
            info: [
                {
                    title: "Project overview",
                    description:
                        "React application providing alot of informations about popular, upcomming and recent video games. Search feature alows to find any game info from database.",
                },
                {
                    title: "Technology",
                    description:
                        "IGDB was built with React, Redux, Framer, Styled Components and rawg.io API.",
                },
            ],
        },
        {
            title: "My Homepage",
            mainImg: homepage1,
            url: "/work/homepage",
            secondaryImg: homepage1,
            info: [
                {
                    title: "Project overview",
                    description:
                        "React application providing alot of informations about popular, upcomming and recent video games. Search feature alows to find any game info from database.",
                },
                {
                    title: "Technology",
                    description:
                        "IGDB was built with React, Redux, Framer, Styled Components and rawg.io API.",
                },
            ],
        },
    ];
};