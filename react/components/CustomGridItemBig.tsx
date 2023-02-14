import React, { ReactNode } from "react"
import { useCssHandles } from "vtex.css-handles"
import "../css/styles.css"

type Props = {
    element: ReactNode
}

const CustomGridItemBig = ({ element }: Props) => {
    const CSS_HANDLES = [
        "grid__itemBig"
    ]
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <div className={`${handles["grid__itemBig"]}`}>
            {element}
        </div>
    )
}

export default CustomGridItemBig;