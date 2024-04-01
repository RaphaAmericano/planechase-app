'use client'

import React, { useState } from "react"
import { useServerInsertedHTML } from "next/navigation"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"

export default function StyledComponentsRegistry({
    children
}: { children: React.ReactNode}){
    const [ styledCOmponentsStyleSheet] = useState(() => new ServerStyleSheet())
    useServerInsertedHTML(() => {
        const styles = styledCOmponentsStyleSheet.getStyleElement()
        styledCOmponentsStyleSheet.instance.clearTag()
        return <>{styles}</>
    })

    if(typeof window !== "undefined") return <>{children}</>
    return (
        <StyleSheetManager sheet={styledCOmponentsStyleSheet.instance}>{children}</StyleSheetManager>
    )
}