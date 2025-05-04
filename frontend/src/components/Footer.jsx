const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-black text-white border-t border-gray-800 px-4 py-6 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-center md:text-left text-muted-foreground leading-relaxed">
                    &copy; {year}{" "}
                    <span className="font-semibold">CineVerse</span>. A Netflix
                    clone built with{" "}
                    <a
                        href="https://developer.themoviedb.org/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-white transition"
                        aria-label="TMDB API Docs"
                    >
                        TMDB API
                    </a>
                    . Built by{" "}
                    <a
                        href="https://github.com/kumarpraveen-s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-white transition"
                        aria-label="GitHub Profile"
                    >
                        @kumarpraveen-s
                    </a>
                    .
                </p>

                <div className="flex gap-4">
                    <a
                        href="https://github.com/kumarpraveen-s/netflix-clone"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repo"
                        className="text-muted-foreground hover:text-white transition"
                    >
                        <i className="fab fa-github text-xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
