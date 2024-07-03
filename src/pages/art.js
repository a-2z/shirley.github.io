import React from "react"

const artRowStyles = {
    display: "flex",
    flexWrap: "wrap",
    padding: 20,
}

const artColumnStyles = {
    flex: "50%",
    padding: 20,
}

const ArtPage = () => {
  const artData = [
    { id: 1, src: 'https://web-japan.org/trends/11_fashion/images/fas201910_hokusai01.jpg', title: 'Artwork 1' },
    { id: 2, src: 'https://www.apollo-magazine.com/wp-content/uploads/2018/08/Hoa_Hakananaia-e1533737404678.jpg?w=730path_to_image2.jpg', title: 'Artwork 2' },
    // Add more artworks as needed
  ];

  return (
    <div className="art-row" style={artRowStyles}>
      {artData.map(artwork => (
        <div key={artwork.id} className="artwork" style={artColumnStyles}>
          <img src={artwork.src} alt={artwork.title} style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      ))}
    </div>
  );
}

export default ArtPage

export const head = () => {
    <title>Art!</title>
}