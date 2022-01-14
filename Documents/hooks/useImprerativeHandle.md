import {useRef} from 'react'
funcion App () {

const videoRef = useRef()

const handlePlay = () => {
videoREf.current.play()
}

const handlePause = () => {
videoREf.current.pause()
}
return (

<div>
<Video ref={videoRef}/>
<button>Play<button>
<button>Pause<button>
</div>
)
}

---

import {forwardRef. useImperativeHandle, } from 'react'
function Video() {
const videoRef = useRef
useImperativeHandle(ref , () => ({
play() {
video.current.play()
},
pause() {
video.current.pause()
},
}))
return (
<video>
src={video1}
width={280}
</video>
)
}

export default forwardRef(Video)
