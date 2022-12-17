interface IAboutMeProps {
    activeIndex: number;
}

export const AboutMe: React.FC<IAboutMeProps> = ({ activeIndex }) => {
    const className = `about-me p ${activeIndex === -1 ? "active" : ""}`;

    return (
        <div className={className}>
            <h1>Greetings.</h1>
            <p>
                I am Nikola Markovic, software developer with over two years of
                professional experience, developing frontend UIs in
                VanillaJS/React/Angular and designing APIs using Node/Go.
                <br />
                <br />
                My job is making sure your applications run smoothly across all
                browsers and screen devices with fast loading time.
                <br />
                <br />
                Here you can check out some of my projects.
            </p>
        </div>
    );
};
