import React from 'react'
import { videoAssetFor } from "../../../sanity.js";

const VideoAnimation = ({ webm, fallback, alt, caption }) => {
  if (!webm || !fallback) {
    return null
  }
  const webmAsset = videoAssetFor(webm)
  const fallbackAsset = videoAssetFor(fallback)

  return (
    <figure>
      <video
        title={alt}
        loop muted autoPlay playsInline>
        <source src={webmAsset.url} type={`video/${webmAsset.extension}`} />
        <source src={fallbackAsset.url} type={`video/${fallbackAsset.extension}`} />
      </video>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default VideoAnimation