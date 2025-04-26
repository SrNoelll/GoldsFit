
const renderMedia = (src) => {
    const extension = src.split(".").pop().toLowerCase();
    if (extension === "mp4") {
        return (
            <video
                width="200"
                autoPlay
                loop
                muted
                playsInline
                style={{ borderRadius: "8px" }}
            >
                <source src={src} type="video/mp4" />
                Tu navegador no soporta el video.
            </video>
        );
    } else {
        return (
            <img
                src={src}
                alt="ejercicio"
                width="200"
                style={{ borderRadius: "8px" }}
            />
        );
    }
};