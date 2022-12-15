interface INavigationProps {
    setProject: React.Dispatch<React.SetStateAction<number>>;
}

export const NavigationComponent: React.FC<INavigationProps> = ({
    setProject,
}) => {
    return (
        <header>
            <div className="logo" onClick={() => setProject(-1)}>
                N
            </div>
            <nav>
                <a
                    href="https://www.linkedin.com/in/markovicjs/"
                    target="_blank"
                >
                    LinkedIn
                </a>
                <a href="https://github.com/nikolamarkovic98" target="_blank">
                    Github
                </a>
                <a href="#" target="_blank">
                    Resume
                </a>
            </nav>
        </header>
    );
};
