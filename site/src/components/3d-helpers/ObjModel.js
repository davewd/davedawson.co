import React, { useMemo, useState, useRef } from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

function Model({ url }) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()

    const [obj, set] = useState()
    console.log(url)
    useMemo(() => new OBJLoader().load(url, set), [url])
    return( obj ? 
        <mesh 
        ref={mesh}
        castShadow>
                <primitive object={obj} />
                <meshPhongMaterial attach="material" color="hotpink" />
        </mesh>
    :
        null )
}

export default Model;