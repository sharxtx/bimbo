'use client'

import { IKImage } from 'imagekitio-next'
import React from 'react'

type Props = {
    path: string;
    w?: number;
    h?: number;
    alt: string;
    className?: string;
    transformation?: boolean;
    priority?: boolean;
}

const url = process.env.NEXT_PUBLIC_URL_ENDPOINT

export default function Image({ path, w, h, alt, className, transformation, priority = false }: Props) {
    return (
        <IKImage urlEndpoint={url} path={path} alt={alt} className={className}
            {...(transformation ? { transformation: [{ width: `${w}`, height: `${h}` }] } : { width: w, height: h })}
            priority={priority}
        />
    )
}
