import React, { ReactNode } from "react"
import { useCssHandles } from "vtex.css-handles"
import "../css/styles.css"

type Props = {
    elementOne: ReactNode,
    elementTwo: ReactNode
}

const CustomGridItemSmall = ({ elementOne, elementTwo }: Props) => {
    const CSS_HANDLES = [
        "grid__itemSmall"
    ]
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <div className={handles["grid__itemSmall"]}>
            {elementOne}
            {elementTwo}
        </div>
    )
}

export default CustomGridItemSmall;