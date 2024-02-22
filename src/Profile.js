import 'bootstrap/dist/css/bootstrap.css';
export function Profile() {
    const img_info = {
        image_src: "https://i.imgur.com/QIrZWGIs.jpg",
        alt_desc: "image description dynamically",
        img_title: "elo",
    }
    return (

        <img
            className="rounded-circle mb-3"
            src={img_info.image_src}
            alt={img_info.alt_desc}
            title={img_info.img_title}
            style={{ width: '60px' }}
        />
    )
}
