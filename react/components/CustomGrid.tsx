import React, { ReactNode } from "react"
import customGridSchema from "../schemas/custom-grid-schema";
import CustomGridItemBig from "./CustomGridItemBig";
import CustomGridItemSmall from "./CustomGridItemSmall";
import { useCssHandles } from "vtex.css-handles"
import "../css/styles.css"

type Props = {
    gridType: number
    children: [
        ReactNode,
        ReactNode,
        ReactNode,
        ReactNode,
        ReactNode
    ]
}

const CustomGrid = ({ gridType = 2, children }: Props) => {
    const CSS_HANDLES = [
        `grid__${gridType}`
    ]
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <div className={`${handles[`grid__${gridType}`]} mt7`}>
            <CustomGridItemBig
                element={children[0]}
            />
            <CustomGridItemSmall
                elementOne={children[1]}
                elementTwo={children[2]}
            />
            <CustomGridItemSmall
                elementOne={children[3]}
                elementTwo={children[4]}
            />
        </div>
    )
}

CustomGrid.schema = customGridSchema

export default CustomGrid;